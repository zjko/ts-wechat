<template>
  <div class="head">
    <img class="img"
         src="@/assets/common/back.svg"
         alt="back"
         @click="$router.back()">
    <div class="name">{{name}}</div>
    <img class="img right"
         src="@/assets/common/more.svg"
         alt="more" />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { ChatModule } from "@/store/modules/chat";
@Options({
  name: "ChatHead",
})
export default class extends Vue {
  get name() {
    return ChatModule.name;
  }
}
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
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;
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