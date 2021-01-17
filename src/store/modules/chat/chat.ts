import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import {ChatRecordDO,MessageType} from '@/database/dos/ChatRecord'
import {ChatRecordsDao} from '@/database/dao/ChatRecordsDao'
import {UserModule} from '../user'

export interface ChatRecordCellVO {
  isMe: boolean
  photo: string,
  type: string,
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
  private SET_HEAD(head: { name: string, img: string }) {
    this.name = head.name
    this.img = head.img
  }


  @Mutation
  private ADD_CHAT_RECORD(cr: ChatRecordCellVO) {
    this.currentRecords.push(cr)
    this.currentRecords = this.currentRecords.slice()
    console.log(this.currentRecords)
  }

  @Action
  public setHead(head: { name: string, img: string }) {
    this.SET_HEAD(head)
  }

  @Action
  public addChatRecord(cr: ChatRecordCellVO) {
    
    // ChatRecordsDao.getInstance().add({
    //   conversion:this.currentConversion,
    //   sender:UserModule.uuid,
    //   type: MessageType.text,
    //   content: "any",
    //   createTime: new Date().getTime(),
    // })
    this.ADD_CHAT_RECORD(cr)
  }



}

export const ChatModule = getModule(Chat)
