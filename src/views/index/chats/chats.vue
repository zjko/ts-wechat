<template>

  <ChatsHead :title="'微信(1)'" />
  <ChatCell />
  <ChatCell />
  <ChatCell />
  <ChatCell />
  <ChatCell />
  <ChatCell />
  <ChatCell />
  <ChatCell />
  

</template>

<script lang="ts">
import ChatCell from "@/components/chat/chat-cell.vue"
import ChatsHead from "@/components/index/chats-head.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    ChatsHead,
    ChatCell
  },
})
export default class Chats extends Vue {}
</script>

<style scoped>
.head {
  height: 40px;
  width: 100%;
  padding: 0px 10px 0px 10px;
  background-color: #eee;
  display: flex;
  align-items: center;
}
</style>