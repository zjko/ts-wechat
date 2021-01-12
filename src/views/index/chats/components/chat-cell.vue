<template>
  <div class="cell"
       @click="$router.push('/chat')">
    <img alt="icon"
         class="img"
         :src="data.img" />
    <div class="center">
      <div>{{data.name}}</div>
      <div>{{data.message}}</div>
    </div>

    <div class="right">
      <div>{{data.date}}</div>
      <div class="status"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "ChatCell",
  props: {
    data: { type: Object },
  },
})
export default class extends Vue {}
</script>

<style scoped>
.cell {
  height: 60px;
  background-color: #fff;

  display: flex;
  flex-direction: row nowrap;
  justify-content: space-between;
  align-items: center;

  padding: 0px 10px 0px 20px;
  border-bottom-color: #eee;
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

.center {
  flex: 2;
  margin-left: 10px;
}
.right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.img {
  background-color: #abc;
  width: 50px;
  height: 50px;
  border-radius: 5px;
}
.status {
  height: 20px;
}
</style>