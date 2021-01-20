import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import {ChatRecordDO,MessageType} from '@/database/dos/ChatRecord'
import {ChatRecordsDao} from '@/database/dao/ChatRecordsDao'
import {UserModule} from '../user'

export interface ChatRecordCellVO {
  isMe: boolean
  photo: string,
  type: MessageType,
  content: string
}

export interface IChatState {
  img: string
  name: string
  currentConversion:string
  currentRecords: ChatRecordCellVO[]
}

@Module({ dynamic: true, store, name: 'chat' })
class Chat extends VuexModule implements IChatState {
  public currentConversion = "1234"
  public img = "头像"
  public name = "名称"
  public currentRecords:ChatRecordCellVO[] = []

  @Mutation
  private SET_HEAD(head: { name: string, img: string , id:string}) {
    this.name = head.name
    this.img = head.img
    this.currentConversion = head.id
  }

  @Mutation
  private SET_CHAT_RECORD(list:ChatRecordCellVO[]) {
    this.currentRecords = list
  }

  @Mutation
  private ADD_CHAT_RECORD(cr: ChatRecordCellVO) {
    this.currentRecords.push(cr)
    this.currentRecords = this.currentRecords.slice()
  }

  @Action
  public setHead(head: { name: string, img: string, id:string }) {
    this.SET_HEAD(head)
    ChatRecordsDao.getInstance().get(
      head.id,
      0,
      30
    ).then(res=> {
      let list:ChatRecordCellVO[] = [];
      (res as []).forEach(item  => {
        let t:any = item
        let p:ChatRecordCellVO = {
          isMe: UserModule.uuid === t.sender,
          photo: "123",
          type: t.content_type,
          content: t.content
        }
        list.push(p)
      });
      this.SET_CHAT_RECORD(list.reverse())
    })
  }

  @Action
  public addChatRecord(cr: ChatRecordCellVO) {
   
    ChatRecordsDao.getInstance().add({
      conversion:this.currentConversion,
      sender:UserModule.uuid,
      type: cr.type,
      content: cr.content,
      createTime: new Date().getTime(),
    })
    this.ADD_CHAT_RECORD(cr)
  }



}

export const ChatModule = getModule(Chat)
