<template>
  <div class="continer">
    <Button v-for="(item,index) in tabBar"
            :title="item.title"
            :path="item.path"
            :icon="item.icon"
            :key="index" />
  </div>
</template>
<script>
import { Vue, Options } from "vue-class-component";
import Button from './Button.vue'
import tabBar from '../tabBarConfig'

@Options({
  name: 'TabBar',
  components: {
    Button
  },
})
export default class TabBar extends Vue {
  get tabBar () {
    return tabBar
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
}
</style>