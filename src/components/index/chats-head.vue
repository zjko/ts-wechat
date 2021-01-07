<template>
  <div class="head">
    <div class="left">
      {{title}}</div>
    <div class="right">
      <img class="bottom"
           :src="require('@/assets/chats/search.svg')"
           alt="搜索" />
      <img class="bottom"
           :src="require('@/assets/chats/add.svg')"
           alt="更多" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "ChatHead",
  props: {
    title: { type: String },
  },
})
export default class ChatsHead extends Vue {}
</script>

<style scoped>
.head {
  height: 40px;
  width: 100%;
  padding: 0px 10px 0px 10px;
  background-color: #eee;
  display: flex;
  flex-direction: row nowrap;
  justify-content: space-between;
  align-items: center;
}

.right {
  padding-right: 20px;
}

.bottom {
  margin-left: 20px;
}
</style>