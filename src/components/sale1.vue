<template>
  <div class="main">
    <ul class="new clear" v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-immediate-check= "false"
        infinite-scroll-distance="10">
        <li v-for="data in this.$store.state.list2" @click="handleClick(data.productId)">
          <img :src="data.productImg" alt="">
          <p>{{data.productTitle}}</p>
          <span>￥{{data.originalPrice}}</span>
          <p>{{data.prizeOrSlogan}}</p>
        </li>  
    </ul>
    <p class="loadmore">{{msg}}</p>
  </div>
</template>
  
<script>
 import axios from "axios"
 // import bus from "../bus"
export default {
  name: 'price',
  data () {
    return {
       loading:false,
        current:1,
        total:5,
        msg:"小尖正在加载中......."
    }
  },
  methods:{
     handleClick(productId){
        this.$router.push('/item/'+productId)
    },
    loadMore() {
            this.current++;
            if(this.current>this.total){
              this.loading=true;
              this.msg="我是有底线的";
              return;
            }
            console.log(this.msg);
           axios.get(`/product/search?keyword=${encodeURI(this.$route.params.word)}&sort=sales&order=desc&currentPage=${this.current}&_=${new Date().getTime()}`).then(res=>{
              console.log(res.data.data.products);
              this.$store.state.list2=[...this.$store.state.list2,...res.data.data.products]
            })
            console.log('到底了');
      }
  },
 mounted(){
     var id = this.$route.params.word
     console.log(id)
      //异步请求， 并将结果存储到 store中
      this.$store.dispatch("getSaleAction",id);
  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .new{
        li{
          float: left;
          width: 50%;
          border-top: 1px solid #f5f5f5;
          border-right: 1px solid #f5f5f5;
        img{
          width: 100%;
        }
        p{
          color:gray;
          font-size: 0.14rem;
          text-align: center;

        }
        span{
          display: block;
          text-align: center;
          font-size: 0.16rem;
        }
      }
    }
    .loadmore{
      position: relative;
      top:-0.8rem;
      text-align: center;
      background: lightyellow;
      color:black;
      font-size: 0.16rem;

    }
</style>