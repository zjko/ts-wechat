<template>
  <ChatHead />
  12312

</template>

<script lang="ts">
import ChatHead from "./components/head.vue";
import { Vue, Options } from "vue-class-component";
@Options({
  name: "Chat",
  components: {
    ChatHead,
  },
})
export default class extends Vue {}
</script>
<style scoped>
.tabBar {
  position: fixed;
  height: 60px;
  width: 100%;
  bottom: 0px;
  box-shadow: 0px -1px 5px #eee;
  background-color: #efefef;
  text-align: center;
}
</style>