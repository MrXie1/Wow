<template>
  <div class="list">
    <div class="list-top">
      <router-link to="/index" tag="span">
        <img src="/static/home-0.png">
      </router-link>
      <span class="title">title</span>
      <router-link to="/category" tag="span">
        <img src="/static/category-7.png">
      </router-link>
    </div>
    <div class="swiper-container">
      <ul class="swiper-wrapper">
        <li @click="who='ALL'" class="swiper-slide active1"><p><img src="/static/10_客厅与卧室.png">ALL</p></li>
        <li @click="who='shafa'" class="swiper-slide"><p>沙发</p></li>
        <li @click="who='yideng'" class="swiper-slide"><p>椅凳</p></li>
        <li @click="who='guijia'" class="swiper-slide"><p>柜架</p></li>
        <li @click="who='xiuxianyi'" class="swiper-slide"><p>休闲椅</p></li>
        <li @click="who='canzhuo'" class="swiper-slide"><p>餐桌</p></li>
        <li @click="who='chaji'" class="swiper-slide"><p>茶几和边桌</p></li>
        <li @click="who='shuzhuo'" class="swiper-slide"><p>书桌</p></li>
        <li @click="who='chuang'" class="swiper-slide"><p>床</p></li>
        <li @click="who='geduan'" class="swiper-slide"><p>隔断</p></li>
        <!-- <li v-for="data1,index in list1" :class="current1==index?'active1':''" @click="handleClickCurrent1(index)">
          <p>{{data1}}</p>
        </li> -->
      </ul>
    </div>
      <ul class="list-card2">
        <!-- <li @click="who='onShelfTime'" class="active2"><p>上新</p></li>
        <li @click="who='sales'" class=""><p>销量</p></li>
        <li @click="who='price'" class=""><p>价格</p></li> -->
        <li v-for="data2,index in list2" :class="current2==index?'active2':''" @click="handleClickCurrent2(index)">
          <p>{{data2}}</p>
        </li>
      </ul>
    
    <keep-alive>
        <component :is="who2"></component>
    </keep-alive>
    <!-- <div class="spaceWhite"></div> -->
    <!-- <router-view></router-view> -->
  </div>
</template>
  <!-- <img src="/static/10_客厅与卧室.png"> -->
<script>
import Listcard from './list-card'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css' 
import Sales from './sales'
import Price from './price'
import OnShelfTime from './onShelfTime'

export default {
  name: 'list',
  data () {
    return {
      who2: 'onShelfTime',
      list1: ['ALL','沙发','椅凳','柜架','休闲椅','餐桌','茶几和边桌','书桌' ,'床','隔断'],
      list2: ['上新', '销量', '价格'],
      current1: 0,
      current2: 0
    }
  },
  mounted () {
    this.$nextTick(()=>{
      new Swiper('.swiper-container', {
        // freeMode : true,
        // freeModeMomentum : false
        slidesPerView : 4,
      })
    })
  },

  methods:{
    handleClickCurrent1(index){
      console.log("click1",index);
      this.current1 = index;
    },
    handleClickCurrent2(index){
      // console.log("click2",index);
      this.current2 = index;
      if (index===0) {
        this.who2 ='onShelfTime';
      } else if (index===1) {
        this.who2 ='sales';
      } else {
        this.who2 ='price';
      }
    }
  },
  components:{
    OnShelfTime,
    Sales,
    Price
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .list {
    .list-top {
      width: 3.75rem; height: .5rem; display: flex; line-height: .5rem; justify-content: space-between; padding: 0 .1rem;
      img {
        width: .2rem; height: .2rem; margin-top: 80%;
      }
      span {

      }     
    }
    .swiper-container {
      width: 3.75rem; overflow: hidden; position: relative;  height: 1.1rem; width: 100%; ; background: url(/static/background.jpg) no-repeat; background-size: 3.75rem 1.1rem;
      .swiper-wrapper {
        height: 1.1rem; width: 9.5rem;
        .swiper-slide {
          width: .8rem !important; height: .8rem;float: left; color: white; text-align: center; margin: .15rem 0 .15rem .15rem; font-weight: bold; display: flex; align-items: center; border: 1px solid rgba(255, 255, 255, .6); background: rgba(255, 255, 255, 0); /*border: 1px solid rgba(255, 255, 255, 1);  background: rgba(255, 255, 255, .2);*/
          p {
            img {width: .4rem;height: .4rem;margin: 0 auto;}
            flex: 1;
          }
        }
        .active1 {
          border: 1px solid rgba(255, 255, 255, 1);  background: rgba(255, 255, 255, .2);
        }
      }
    } 
    .list-card2 {
      display: flex; justify-content: space-around; border-bottom: 1px solid #f5f5f5;
      li {
        float: left; height: .4rem; line-height: .4rem; text-align: center; color: #808080;
        p {
          height: .4rem; padding: 0 .1rem;
        }
      }
      .active2 {
         border-bottom: 2px solid #202020;
      }
    }
   /* .spaceWhite {width: 100%; height: .2rem;}*/
  }
</style>
