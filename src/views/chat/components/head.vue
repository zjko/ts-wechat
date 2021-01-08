<template>

  <div class="head">
    <div>back</div>
    <div>name</div>

  </div>

</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
@Options({
  name: "ChatHead",
  components: {},
})
export default class extends Vue {}
</script>
<style scoped>
.head {
  height: 60px;
  width: 100%;
  box-shadow: 0px -1px 5px #eee;
  display: flex;
  flex-direction: row;
}
</style>