<template>
  <ChatsHead :title="'微信(99)'" />
  <div class="body">
    <ChatCell v-for="(item,index) in chats"
              :key="index"
              :name="item.name"
              :message="item.message"
              :img="item.img"
              :date="item.date"
              :path="item.path" />
  </div>
</template>

<script lang="ts">
import ChatCell from "./components/chat-cell.vue";
import ChatsHead from "@/components/index/chats-head.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    ChatsHead,
    ChatCell,
  },
})
export default class Chats extends Vue {
  chats = require("./data.json");
}
</script>

<style scoped>
.body {
  height: calc(100% - 100px);
  overflow: scroll;
}
</style>