<template>
  <router-view />
</template>
<script>
import { Options, Vue } from "vue-class-component";
@Options({
  name: 'App',
})
export default class extends Vue { }

</script>
<style scope>
.size {
  width: 100%;
  height: 100%;
}

html {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100%;
}
</style>
