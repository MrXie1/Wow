<template>
  <div class="onShelfTime">
    <ul class="clear" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-immediate-check= "false" infinite-scroll-distance="0">
      <!-- <li v-for="data in $store.state.hjPath"> -->
      <li v-for="data in datalist" @click="handleClick(data.productId)">
        <img :src="data.productImg">
        <p class="title">{{data.productTitle}}</p>
        <p class="price">￥{{data.sellPrice}}</p>
      </li>
    </ul>
    <img v-show="go2topShow" src="/static/backTop.png" id="go2top" @click="go2topMove()">
    <!-- <p>{{msg}}</p> -->
  </div>
</template>

<script>

import url from 'url-loader'
import axios from 'axios'
// import { Indicator } from 'mint-ui'
import { InfiniteScroll } from 'mint-ui'
export default {
  name: 'onShelfTime',
  data () {
    return {
      datalist: [],
      pageNumber: 1,
      total: 0,
      isreload: true,
      go2topShow: false,
      loading: false

      // msg: '正在加载中...'
    }
  },

  computed: {
    
  },
  mounted () {
    this.categoryId = this.$router.history.current.query.categoryId
    // this.total = 11
    // this.$store.dispatch("getHJAction",{categoryId:this.categoryId, pageNumber:this.pageNumber})


    // Indicator.open({
    //   text: '加载中...',
    //   spinnerType: 'fading-circle'
    // })

    // axios.get(`/pages/category/${this.categoryId}?pageNumber=${this.pageNumber}&orderBy=${this.$store.state.change}&sort=desc&_=${new Date().getTime()}`).then(res=>{

    axios.get(`/pages/category/${this.categoryId}?pageNumber=${this.pageNumber}&orderBy=onShelfTime&sort=desc&_=${new Date().getTime()}`).then(res=>{
      this.datalist = res.data.data.products
      this.total = 11
    })
    window.addEventListener('scroll', this.handleScroll)
    // Promise.all([axios.get("/pages/category/20?pageNumber=1&orderBy=onShelfTime&sort=desc&_=1542852491696")]).then(res=>{
    //   Indicator.close()
    // })
  },

  methods:{
    loadMore () {
      // console.log("到底了")
      this.pageNumber++;
      if(this.pageNumber>this.total){
        this.loading = true //禁用
        // this.msg= "到底了！！";
        return ;
      }
      axios.get(`/pages/category/${this.categoryId}?pageNumber=${this.pageNumber}&orderBy=onShelfTime&sort=desc&_=${new Date().getTime()}`).then(res=>{
        this.datalist = [...this.datalist,...res.data.data.products]
      })
    },
    go2topMove() {
      let back = setInterval(() => {
        if(document.body.scrollTop||document.documentElement.scrollTop){
          document.body.scrollTop-=100;
          document.documentElement.scrollTop-=100;
        }else {
          clearInterval(back)
        }
      });
    },
    handleScroll(){
      if (document.documentElement.scrollTop + document.body.scrollTop > 400) {
        this.go2topShow=true;
      }
      else {
        this.go2topShow=false;
      }
    },
    handleClick (productId) {
      this.$router.push('/item/'+productId)
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
    #go2top {
      width: .4rem; height: .4rem; position: fixed; right: .12rem; bottom: .62rem; cursor: pointer;
    }
  }
</style>