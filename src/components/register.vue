<template>
  <div class="body">
    <nav>
      <h3>注册</h3>
      <div class="r ">
        <router-link to="/login">登录</router-link>
      </div>
    </nav>
    <!-- <form class="register" action="http://localhost:3000" method="post"> -->
    <div class="register">
      <div class="tr top">
        <input placeholder="请输入手机号" v-model="tele" name="username"></input>
      </div>
      <div class="tr">
        <input type="password" placeholder="请输入密码" name="password" v-model="password">
      </div>
      <div class="tr">
        <input type="text" name="captcha" placeholder="请输入图形验证码" id="captcha" class="l" @blur="confirm()">
        <img id="imgObj" alt="" src="https://m.wowdsgn.com/captcha/renew" class="l">
        <a href="#" id="renew" class="r">换一张</a>
      </div>
      <router-link to="/login">
        <button type="submit" class="confirm"  @click="handleSubmit()">注册</button>
      </router-link>
    </div> 
    <!-- </form> -->
    <p v-show="show1" class="error">请输入正确的手机号</p>
    <p v-show="show2" class="error">请输入手机号码</p>
  </div>
</template>
   
<script>
export default {
  name: 'register',
  data () {
    return {
      show1: false,
      show2: false,
      tele: '',
      password:''
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
    },
    handleSubmit(){
      fetch("/",{
        method:'post',
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        body:"username=" + this.tele + "&password=" + this.password
      }).then(res=>res.json()).then(res=>{
        console.log(res)
      }).then(error=>{
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .body{
    background: #F5F5F5;
    height: 100%;
  }
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
  button{
    height: .44rem;
    width: 3.4rem;
    background: #FFD444;
    text-align: center;
    line-height: .44rem;
    margin: .3rem .18rem;
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
  .register{
    margin: .15rem;
    background: white;
    height: 1.5rem;

  .tr{
    padding: 0 .15rem;
    background: white;
    input{
      height: .5rem; 
      outline: none;
      border: none;
      width: 42%;
    }
    a{
      line-height: .4rem;
    }
  }
  
  img{
    width: 1rem;
    height: .3rem;
    margin: .05rem;
  }
 }
</style>
