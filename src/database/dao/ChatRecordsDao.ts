import { ChatRecord } from "../dos/ChatRecord";
import { storeName } from "../config";

export class ChatRecordsDao {
  public static readonly tableNamePrefix = "ChatRecordsDao";
  public getTableName(conversionId: string): string {
    return ChatRecordsDao.tableNamePrefix + conversionId;
  }
  public static version = 1;
  private static instance: ChatRecordsDao;
  private constructor() {}
  public static getInstance(): ChatRecordsDao {
    if (!ChatRecordsDao.instance) {
      ChatRecordsDao.instance = new ChatRecordsDao();
    }
    return ChatRecordsDao.instance;
  }

  private db!: IDBDatabase;
  public getDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      var request = window.indexedDB.open(storeName, ChatRecordsDao.version);
      var db;
      request.onerror = function(event) {
        reject();
      };
      request.onsuccess = function(event) {
        resolve(request.result);
      };
      request.onupgradeneeded = function(event: any) {
        resolve(event.target.result);
      };
    });
  }

  /**
   * 若数据库中不存在此对话，则为此对话创建一张数据表
   * @param tableName
   */
  private createTable(tableName: string): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      this.getDB().then((db) => {
        var objectStore;
        if (!db.objectStoreNames.contains(tableName)) {
          objectStore = db.createObjectStore(tableName, { keyPath: "id" });
        }
        resolve(db);
      });
    });
  }

  public add(conversionId: string, record: ChatRecord) {
    let that = this
    let tableName = this.getTableName(conversionId);
    this.createTable(tableName).then((res) => {
      this.getDB().then((db) => {
        console.log(db);
        var request = db
          .transaction(["person"], "readwrite")
          .objectStore("person")
          .add({ id: 1, name: "张三", age: 24, email: "zhangsan@example.com" });

        request.onsuccess = function(event) {
          console.log("数据写入成功");
          that.get("123",1,1)
        };

        request.onerror = function(event) {
          console.log("数据写入失败");
          console.log(event);
        };
      });
    });
  }

  public static getTableName(conversionId: string) {
    return ChatRecordsDao.tableNamePrefix + conversionId;
  }

  public get(conversionId: string, page: number, size: number) {
    this.getDB().then((db) => {
      var objectStore = db.transaction("person").objectStore("person");

      objectStore.openCursor().onsuccess = function(event: any) {
        var cursor = event.target.result;

        if (cursor) {
          console.log("Id: " + cursor.key);
          console.log("Name: " + cursor.value.name);
          console.log("Age: " + cursor.value.age);
          console.log("Email: " + cursor.value.email);
          cursor.continue();
        } else {
          console.log("没有更多数据了！");
        }
      };
    });
  }
}
