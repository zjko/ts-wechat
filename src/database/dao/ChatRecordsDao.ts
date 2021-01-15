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
    return new Promise((resolve, reject) => {
      ChatRecordsDao.version++
      this.getDB().then(db => {
        console.log(db.objectStoreNames)
        console.log(tableName)
        if (!db.objectStoreNames.contains(tableName)) {
          console.log(tableName + "数据表不存在，则需要创建数据表")
          let objectStore = db.createObjectStore(
            tableName,
            { keyPath: 'id' }
          )
          resolve(db)
        } else {
          console.log(tableName + "数据表存在，则无需创建")
          resolve(db)
        }
      })
    })
  }

  public add(conversionId: string, record: ChatRecord) {
    let tableName = this.getTableName(conversionId)
    this.createTable(tableName).then(res => {
      console.log(res)
    })
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