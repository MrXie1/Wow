<template>
  <div >
    <div>
      <swipe class="my-swipe">
        <swipe-item class="slide1">
          <img src="https://img.wowdsgn.com/product/addtionalImage//2a447b6b-c28d-4877-9c77-f74354c5ea68_2dimension_750x600.jpg?imageView2/1/w/375/h/300" alt="">
        </swipe-item>
        <swipe-item class="slide2">
          <img src="https://img.wowdsgn.com/product/addtionalImage//ac7623cc-3779-4159-ad17-0972c035f4a1_2dimension_750x600.jpg?imageView2/1/w/375/h/300" alt="">
        </swipe-item>
        <swipe-item class="slide3">
          <img src="https://img.wowdsgn.com/product/images/df14765a-757f-481a-b904-d7fd5b0a9a5b.jpg?imageView2/1/w/375/h/300" alt="">
        </swipe-item>
        <swipe-item class="slide4">
          <img src="https://img.wowdsgn.com/product/addtionalImage//83ada771-4900-4825-aee1-cf7642a68ccc_2dimension_750x600.jpg?imageView2/1/w/375/h/300" alt="">
        </swipe-item>
        <swipe-item class="slide4">
          <img src="https://img.wowdsgn.com/product/addtionalImage//4f18022f-9448-41b3-8775-b8ac3f85e4aa_2dimension_750x600.jpg?imageView2/1/w/375/h/300" alt="">
        </swipe-item>
        <swipe-item class="slide4">
          <img src="https://img.wowdsgn.com/product/addtionalImage//5d8ae741-7167-4a4f-ba2e-f6128adffa50_2dimension_750x600.jpg?imageView2/1/w/375/h/300" alt="">
        </swipe-item>
        <swipe-item>
          <img src="https://img.wowdsgn.com/product/images/df14765a-757f-481a-b904-d7fd5b0a9a5b.jpg?imageView2/1/w/375/h/300" alt="">
        </swipe-item>
      </swipe>
      <p v-for = "data in array">{{data.productName}}</p>
      <p v-for = "data in array">￥:{{data.sellPrice}}</p>
      <p v-for = "data in list" class="title">{{data.title}}</p>
    </div>
  </div>
</template>
  
<script>
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
import axios from "axios"
import vuex from "vuex"
export default {
  name: 'detail',
  data () {
    return {
      array:[],
      list:[]
    }
  },

  methods:{

  },
  components:{
    Swipe,
    SwipeItem
  },
  mounted(){

    fetch(`/itemdetail/skuInfos/${this.$route.params.ylyid}?_=${new Date().getTime()}`).then(res=>{
      return res.json()
    }).then(res=>{
      // console.log(res);
    });

    fetch(`/itemdetail/spuInfos/7698?_=${new Date().getTime()}`).then(res=>{
      return res.json()
    }).then(res=>{
      // console.log(res);
    });
    fetch(`/recommend/item?skuId=9027&_=${new Date().getTime()}`).then(res=>{
      return res.json()
    }).then(res=>{
      console.log(res.data.skuInLists);
      console.log(res.data.skuInLists[0].productIconList);
      this.list = res.data.skuInLists[0].productIconList
      this.array = res.data.skuInLists;
    })
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .my-swipe {
   width: 3.75rem;
   height: 3rem;
    color: #fff;
    font-size: .3rem;
    text-align: center;
  }
  .title{
    color: white;
    background-color: pink;
    display: inline-block;
  }
</style>
