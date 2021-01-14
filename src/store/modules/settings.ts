import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

export interface ISettingsState {
  version: string
}

@Module({ dynamic: true, store, name: 'settings' })
class Settings extends VuexModule implements ISettingsState {

  public version = "1.1"



}

export const SettingsModule = getModule(Settings)
