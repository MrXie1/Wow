<template>
  <div >
    <nav>
      <h3>注册</h3>
      <div class="r">
        <router-link to="/login">登录</router-link>
      </div>
    </nav>
    <div class="register">
      <el-input placeholder="请输入手机号" class="input" v-model="tele"></el-input>
      <el-input placeholder="请输入验证码" class="input"></el-input>
      <el-button type="primary" class="confirm" @click="confirm()">注册</el-button>
      <p v-show="show1" class="error">请输入正确的手机号</p>
      <p v-show="show2" class="error">请输入手机号码</p>
    </div>
  </div>
</template>
   
<script>
export default {
  name: 'register',
  data () {
    return {
      show1: false,
      show2: false,
      tele: ''
    }
  },

  methods:{
    confirm(){
      var reg = /^1[34578]\d{9}$/;
      if(reg.test(this.tele)){
        this.show1 = false;
        console.log('对劲儿')
      }else if(this.tele === ''){
        this.show2 = true;
        this.show1 = false;
        console.log('空的')
      }else {
        this.show1 = true;
        this.show2 = false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 nav{
   position: relative;
   height: .45rem;
   padding: 0 .1rem;
   border-bottom: 1px solid #f5f5f5;
   line-height: .45rem;
   background: white;
   a{
     line-height: .45rem;
   }
   h3{
     font-size: .16rem;
     position: absolute;
     left: 50%;
     margin-left: -.25rem;
   }
 }
 .register{
  padding: .15rem;
  .input{
    height: .5rem;
  }
  .confirm{
    width: 100%;
  }
  .error{
    margin: .3rem;
    width: 2rem;
    text-align: center;
    background: gray;
    border-radius: 2px;
    color: white;
    line-height: .20rem;
  }
 }
</style>
