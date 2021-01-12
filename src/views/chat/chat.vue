<template>
  <ChatHead />
  <ChatCellMe />
  <ChatCellOther />
  <ChatBottom />
</template>

<script lang="ts">
import ChatHead from "./components/head.vue";
import ChatCellMe from "./components/chat-cell-me.vue";
import ChatCellOther from "./components/chat-cell-other.vue";
import ChatBottom from "./components/bottom.vue";
import { Vue, Options } from "vue-class-component";
@Options({
  name: "Chat",
  components: {
    ChatHead,
    ChatBottom,
    ChatCellMe,
    ChatCellOther,
  },
})
export default class extends Vue {
  mounted() {
    console.log(this.$route);
  }
}
</script>
<style scoped>
</style>