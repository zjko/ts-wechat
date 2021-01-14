import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

export interface IUserState {
  profilePicture: string
  name: string
  wxId: string
}



@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  public profilePicture = "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=221521724,481371925&fm=26&gp=0.jpg"
  public name = "zjko"
  public wxId = "zjko_wx"



}

export const UserModule = getModule(User)
