<template>
  <div class="onShelfTime">
    <ul class="clear" v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-immediate-check= "false"
  infinite-scroll-distance="0">
      <li v-for="data in datalist">
        <img :src="data.productImg">
        <p class="title">{{data.productTitle}}</p>
        <p class="price">￥{{data.sellPrice}}</p>
      </li>
    </ul>
    <!-- <p>{{msg}}</p> -->
  </div>
</template>
  
<script>
import axios from 'axios'
import { Indicator } from 'mint-ui'
import { InfiniteScroll } from 'mint-ui'
export default {
  name: 'onShelfTime',
  data () {
    return {
      datalist: [],
      pageNumber: 1,
      total: 0,
      loading: false,
      msg: '正在加载中...'
    }
  },
  mounted () {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
    axios.get("/pages/category/20?pageNumber=1&orderBy=onShelfTime&sort=desc&_=1542852491696").then(res=>{
      this.datalist = res.data.data.products
      this.total = 4
      console.log(this.datalist)
    })
    Promise.all([axios.get("/pages/category/20?pageNumber=1&orderBy=onShelfTime&sort=desc&_=1542852491696")]).then(res=>{
      
      Indicator.close()
    })
  },

  methods:{
    loadMore () {
      console.log("到底了")
      this.pageNumber++;
      if(this.pageNumber>this.total){
        this.loading = true //禁用
        this.msg= "到底了！！";
        return ;
      }
      axios.get(`/pages/category/20?pageNumber=${this.pageNumber}&orderBy=onShelfTime&sort=desc&_=1542852491696`).then(res=>{
        console.log(res.data)
        this.datalist = [...this.datalist,...res.data.data.products]
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .onShelfTime {
      margin: 0 0 .55rem 0;
    ul {
      li {
        width: 49%;float: left; font-size: .12rem; padding: 0 .15rem .32rem .15rem;
        img {
          width: 100%;
        }
        .title {
          color: #808080; height: .2rem; line-height: .2rem; margin-top: .23rem;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .price {
          height: .18rem; line-height: .18rem; 
        }
      }
    }
  }
</style>