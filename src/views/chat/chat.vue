<template>
  <ChatHead />
  <div ref="body" class="chat-container">
    <ChatCell v-for="(item,index) in records"

              :key="index"
              :id="item.id"
              :isMe="item.isMe"
              :profilePicture="item.photo"
              :type="item.type"
              :content="item.content"
               />
    <ChatBottom @send="sendMessage"/>
  </div>

</template>

<script lang="ts">
import ChatHead from "./components/head.vue";
import ChatCell from "./components/chat-cell.vue";
import ChatBottom from "./components/bottom.vue";
import { Vue, Options } from "vue-class-component";
import { ChatModule } from "@/store/modules/chat/chat";

import { MessageType } from "@/database/dos/ChatRecord";
import { ChatRecordsDao } from "@/database/dao/ChatRecordsDao";
@Options({
  name: "Chat",
  components: {
    ChatHead,
    ChatBottom,
    ChatCell,
  },
})
export default class extends Vue {
  get records() {
    return ChatModule.currentRecords;
  }

  mounted() {
    let a = ChatRecordsDao.getInstance();
    a.add({
      conversion:"2231",
      sender:"213",
      type: MessageType.text,
      content: "any",
      createTime: new Date().getTime(),
    });
    a.get("2231",0,10)
  }

  sendMessage(){
    (this.$refs.body as HTMLElement).scrollTop = (this.$refs.body as HTMLElement).scrollHeight
    console.log("send message")
  }
}
</script>
<style scoped>
.chat-container {
  height: calc(100% - 100px);
  overflow: scroll;
}
</style>