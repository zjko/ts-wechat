<template>
  <div class="cell"
       @click="click">
    <div class="img" />
    <div class="name">{{name}}</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  name: "ContactsCell",
  props: {
    icon: { type: String },
    name: { type: String },
    data: { type: String },
  },
})
export default class Conctacts extends Vue {
  click() {
    console.log(this.data);
  }
}
</script>

<style scoped>
.cell {
  height: 40px;
  background-color: #fff;

  display: flex;
  flex-direction: row nowrap;

  align-items: center;

  padding: 0px 10px 0px 20px;
}
.img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  background-color: #abc;
}
</style>