import { ChatRecord } from '../dos/ChatRecord';
import { storeName } from '../config'

export class ChatRecordsDao {

  public static readonly tableNamePrefix = "ChatRecordsDao"
  public getTableName(conversionId: string): string {
    return ChatRecordsDao.tableNamePrefix + conversionId
  }
  public static version = 1
  private static instance: ChatRecordsDao
  private constructor() { }
  public static getInstance(): ChatRecordsDao {
    if (!ChatRecordsDao.instance) {
      ChatRecordsDao.instance = new ChatRecordsDao()
    }
    return ChatRecordsDao.instance;
  }

  private db!: IDBDatabase
  public getDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      if (this.db != undefined) {
        console.log(this.db + " db为非空，直接返回以前的db")
        resolve(this.db)
      }

      let request = window.indexedDB.open(
        storeName,
        ChatRecordsDao.version
      )
      request.onerror = (e) => {
        console.log('数据库打开失败');
        reject(e)
      }
      request.onsuccess = (e) => {
        console.log('数据库打开成功');
        this.db = request.result
        resolve(request.result)
      }
      request.onupgradeneeded = (e: any) => {
        console.log('数据库版本升级');
        this.db = e.target.result
        resolve(e.target.result)
      }
    })
  }


  /**
   * 若数据库中不存在此对话，则为此对话创建一张数据表
   * @param tableName 
   */
  private createTable(tableName: string): Promise<IDBDatabase> {
    var theDB = this.db
    return new Promise((resolve, reject) => {
      ChatRecordsDao.version++
      this.getDB().then(res => {
        console.log(theDB.objectStoreNames)
        console.log(tableName)
        if (!theDB.objectStoreNames.contains(tableName)) {
          console.log(tableName + "数据表不存在，则需要创建数据表")
          theDB.createObjectStore('person', { keyPath: 'id' });
          resolve(theDB)
        } else {
          console.log(tableName + "数据表存在，则无需创建")
          resolve(theDB)
        }
      })

    })
  }

  public add(conversionId: string, record: ChatRecord) {
    let databaseName = "123"

    var request = window.indexedDB.open(databaseName, 1);
    var db;

    request.onerror = function (event) {
      console.log('数据库打开报错');
    };
    request.onsuccess = function (event) {
      db = request.result;
      console.log('数据库打开成功');
      add();
      read();
      readAll();
    };
    request.onupgradeneeded = function (event: any) {
      db = event.target.result;
      var objectStore;
      if (!db.objectStoreNames.contains('person')) {
        objectStore = db.createObjectStore('person', { keyPath: 'id' });
        objectStore.createIndex('name', 'name', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
      }
    }

    function add() {
      console.log(db)
      var request = db.transaction(['person'], 'readwrite')
        .objectStore('person')
        .add({ id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' });

      request.onsuccess = function (event) {
        console.log('数据写入成功');
      };

      request.onerror = function (event) {
        console.log('数据写入失败');
        console.log(event);
      }
    }



    function read() {
      var transaction = db.transaction(['person']);
      var objectStore = transaction.objectStore('person');
      var request = objectStore.get(1);

      request.onerror = function (event) {
        console.log('事务失败');
      };

      request.onsuccess = function (event) {
        if (request.result) {
          console.log('Name: ' + request.result.name);
          console.log('Age: ' + request.result.age);
          console.log('Email: ' + request.result.email);
        } else {
          console.log('未获得数据记录');
        }
      };
    }



    function readAll() {
      var objectStore = db.transaction('person').objectStore('person');

      objectStore.openCursor().onsuccess = function (event) {
        var cursor = event.target.result;

        if (cursor) {
          console.log('Id: ' + cursor.key);
          console.log('Name: ' + cursor.value.name);
          console.log('Age: ' + cursor.value.age);
          console.log('Email: ' + cursor.value.email);
          cursor.continue();
        } else {
          console.log('没有更多数据了！');
        }
      };
    }


  }

  public static getTableName(conversionId: string) {
    return ChatRecordsDao.tableNamePrefix + conversionId
  }

  public get(conversionId: string) {
    // var transaction = this.db.transaction([conversionId]);
    // var objectStore = transaction.objectStore(conversionId);
    // let request = objectStore.get(10);

    // request.onerror = function (event) {
    //   console.log('事务失败');
    // };

    // request.onsuccess = function (event) {
    //   console.log('查询完成');
    //   console.log(event)
    //   console.log(request.result)
    // };

  }





}