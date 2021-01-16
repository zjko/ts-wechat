export enum MessageType {
  voice,
  video,
  text,
  picture,
  link,
  feedCard

}

export interface ChatRecordDO {
  conversion: string,
  sender:string
  type: MessageType
  content: string
  createTime: number
}

