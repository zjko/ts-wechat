export enum MessageType {
  voice = 'voice',
  video = 'video',
  text = 'text',
  picture = 'picture',
  link = 'link',
  feedCard = 'feedCard'

}

export interface ChatRecordDO {
  conversion: string,
  sender:string
  type: MessageType
  content: string
  createTime: number
}

