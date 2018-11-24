<template>
  <footer>
    <ul v-show="hide">
      <router-link to="/index" tag="li" activeClass="active">
        <i class="iconfont icon-shouye"></i>
        <p>首页</p>
      </router-link>
      <router-link to="/category" tag="li" activeClass="active">
        <i class="iconfont icon-leimupinleifenleileibie"></i>
        <p>分类</p>
      </router-link>
      <router-link to="/cart" tag="li" activeClass="active">
        <i class="iconfont icon-qicheqianlian-1-copy" ></i>
        <p>购物车</p>
      </router-link>
      <router-link to="/message" tag="li" activeClass="active" >
        <i class="iconfont icon-xiaoxi"></i>
        <p>消息</p>
      </router-link>
      <router-link to="/user" tag="li" activeClass="active">
        <i class="iconfont icon-wo"></i>
        <p>我</p>
      </router-link>
    </ul>
  </footer>
</template>
  
<script>
import bus from "../bus";
export default {
  name: 'footbar',
  data () {
    return {
      hide:true
    }
  },

  methods:{
    
  },

  mounted(){
    bus.$on("footerbarhide",res=>{
      this.hide = res;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  footer{
    ul{
      background: white;
      border-top: 1px solid #f5f5f5;    
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      display: flex;
      z-index: 10;
      height: .50rem;
      li{
        padding-top: .05rem;
        height: .50rem;
        flex: 1;
        color: #333;
        list-style: none;
        text-align: center;
        i{
          font-size: .20rem;
        }
      }
    }
  }
  .active{
    color: gray;
  }
</style>
