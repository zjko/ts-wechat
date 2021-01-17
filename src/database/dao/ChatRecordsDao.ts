import { ChatRecordDO } from "../dos/ChatRecord";
import { storeName } from "../config";

export class ChatRecordsDao {
  public static readonly tableNamePrefix = "ChatRecordsDao";
  public static version = 1;
  private static instance: ChatRecordsDao;
  private db;
  private constructor() {
    this.db = (window as any).openDatabase(
      storeName,
      "1.0",
      "Test DB",
      2 * 1024 * 1024
    );
    this.init();
  }
  public static getInstance() {
    if (!ChatRecordsDao.instance) {
      ChatRecordsDao.instance = new ChatRecordsDao();
    }
    return ChatRecordsDao.instance;
  }

  private init() {
    this.db.transaction(function(tx) {
      tx.executeSql(
        `
      CREATE TABLE  IF NOT EXISTS chat_record (
        id  integer PRIMARY KEY autoincrement,
        conversion char(36) NOT NULL,
        create_time datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        content_type char(30) NOT NULL,
        content text NOT NULL ,
        sender char(36) NOT NULL
      );
      `,
        [],
        (tx, res) => console.log("create table success"),
        (tx, err) => {
          console.log("create table fail:");
          console.log(err);
        }
      );

      tx.executeSql(
        `
      CREATE INDEX IF NOT EXISTS conversion on chat_record (conversion, create_time);
      `,
        [],
        (tx, res) => console.log("create index success"),
        (tx, err) => console.log("create index fail:" + err)
      );
    });
  }

  public get(conversion: string, page: number, size: number) {
    return new Promise((resolve,reject) => {
      this.db.transaction(function(tx) {
        let start = page * size;
        tx.executeSql(
          `
          SELECT * 
          FROM chat_record 
          where conversion = '${conversion}' 
          order by create_time desc 
          limit ${size} offset ${start}
          `,
          [],
          (tx, results) => {
            console.log("select success"+`
            SELECT * 
            FROM chat_record 
            where conversion = '${conversion}' 
            order by create_time desc 
            limit ${size} offset ${start}
            `);
            console.log(results);
          },
          (tx, error) => {
            console.log("select fail:");
            console.log(error);
          }
        );
      });

    })
    
  }

  public add(record: ChatRecordDO) {
    this.db.transaction(function(tx) {
      tx.executeSql(
        `
        INSERT INTO chat_record 
        (conversion, create_time, content_type, content, sender) VALUES 
        ( '${record.conversion}', ${record.createTime}, '${record.type}', '${record.content}', '${record.sender}');
        `,
        [],
        (tx, results) => {
          console.log("insert success:"+
          
          `
        `
          );
          console.log(new Date())
        },
        (tx, error) => {
          console.log("insert fail");
          console.log(error);
        }
      );
    });
  }
}
