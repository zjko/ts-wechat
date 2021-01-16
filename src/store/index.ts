import { createStore } from 'vuex'

import { IAppState } from './modules/app'
import { IUserState } from './modules/user'
import { ISettingsState } from './modules/settings'
import { IChatState } from './modules/chat/chat'

export interface IRootState {
  app: IAppState
  settings: ISettingsState
  chat: IChatState
  user: IUserState
}
export default createStore({})
