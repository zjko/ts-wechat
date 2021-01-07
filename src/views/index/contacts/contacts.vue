<template>
  <ChatsHead :title="'通讯录'" />
  contacts
</template>

<script lang="ts">
import ChatsHead from "@/components/index/chats-head.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    ChatsHead,
  },
})
export default class Conctacts extends Vue {}
</script>