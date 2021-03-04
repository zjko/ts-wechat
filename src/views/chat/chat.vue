<template>
  <ChatHead />
  <div ref="body"
       class="chat-container">
    <ChatCell v-for="(item, index) in records"
              :key="index"
              :id="item.id"
              :isMe="item.isMe"
              :profilePicture="item.photo"
              :type="item.type"
              :content="item.content" />
    <ChatBottom />
  </div>
</template>

<script lang="ts">
import ChatHead from "./components/head.vue";
import ChatCell from "./components/chat-cell.vue";
import ChatBottom from "./components/bottom.vue";
import { Vue, Options } from "vue-class-component";
import { ChatModule, ChatRecordCellVO } from "@/store/modules/chat/chat";
import { MessageType } from "@/database/dos/ChatRecord";
import { ChatRecordsDao } from "@/database/dao/ChatRecordsDao";
@Options({
  name: "Chat",
  components: {
    ChatHead,
    ChatBottom,
    ChatCell,
  },
  watch: {
    records() {
      this.toBottom();
      console.log(this);
    },
  },
})
export default class extends Vue {
  get records() {
    return ChatModule.currentRecords;
  }

  private toBottom() {
    this.$nextTick(() => {
      let element = this.$refs.body as HTMLElement;
      element.scrollTop = element.scrollHeight;
    });
  }
}
</script>
<style scoped>
.chat-container {
  height: calc(100% - 100px);
  overflow: scroll;
}
</style>
