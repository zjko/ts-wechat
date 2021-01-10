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
  name: "ChatCellOther",
})
export default class extends Vue {}
</script>
<style scoped>
.continer {
  background-color: #efefef;
  display: flex;
  flex-direction: row;
  padding-right: 50px;
  padding-left: 10px;
  margin-top: 10px;
}

.profile-photo {
  width: 30px;
  height: 30px;
  background-color: #fff;
}
.message {
  background-color: #fff;
  border-radius: 5px;
  margin-left: 20px;
  width: calc(100% - 50px);
  display: flex;
  flex-wrap: wrap-reverse;
  padding: 5px 10px 5px 10px;
}
</style>