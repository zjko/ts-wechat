<template>
  <div class="cell-group">
    <div v-if="title != null"
         class="title">{{title}}</div>
    <div v-for="(item,index) in list"
         :key="index">
      <ContactsCell :name="item.name"
                    :icon="item.icon"
                    :data="item.data" />
      <div class="division"
           v-if="index + 1 < list.length" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ContactsCell from "./cell.vue";
@Options({
  name: "ContactsCellGroup",
  components: {
    ContactsCell,
  },
  props: {
    title: { type: String },
    list: { type: Array },
  },
})
export default class Conctacts extends Vue {}
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

.title {
  background-color: #efefef;
  margin-left: 20px;
}

.division {
  height: 1px;
  background-color: #e0e0e0;
  margin-left: 50px;
}

.cell-group {
  background-color: #fff;
}
</style>