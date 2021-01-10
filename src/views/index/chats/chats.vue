<template>

  <ChatsHead :title="'微信(1)'" />
  <div class="body">
    <ChatCell />
    <ChatCell />
    <ChatCell />
    <ChatCell />
    <ChatCell />
    <ChatCell />
    <ChatCell />
    <ChatCell />
    <ChatCell />
    <ChatCell />
    <ChatCell />
    <ChatCell />
    <ChatCell />
    <ChatCell />
    <ChatCell />
    <ChatCell />
    <ChatCell />
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
export default class Chats extends Vue {}
</script>

<style scoped>
.body {
  height: calc(100% - 100px);
  overflow: scroll;
}
</style>