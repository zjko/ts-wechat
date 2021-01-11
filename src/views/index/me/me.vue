<template>
  <div class="head">
    <img class="img"
         :src="require('@/assets/me/camera.svg')"
         alt="相机" />
  </div>
  <div class="user-info">
    <div class="profile">
      <img class="profile-photo"
           alt="头像"
           :src="userInfo.img" />
      <div class="info">
        <div class="name">{{userInfo.name}}</div>
        <div>微信号：{{userInfo.wxId}}</div>
      </div>
    </div>
    <div class="right">
      <img class="qr-code"
           :src="require('@/assets/common/qr-code.svg')"
           alt="QR-code" />
      <img att="right"
           :src="require('@/assets/common/right.svg')"
           alt="right" />
    </div>
  </div>
  <CellList v-for="(item,index) in list"
            :list="item"
            :key="index" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CellList from "@/components/common/cell-list.vue";
@Options({
  components: {
    CellList,
  },
})
export default class Me extends Vue {
  list = require("./itemConfig.json");
  userInfo = require("./data.json");
}
</script>

<style scoped>
.head {
  height: 40px;
  width: 100%;
  padding-right: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: row nowrap;
  justify-content: flex-end;
  align-items: center;
}

.img {
  margin-right: 10px;
}
.profile-photo {
  width: 50px;
  height: 50px;
  background-color: abc;
  border-radius: 5px;
  margin-right: 20px;
}
.user-info {
  padding: 0px 20px 40px 20px;
  width: 100%;
  background-color: #fff;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}

.profile {
  display: flex;
  flex-direction: row;
}

.qr-code {
  margin-right: 20px;
}

.right {
  padding-right: 30px;
}

.name {
  font-size: 25px;
}
</style>