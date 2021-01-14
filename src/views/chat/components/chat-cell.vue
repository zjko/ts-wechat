<template>
  <div :class="isMe?' continer-right':' continer-left'">
    <img class="profile-photo"
         :src="isMe? myProfilePicture:profilePicture"
         alt="头像" />
    <div class="message-warp">
      <div :class="isMe?' message-right message':' message-left message' ">
        <div v-if="type === 'text'">
          {{content}}
        </div>

        <div v-if="type === 'picture'">
          <img ref="img"
               :style="style"
               alt="img"
               :src="content"
               @load="imgLoad" />
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { UserModule } from "@/store/modules/user";
@Options({
  name: "ChatCell",
  props: {
    isMe: { type: Boolean },
    profilePicture: { type: String },
    type: { type: String },
    content: {},
  },
})
export default class extends Vue {
  style = "";
  get myProfilePicture() {
    return UserModule.profilePicture;
  }
  imgLoad(e) {
    let appWidth: number =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    let appHeight: number =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    let width: number = (this.$refs.img as HTMLElement).clientWidth;
    let height: number = (this.$refs.img as HTMLElement).clientHeight;

    let widthRate: number = width / appWidth;
    let heightRate: number = height / appHeight;
    let rate: number = widthRate > heightRate ? widthRate : heightRate;
    rate *= 2;
    width = Math.floor(width / rate);
    height = Math.floor(height / rate);
    this.style = `width:${width}px; height:${height}px;`;
    console.log(this.style);
  }
}
</script>
<style scoped>
.continer-right {
  margin-top: 10px;
  background-color: #efefef;
  display: flex;
  flex-direction: row-reverse;
  padding-left: 50px;
  padding-right: 10px;
}

.continer-left {
  background-color: #efefef;
  display: flex;
  flex-direction: row;
  padding-right: 50px;
  padding-left: 10px;
  margin-top: 10px;
}

.profile-photo {
  width: 40px;
  height: 40px;
  background-color: #fff;
}
.message {
  border-radius: 5px;
  width: calc(100% - 30px);
  display: flex;
  flex-wrap: wrap-reverse;
}

.message-warp {
  padding: 0px 5px 0px 10px;
}
.message-left {
  padding: 5px 15px 5px 10px;
  background-color: rgb(119, 230, 119);
}
.message-right {
  background-color: #fff;
  padding: 5px 15px 5px 10px;
}
</style>