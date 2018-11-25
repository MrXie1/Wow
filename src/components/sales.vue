<template>
  <div class="sales">
    <ul class="clear" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-immediate-check= "false" infinite-scroll-distance="0">
      <li v-for="data in datalist"  @click="handleClick(data.productId)">
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
import axios from 'axios'
// import { Indicator } from 'mint-ui'
import { InfiniteScroll } from 'mint-ui'
export default {
  name: 'sales',
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
  // created () {
  //   var isFirst = true; 
  //   function doS(){
  //     if(isFirst){
  //       console.log('first')
  //       window.location.reload()
  //       //doSth...//这里写你要做什么
  //       isFirst = false
  //     }
  //   }
  // },
  
  computed: {
    
  },
  mounted () {
    // window.location.reload()
    
    this.categoryId = this.$router.history.current.query.categoryId
    // console.log(this.categoryId)
    // console.log(this.$router)
    // console.log(this.data2)
    // Indicator.open({
    //   text: '加载中...',
    //   spinnerType: 'fading-circle'
    // })
    axios.get(`/pages/category/${this.categoryId}?pageNumber=${this.pageNumber}&orderBy=sales&sort=desc&_=${new Date().getTime()}`).then(res=>{
      this.datalist = res.data.data.products
      this.total = 11
      // console.log(this.datalist)
    })
    window.addEventListener('scroll', this.handleScroll)
    // Promise.all([axios.get("/pages/category/20?pageNumber=1&orderBy=sales&sort=desc&_=1542852491696")]).then(res=>{
    //   // Indicator.close()
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
      axios.get(`/pages/category/${this.categoryId}?pageNumber=${this.pageNumber}&orderBy=sales&sort=desc&_=${new Date().getTime()}`).then(res=>{
        // console.log(res.data)
        // this.loading = false
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
  .sales {
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