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
      <li v-for='data in datalist' :key='data.id'>
        <div class="cart_head">
          <input type="checkbox" v-model="checkgroup"  :value="data" @click="singleChecked" class="check">
          <el-input-number size="mini" v-model="data.number" @change="handleChange" :min="1" class="input"></el-input-number>
        </div>
        <div class="cart_body">
          <img :src="data.img" alt="" class="l">
          <div class="right l">
            <p class="name">{{ data.name }}</p>
            <p class="color">{{ data.color }}</p>
            <div class="price">￥ {{ data.price }}</div>
          </div>
        </div>
      </li>
    </ul>
    <footer> 
      <div class="left l">
        <label for=""><input type="checkbox" v-model="isAllChecked" @click="handleChecked"/> 全选</label>
      </div>
      <div class="all r">
        <p class="l com">合计： ￥{{computedSum}}</p>
        <a href="/order" class="l">去结算</a>
      </div>
    </footer>
  </div>
</template>

<script>
import { Checklist } from 'mint-ui';
import axios from 'axios'
import bus from '../bus'

export default {
  name: 'cart',
  data () {
    return {
      // num1: 1,
      checkgroup:[],
      isAllChecked:false,
      datalist:[
        {
          img:'https://img.wowdsgn.com/product/images/344bce61-4cfd-4d4c-ade6-ddca26d5f24a_2dimension_800x800.jpg?imageslim',
          name:" FERNANDO FLOOR 地灯 玫瑰金",
          color:'玫瑰金',
          price:2880,
          number:1,
          id:"0"
        },
        {
          img:'https://img.wowdsgn.com/product/images/4cb4c145-9893-4b9f-8f1a-02796d28dec4_2dimension_800x800.jpg?imageslim',
          name:" 湾椅 湖泊蓝",
          color:'湖泊蓝',
          price:2699,
          number:1,
          id:"1"
        }
      ]
    }
  },

  mounted(){
    
  },

  methods:{
    handleChecked(){
      console.log(this.checkgroup.length)
      if(this.isAllChecked == true){
          this.checkgroup = this.datalist
      }else {
        this.checkgroup = [];
      }
    },
    singleChecked(){
      // console.log(this.checkgroup.length)
      if(this.checkgroup.length == this.datalist.length-1){
        this.isAllChecked = true;
      }else {
        this.isAllChecked = false;
      }
    },
    handleChange(value) {
      // console.log(value);
    }
  },

  computed:{
    computedSum(){
      var sum =0;
      for(var i in this.checkgroup){
        sum += this.checkgroup[i].number * this.checkgroup[i].price;
      }
      return sum;
    }
  },

  beforeCreate(){
    bus.$emit("footerbarhide",false);
  },

  destroyed(){
    bus.$emit("footerbarhide",true);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  *{
    padding: 0;
  }
  .mint-checkbox-input:checked,.mint-checkbox-core {
      background-color: #333;
      border-color: #333;
  }
  input[type="checkbox"]{
    width: .2rem;
    height: .2rem;
    border-radius: 50%;
    background: white;
  }
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
  .cart_head{
    width: 100%;
    height: .5rem;
    position: relative;
    .check{
      border: none;
      position: absolute;
      left: .1rem;
      height: .4rem;
    }
    .input{
      width: .90rem;
      height: .25rem;
      position: absolute;
      top: .1rem;
      right: .2rem;
    }
  }
  .cart_body{
    padding: .15rem;
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    height: 1.35rem;
    img{
      width: .8rem;
      margin-left: .2rem;
    }
    .right{
      .name{
        font-size: .14rem;
      }
      .color{
        background: #f5f5f5;
        height: .22rem;
        color: gray;
        font-size: .13rem;
        display: inline-block;
        margin-top: .1rem;
        padding: .02rem .1rem;

      }
      .price{
        margin-top: .3rem;
        font-size: .13rem;
      }
    }
  }
  footer{
    width: 100%;
    height: .5rem;
    background: white;
    z-index: 1;
    position: absolute;
    bottom: 0;
    left: 0;
    // border-top: 1px solid #ccc;
    .left{
      margin-left: .1rem;
      line-height: .5rem;
    }
    p{
      line-height: .5rem;
      margin-right: .2rem;
    }
    a{
      display: block;
      width: .94rem;
      text-align: center;
      line-height: .5rem;
      background: #FFD444;
    }
  }
</style>
