<template>
  <div class="bottom">
    <img src="@/assets/chat/voice.svg"
         alt="voice"
         class="img"
         @click="switchVoiceMode" />

    <div v-if="!voiceMode"
         class="input-wrap">
      <input ref="input"
             type="text"
             class="input" />
    </div>
    <div v-else
         class="input-wrap">
      按住说话
    </div>

    <img src="@/assets/chat/smile.svg"
         alt="voice"
         class="img" />
    <img src="@/assets/chats/add.svg"
         alt="voice"
         class="img" />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
@Options({
  name: "ChatBottom",
  props: {
    name: { type: String },
  },
})
export default class extends Vue {
  public $refs!: { input: HTMLFormElement };

  voiceMode = false;

  switchVoiceMode() {
    this.voiceMode = !this.voiceMode;
    if (!this.voiceMode) {
      // todo 开启后聚焦到input
    }
  }

  mounted() {}
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
.input {
  height: 100%;
  width: 100%;
  background-color: #fff;
  border: none;
}
.input-wrap {
  height: 30px;
  background-color: #fff;
  width: calc(100% - 140px);
  margin-right: 10px;
  display: flex;
  flex-direction: row nowrap;
  justify-content: center;
  align-items: center;
}
</style>