<template>
  <div >
    <nav>
      <a href='/index' class="l">
        <i class="iconfont icon-shouye"></i>
      </a>
      <h3>购物车</h3>
      <div class="r"><a>编辑</a></div>
    </nav>
    <ul>
      <!-- <li v-for='data in datalist' :key='data.id'> -->
      <!-- </li> -->
    </ul>
  </div>
</template>
  
<script>
import axios from 'axios'
export default {
  name: 'cart',
  data () {
    return {
      datalist:[]
    }
  },

  mounted(){
    // axios.get(`/cart/list?_=${new Date().getTime()}`).then(res=>{
    //   this.datalist = res.data.data;
    //   console.log(res);
    // })
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
</style>
