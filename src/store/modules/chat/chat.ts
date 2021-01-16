import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import {ChatRecordDO,MessageType} from '@/database/dos/ChatRecord'
import {ChatRecordsDao} from '@/database/dao/ChatRecordsDao'
import {UserModule} from '../user'

export interface ChatRecordCellVO {

}

export interface IChatState {
  img: string
  name: string
  currentRecords: ChatRecordCellVO[]
}

@Module({ dynamic: true, store, name: 'chat' })
class Chat extends VuexModule implements IChatState {
  public img = "头像"
  public name = "名称"
  public currentRecords = require('@/data/chatRecords.json')

  @Mutation
  private SET_HEAD(head: { name: string, img: string }) {
    this.name = head.name
    this.img = head.img
  }


  @Mutation
  private ADD_CHAT_RECORD(cr: ChatRecordCellVO) {
    this.currentRecords.push(cr)
    console.log(this.currentRecords)
  }

  @Action
  public setHead(head: { name: string, img: string }) {
    this.SET_HEAD(head)
  }

  @Action
  public addChatRecord(cr: ChatRecordCellVO) {
    ChatRecordsDao.getInstance().add({
      conversion:"2231",
      sender:UserModule.uuid,
      type: MessageType.text,
      content: "any",
      createTime: new Date().getTime(),
    })
    this.ADD_CHAT_RECORD(cr)
  }



}

export const ChatModule = getModule(Chat)
