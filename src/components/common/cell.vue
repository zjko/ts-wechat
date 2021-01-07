<template>
  <div class="cell"
       @click="nav">
    <div class="left">
      <img class="img"
           :src="require('@/assets/cell' + icon)"
           alt="图标" />
      <div class="name">{{name}}</div>
    </div>

    <div class="right">
      <img class="img"
           src="@/assets/common/right.svg"
           alt=">" />
    </div>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Cell",
  props: {
    icon: { type: String },
    name: { type: String },
    path: { type: String },
  },
})
export default class extends Vue {
  nav(e: any) {
    console.log(e);
  }
}
</script>

<style scoped>
.cell {
  height: 40px;
  background-color: #fff;

  display: flex;
  flex-direction: row nowrap;
  justify-content: space-between;
  align-items: center;

  padding: 0px 10px 0px 20px;
}

.left {
  display: flex;
  flex-direction: row nowrap;
  align-items: center;
}

.right {
  display: flex;
  flex-direction: row nowrap;
  align-items: center;
}
.name {
  margin-left: 20px;
}
.img {
  width: 20px;
  height: 20px;
}
</style>