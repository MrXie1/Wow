<template>
  <div class="body">
    <nav>
      <a href='/index' class="l">
        <i class="iconfont icon-shouye"></i>
      </a>
      <h3>登录</h3>
      <div class="r">
        <router-link to="/register">注册</router-link>
      </div>
    </nav>
    <form class="login" action="/login" method="post">
      <div class="login">  
        <el-tabs :tab-position="tabPosition" class="out">
            <el-tab-pane label="密码登录" class="border">
              <el-input placeholder="请输入手机号" class="input" name="username" v-model="username"></el-input>
              <el-input placeholder="请输入密码" class="input" name="password" v-model="password"></el-input>
            </el-tab-pane>
            <el-tab-pane label="短信登录" class="border">
              <el-input placeholder="请输入手机号" class="input"></el-input>
              <el-input placeholder="请输入验证码" class="input"></el-input>
            </el-tab-pane>
        </el-tabs>
        <input type="submit" id="loginBtn" name="submit" value="确认">
      </div>
    </form>
  </div>
</template>
   
<script>
export default {
  name: 'login',
  data () {
    return {
      tabPosition: 'top',
      username:'',
      password:''
    }
  },

  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .body{
    background: #F5F5F5;  
    height: 100%;
  }
  .iconfont{
    font-size: .20rem;
  }
  .el-tabs__item:hover {
    color: #FFD444; 
    cursor: pointer;
  }
  .el-tabs__item.is-active {
    color: #FFD444; 
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
  .login{
    margin: .15rem;
    height: 1.5rem;
    .out{
      margin-bottom: .1rem;
    }
    .input{
      outline: none;
    }
    input[name="submit"]{
      height: .44rem;
      width: 3.4rem;
      background: #FFD444;
      text-align: center;
      line-height: .44rem;
    }
  }
</style>
