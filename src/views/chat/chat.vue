<template>
  <ChatHead />
  <div class="chat-container">
    <ChatCell v-for="(item,index) in records"
              :key="index"
              :isMe="item.isMe"
              :profilePicture="item.profilePicture"
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
import { ChatModule } from "@/store/modules/chat";

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
    a.add("1231231", {
      id: 123,
      isMe: false,
      profilePicture: "123",
      type: MessageType.text,
      content: "any",
      createTime: 123,
    });
    a.get("2132",1,1)
  }
}
</script>
<style scoped>
.chat-container {
  height: calc(100% - 100px);
  overflow: scroll;
}
</style>