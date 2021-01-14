export enum MessageType {
  voice,
  video,
  text,
  picture,
  link,
  feedCard

}

export interface ChatRecord {
  isMe: boolean
  profilePicture: string
  type: MessageType
  content: any
}

