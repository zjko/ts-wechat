<template>
  <div class="head">
    <img class="img"
         src="@/assets/common/back.svg"
         alt="back"
         @click="$router.back()">
    <div class="name">聊天名称</div>
    <img class="img right"
         src="@/assets/common/more.svg"
         alt="more" />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
@Options({
  name: "ChatHead",
  components: {},
  props: {
    name: { type: String },
  },
})
export default class extends Vue {}
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

.name {
  flex: 2;
}

.img {
  height: 20px;
  widows: 20px;
  margin-right: 20px;
}
</style>