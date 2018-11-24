<template>
  <div >
    <nav>我</nav>
    <header>
      <div class="img l">
        <img src="https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJr7gl9qWGKLJZIuYfNzMJI0LTibOHC6UNbcwvyUFoBLlXgaDgRT8mAt5UsopYBPbFuybrZAqtVvxg/132" alt="">
      </div>
      <div class="user l">
        <p class="name">这是一个昵称</p>
        <p class="show">这是你的签名</p>
      </div>
    </header>
    <div class="order">
      <div class="title">全部订单</div>
      <ul>
        <li><a href="javascript:;">待付款</a></li>
        <li><a href="javascript:;">待发货</a></li>
        <li><a href="javascript:;">待收货</a></li>
        <li><a href="javascript:;">待评论</a></li>
        <li><a href="javascript:;">退换货</a></li>
      </ul>
    </div>
    <div class="logout"><a href="/logout">退出登录</a></div>
  </div>
</template>
  
<script>
export default {
  name: 'mine',
  data () {
    return {

    }
  },

  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  nav{
    height: .44rem;
    background: white;
    text-align: center;
    line-height: .44rem;
    font-weight: bold;
  }
  header{
    height: .7rem;
    background: white;
    margin: .15rem 0;
    img{
      border-radius: 50%;
      margin: .1rem;
      width: .5rem;
      height: .5rem;
    }
    .user{
      margin-top: .15rem;
      p.show{
        color: #ccc;
        font-size: .12rem;
        line-height: .14rem;
      }
    }
  }
  .order{
    background: white;
    padding-left: .2rem;
    .title{
      height: .5rem;
      line-height: .5rem;
    }
    ul{
      li{
        font-size: .14rem;
        height: .5rem;
        border-top: 1px solid #EAEAEA;
        color: #4a4a4a;
        line-height: .5rem;
        a{
          cursor: pointer;
        }
      }
    }
  }
  .logout{
    height: .5rem;
    text-align: center;
    line-height: .5rem;
    background: white;
    margin-top: .2rem;
  }
</style>
