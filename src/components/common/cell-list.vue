<template>

  <div class="cell-group">
    <div v-for="(item,index) in list"
         :key="index">
      <Cell :icon="item.icon"
            :name="item.name"
            :path="item.path" />
      <div v-if="list.length > 1 && index + 1 < list.length "
           class="division" />

    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Cell from "./cell.vue";

@Options({
  components: {
    Cell,
  },
  props: {
    list: { type: Array },
  },
})
export default class CellList extends Vue {}
</script>

<style scoped>
.division {
  height: 1px;
  background-color: #e0e0e0;
  margin-left: 50px;
}
.cell-group {
  background-color: #fff;
  margin-bottom: 10px;
}
</style>