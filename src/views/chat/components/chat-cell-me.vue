<template>
  <div class="continer">
    <div class="profile-photo" />
    <div class="message">
      消息内容fdsafsadfsadfsa nowrap | wrap | nowrap | wrap | nowrap | wrap |
      p | wrap | nowrap | wrap |p | wrap | nowrap | wrap |p | wrap | nowrap | wrap |
    </div>

  </div>

</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
@Options({
  name: "ChatCellMe",
})
export default class extends Vue {}
</script>
<style scoped>
.continer {
  margin-top: 10px;
  background-color: #efefef;
  display: flex;
  flex-direction: row-reverse;
  padding-left: 50px;
  padding-right: 10px;
}

.profile-photo {
  width: 30px;
  height: 30px;
  background-color: #fff;
}
.message {
  background-color: rgb(119, 230, 119);
  border-radius: 5px;
  margin-right: 20px;
  width: calc(100% - 50px);
  display: flex;
  flex-wrap: wrap-reverse;
  padding: 5px 10px 5px 10px;
}
</style>