export enum MessageType {
  voice,
  video,
  text,
  picture,
  link,
  feedCard

}

export interface ChatRecord {
  id: number
  isMe: boolean
  profilePicture: string
  type: MessageType
  content: any
  createTime: number
}

