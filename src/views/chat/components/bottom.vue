<template>
  <div class="bottom">
    <img
      src="@/assets/chat/voice.svg"
      alt="voice"
      class="img"
      @click="switchVoiceMode"
    />

    <div v-if="!voiceMode" class="input-wrap">
      <input
        ref="input"
        type="text"
        v-model="text"
        @input="input"
        class="input"
      />
    </div>
    <div v-else class="input-wrap">按住说话</div>
    <div class="right">
      <img src="@/assets/chat/smile.svg" alt="smile" class="img" />
      <img
        v-if="showSendButton"
        src="@/assets/chats/add.svg"
        alt="voice"
        class="img showSendButton"
      />
      <div v-else class="sendButton" @click="send">发送</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { MessageType } from "@/database/dos/ChatRecord";
import {ChatModule} from '@/store/modules/chat/chat'

@Options({
  name: "ChatBottom",
  props: {
    name: { type: String },
  },
  emits:{
    send:{type:String}
  }
})
export default class extends Vue {
  public $refs!: { input: HTMLFormElement };
  text = "";
  voiceMode = false;
  showSendButton = false;

  switchVoiceMode() {
    this.voiceMode = !this.voiceMode;
    if (!this.voiceMode) {
      // todo 开启后聚焦到input
    }
  }
  input(e) {
    this.showSendButton = this.text.length < 1;
    console.log("对方正在输入" + this.showSendButton);
  }
  send(e) {
    console.log("发送消息" + this.text);
    ChatModule.addChatRecord({
      isMe: true,
      photo:"",
      type: "text",
      content: this.text,
    })
    this.text = ""
    this.$emit("send",null)
  }
}
</script>
<style scoped>
.bottom {
  height: 50px;
  width: 100%;
  background-color: #f7f7f7;
  position: fixed;
  bottom: 0px;

  display: flex;
  flex-direction: row nowrap;
  align-items: center;
  padding: 0px 10px 0px 10px;
}
.img {
  height: 30px;
  width: 30px;
  margin-right: 10px;
}
.sendButton {
  height: 30px;
  width: 60px;
  color: #fff;
  border-radius: 5px;
  background-color: rgb(119, 230, 119);
  margin-right: 10px;
  text-align: center;
  line-height:30px;
}
.input {
  height: 100%;
  width: 100%;
  background-color: #fff;
  border: none;
}
.input-wrap {
  flex: 2;
  height: 30px;
  background-color: #fff;
  width: calc(100% - 170px);
  margin-right: 10px;
  padding: 0px 5px 0px 5px;
  display: flex;
  flex-direction: row nowrap;
  align-items: center;
  justify-content: center;
}

.right{
  margin-right: 10px;
  display: flex;
  flex-direction: row nowrap;
}

input:focus {
  outline: none;
}
</style>