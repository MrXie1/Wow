<template>
  <div class="category">
    <div id="searchInfo">
      <img id="searchIcon" src="/static/searchIcon-e1.png">
      <input type="search" id="searchInput" name="searchInput" placeholder="搜索我的尖叫好物">
    </div>
    <img class="banner" src="/static/furniture.png">
    <ul class="furniture">
      <router-link to="/list" tag="li" activeClass="active">沙发<i>ic</i></router-link>
      <router-link to="/list" tag="li" activeClass="active">椅凳<i>ic</i></router-link>
      <router-link to="/list" tag="li" activeClass="active">桌几<i>ic</i></router-link>
      <router-link to="/list" tag="li" activeClass="active">床<i>ic</i></router-link>
      <router-link to="/list" tag="li" activeClass="active">柜架<i>ic</i></router-link>
      <router-link to="/list" tag="li" activeClass="active">餐桌<i>ic</i></router-link>
      <router-link to="/list" tag="li" activeClass="active">茶几和边桌<i>ic</i></router-link>
      <router-link to="/list" tag="li" activeClass="active">书桌<i>ic</i></router-link>
      <router-link to="/list" tag="li" activeClass="active">隔断<i>ic</i></router-link>
    </ul>
      <img class="banner" src="/static/household.png">
    <ul class="household">
      <router-link to="/list" tag="li" activeClass="active">灯具<i>ic</i></router-link>
      <router-link to="/list" tag="li" activeClass="active">用餐<i>ic</i></router-link>
      <router-link to="/list" tag="li" activeClass="active">时尚生活<i>ic</i></router-link>
      <router-link to="/list" tag="li" activeClass="active">烹饪<i>ic</i></router-link>
      <router-link to="/list" tag="li" activeClass="active">纺织品<i>ic</i></router-link>
      <router-link to="/list" tag="li" activeClass="active">家饰<i>ic</i></router-link>
      <router-link to="/list" tag="li" activeClass="active">卫浴<i>ic</i></router-link>
    </ul>


  </div>
</template>
  
<script>
export default {
  name: 'category',
  data () {
    return {
      //  {休闲椅2012替换掉了，name:'桌几',id:''}
      // list1: [{name:'沙发',id:20},{name:'椅凳',id:21},{name:'休闲椅',id:2012},{name:'床',id:2310},{name:'柜架',id:24},{name:'餐桌',id:2210},{name:'茶几和边桌',id:2211},{name:'书桌',id:2212},{name:'隔断',id:2414}],
      // list2: [{name:'灯具',id:25},{name:'用餐',id:26},{name:'时尚生活',id:32},{name:'烹饪',id:27},{name:'纺织品',id:28},{name:'家饰',id:29},{name:'卫浴',id:31}]
    }
  },   

  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .category {
    .banner {width: 3.45rem; height: 1.15rem;margin-top: .17rem;}
    padding: .09rem .15rem .8rem .15rem;
    #searchInfo {
      background: #f5f5f5; width: 80%; height: .28rem; border-radius: .2rem; position: relative; left: 0; top: 0; margin-left: .03rem;
      #searchIcon {
        width: .2rem; height: .2rem; position: absolute; left: .06rem; top: .04rem;
      }
      #searchInput {
          height: .28rem; position: absolute; left: .4rem; top: 0; border: none; outline: none; background: #f5f5f5;
      }
    }
    ul {
      li {
        height: .5rem; border-bottom: 1px solid #eaeaea; line-height: .5rem; text-indent: .16rem;
        i {
          float: right; line-height: .5rem; 
        }
      }
    }
  }
</style>
