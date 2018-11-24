<template>
  <div class="main">
    <ul class="new">
        <li v-for="data in $store.state.list2" @click="handleClick(data.productId)">
          <img :src="data.productImg" alt="">
          <p>{{data.productTitle}}</p>
          <span>￥{{data.originalPrice}}</span>
          <p>{{data.prizeOrSlogan}}</p>
        </li>  
    </ul>
  </div>
</template>
  
<script>
 import axios from "axios"
 // import bus from "../bus"
export default {
  name: 'price',
  data () {
    return {
    }
  },

  methods:{
     handleClick(productId){
        this.$router.push('/item/'+productId)
    }
  },
 mounted(){
     var id = this.$route.params.word
     console.log(id)
      //异步请求， 并将结果存储到 store中
      this.$store.dispatch("getSaleAction",id);
  }
   // beforeCreate(){
   //    bus.$emit("footerbarhide",false)
   //  },
   //  beforeDestroy(){
   //    bus.$emit("footerbarhide",true)
   //  }
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
</style>