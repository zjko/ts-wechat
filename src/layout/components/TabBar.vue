<template>
  <div class="continer">
    <Button v-for="(item,index) in tabBar"
            :title="item.title"
            :path="item.path"
            :icon="item.icon"
            :selected="item.selected"
            @select="select(index)"
            :key="index" />
  </div>
</template>
<script>
import { Vue, Options } from "vue-class-component";
import Button from './Button.vue'
import tabBarConfig from '../tabBarConfig'

@Options({
  name: 'TabBar',
  components: {
    Button
  },
})
export default class TabBar extends Vue {
  tabBar = []
  select (index) {
    this.tabBar.forEach(item => {
      item.selected = false
    })
    this.tabBar[index].selected = true
    this.tabBar = this.tabBar.slice()
  }
  mounted () {
    let list = []
    tabBarConfig.forEach(i => {
      list.push({
        title: i.title,
        path: i.path,
        icon: i.icon,
      })
    })
    list[0].selected = true
    this.tabBar = list


  }
}
</script>
<style scoped>
.continer {
  display: flex;
  margin: auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  order: 999;
}
</style>