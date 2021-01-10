<template>
  <div class="cell"
       @click="nav">
       <img alt="icon"
       class="img"
       />

       <div class="center">
           <div>title</div>
           <div>message</div>
       </div>

       <div class="right">
           <div>下午5:39</div>
           <div>status</div>
       </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "ChatCell",
  props: {
    icon: { type: String },
    name: { type: String },
    path: { type: String },
  },
})
export default class extends Vue {
  nav(e: any) {
    this.$router.push('/chat')
  }
}
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
  border-bottom-style:solid;
  border-bottom-width:1px;
}

.center{
    flex:2;
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
</style>