<template>
  <ChatsHead :title="'发现'" />
  <CellList v-for="(item,index) in list"
            :list="item"
            :key="index" />

</template>

<script lang="ts">
import ChatsHead from "@/components/index/chats-head.vue";
import CellList from "@/components/common/cell-list.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    ChatsHead,
    CellList,
  },
})
export default class Discover extends Vue {
  list = [
    [
      {
        icon: "/me/wepay.svg",
        name: "朋友圈",
        path: "123",
      },
    ],
    [
      {
        icon: "/me/wepay.svg",
        name: "视频号",
        path: "123",
      },
    ],
    [
      {
        icon: "/me/wepay.svg",
        name: "扫一扫",
        path: "123",
      },
      {
        icon: "/me/wepay.svg",
        name: "摇一摇",
        path: "123",
      },
    ],
    [
      {
        icon: "/me/wepay.svg",
        name: "看一看",
        path: "123",
      },
      {
        icon: "/me/wepay.svg",
        name: "搜一搜",
        path: "123",
      },
    ],
    [
      {
        icon: "/me/wepay.svg",
        name: "附近的直播和人",
        path: "123",
      },
    ],
    [
      {
        icon: "/me/wepay.svg",
        name: "购物",
        path: "123",
      },
      {
        icon: "/me/wepay.svg",
        name: "游戏",
        path: "123",
      },
    ],
    [
      {
        icon: "/me/wepay.svg",
        name: "小程序",
        path: "123",
      },
    ],
  ];
}
</script>