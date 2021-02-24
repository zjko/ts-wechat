<template>
  <div class="page">
    <div class="container">
      <div class="title">注册/登录</div>
      <div class="form-item">
        微信号
        <input class="text-input" v-model="wxId"/>
      </div>
      <div class="form-item">
        密码
        <input class="text-input" type="password" v-model="password" />
      </div>
      <div class="read">
        <input type="checkbox" v-model="checked"/>
        我已阅读并同意<a href="123">使用协议</a>
      </div>
      <button @click="submit" :class="'submit ' + (checked?'':'disable')" :disabled="!checked">
      注册/登录
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
@Options({
  name: "login",
})
export default class extends Vue {

  checked=false
  wxId=""
  password=""

  submit(){
    console.log("123")
    console.log(this.wxId)
    console.log(this.password)

  }

}
</script>
<style scoped>
.page {
  padding: 30px;
  width: calc(100% - 60px);
  height: 100%;
  background-color: #fff;
}
.container{
  width: 100%;
  height: 100%;
}

.title {
  font-size: 40px;
  margin-bottom: 100px;
}
.read{
  width: 100%;
  text-align: center;
  margin: 50px 0px 10px 0px;
}

.form-item {
  padding-bottom: 10px;
  font-size: 20px;
  margin-bottom: 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom-style: solid;
  border-bottom-color: rgb(29, 167, 52);
  border-bottom-width: 1px;
}
.text-input {
  width: calc(100% - 80px);
  border-style: none;
  background-color: #fff;
  outline: none;
}

.submit {
  height: 40px;
  width: 100%;
  color: #fff;
  background-color: rgb(29, 167, 52);
  border-style: none;
  outline: none;
}

.disable{
  background-color: #eee;
}
</style>