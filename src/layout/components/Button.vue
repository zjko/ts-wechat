<template>
  <div class="content"
       @click="nav">
    <img class="img"
         :src="require('@/assets'+icon + (!selected?'':'-select') +'.svg')"
         alt="icon" />

    <div class="text">{{title}}</div>
  </div>
</template>
<script>
import { Options, Vue } from "vue-class-component"

@Options({
  name: 'Button',
  props: {
    title: { type: String },
    path: { type: String },
    icon: { type: String },
    selected: { type: Boolean },
  },
})

export default class extends Vue {
  nav (e) {
    this.$emit("select",null)
    this.$router.push(this.path)

  }
  mounted () {
  }
}
</script>
<style scoped>
.img {
  width: 30px;
  height: 30px;
}

.text {
  font-size: 12px;
}
</style>