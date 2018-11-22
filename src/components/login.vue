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
    <div class="login">
      <el-tabs :tab-position="tabPosition" class="out">
          <el-tab-pane label="密码登录" class="border">
            <el-input placeholder="请输入手机号" class="input"></el-input>
            <el-input placeholder="请输入密码" class="input"></el-input>
          </el-tab-pane>
          <el-tab-pane label="短信登录" class="border">
            <el-input placeholder="请输入手机号" class="input"></el-input>
            <el-input placeholder="请输入验证码" class="input"></el-input>
          </el-tab-pane>
      </el-tabs>
      <el-button type="primary" class="confirm">确认</el-button>
    </div>
  </div>
</template>
   
<script>
export default {
  name: 'login',
  data () {
    return {
      tabPosition: 'top'
    }
  },

  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .iconfont{
    font-size: .20rem;
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
    .confirm{
      width: 100%;
    }
  }
</style>
