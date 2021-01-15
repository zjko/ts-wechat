import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { ChatRecord } from '@/database/dos/ChatRecord'


export interface IChatState {
  img: string
  name: string
  currentRecords: ChatRecord[]
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
  private ADD_CHAT_RECORD(cr: ChatRecord) {
    this.currentRecords.push(cr)
  }

  @Action
  public setHead(head: { name: string, img: string }) {
    this.SET_HEAD(head)
  }

  @Action
  public addChatRecord(cr: ChatRecord) {
    this.ADD_CHAT_RECORD(cr)
  }



}

export const ChatModule = getModule(Chat)
