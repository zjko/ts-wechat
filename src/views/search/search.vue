<template>
  <div class="head">
    <div class="search-container">
      <div class="input-warp">
        <img src="@/assets/chats/search.svg"
             alt="搜索" />
        <input class="input"
               placeholder="搜索" />
      </div>
    </div>
    <div class="back-button"
         @click="$router.back()">取消</div>
  </div>
  <div class="desc">搜索指定内容</div>
  <div class="tags-container">
    <div class="tags"
         v-for="(item,index) in tags"
         :key="index">
      <div v-for="(tag,index1) in item"
           :key="index1"
           class="tag">
        <div class="tagName">{{tag.name}}</div>
        <div v-if="index1 + 1 < item.length"
             class="divider" />
      </div>
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
export default class extends Vue {
  tags = [
    [
      {
        name: "朋友圈",
        path: "abvc",
      },
      {
        name: "文章",
        path: "abvc",
      },
      {
        name: "公众号",
        path: "abvc",
      },
    ],
    [
      {
        name: "小程序",
        path: "abvc",
      },
      {
        name: "音乐",
        path: "abvc",
      },
      {
        name: "表情",
        path: "abvc",
      },
    ],
  ];
}
</script>
<style scoped>
.head {
  height: 30px;
  width: 100%;
  padding: 5px 10px 5px 10px;
  background-color: #eee;
  display: flex;
  flex-direction: row nowrap;
  align-items: center;
}

.search-container {
  padding: 0px 10px 0px 10px;
  height: 100%;
  width: calc(100% - 80px);
  background-color: #fff;
  border-radius: 5px;
}
.input-warp {
  height: 100%;
  display: flex;
  flex-direction: row nowrap;
}
.input {
  padding-left: 10px;
  width: 100%;
  border: none;
}

.back-button {
  margin-left: 10px;
  color: rgb(84, 71, 139);
}

input:focus {
  outline: none;
}

.desc {
  margin: 30px 0px 30px 0px;
  text-align: center;
  font-size: 12px;
  color: #aaa;
}

.tags-container {
  margin: 0px 50px 0px 50px;
}
.tags {
  width: 100%;
  display: flex;
  flex-direction: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.tag {
  display: flex;
  flex-direction: row wrap;
  justify-content: space-between;
}
.tagName {
  width: 50px;
  text-align: center;
}
.divider {
  margin-left: 30px;
  width: 1px;
  height: 20px;
  background-color: #aaa;
}
</style>