<template>
  <ChatsHead :title="'发现'" />
  <div class="body">
    <CellList v-for="(item, index) in list" :list="item" :key="index" />
  </div>
</template>

<script lang="ts">
import ChatsHead from "@/components/index/chats-head.vue";
import CellList from "@/components/common/cell-list.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    ChatsHead,
    CellList,
  },
})
export default class Discover extends Vue {
  list = require("./itemConfig.json");
}
</script>

<style scoped>
.body {
  height: calc(100% - 100px);
  overflow: scroll;
}
</style>
