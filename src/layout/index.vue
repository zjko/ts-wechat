<template>
  <router-view />
  <TabBar class="tabBar" />

</template>

<script lang="ts">
import TabBar from "./components/TabBar.vue";
import { Vue, Options } from "vue-class-component";
@Options({
  name: "IndexLayout",
  components: {
    TabBar,
  },
})
export default class extends Vue {}
</script>
<style scoped>
.tabBar {
  position: fixed;
  height: 60px;
  width: 100%;
  bottom: 0px;
  box-shadow: 0px -1px 5px #eee;
  text-align: center;
}
</style>