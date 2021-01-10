<template>
  <div class="head">
    <div class="search-container">
      <div class="input-warp">
        <input class="input"/>
      </div>
      <div class="search-button">搜索</div>
    </div>
    
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
@Options({
  components: {},
  props: {
    name: { type: String },
  },
})
export default class extends Vue {}
</script>
<style scoped>
.head {
  height: 50px;
  width: 100%;
  padding: 0px 10px 0px 10px;
  background-color: #eee;
  display: flex;
  flex-direction: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.input-warp{
    height: 100%;
    width: calc(100% - 60px);
    background-color: #abc;
}
.input{
    width: 100%;
    border:none;
    border-style: none;
    height: 100%;
}

.search-button{
    width: 45px;
}
</style>