import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'


export interface IAppState {



}

@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule implements IAppState {

}

export const AppModule = getModule(App)
