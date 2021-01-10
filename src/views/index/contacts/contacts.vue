<template>
  <ChatsHead :title="'通讯录'" />
  <div class="body">
    <ContactsCellGroup v-for="(item,index) in list"
                     :key="index"
                     :title="item.title"
                     :list="item.list" />
  </div>
</template>

<script lang="ts">
import ChatsHead from "@/components/index/chats-head.vue";
import ContactsCellGroup from "./components/cell-group.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    ChatsHead,
    ContactsCellGroup,
  },
})
export default class Conctacts extends Vue {
  list = require("./data.json");
}
</script>

<style scoped>
.body{
  height: calc(100% - 100px);
  overflow: scroll;
}

</style>