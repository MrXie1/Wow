<template>
  <div class="category">
    <div id="searchInfo">
      <img id="searchIcon" src="/static/searchIcon-e1.png">
      <input type="search" id="searchInput" name="searchInput" placeholder="搜索我的尖叫好物">
    </div>
    <img class="banner" src="/static/furniture.png">

    <div v-for="(value,key,index) in $store.state.categoryBottomList">{{index}}</div>
    <!-- {{$store.state.categoryBottomList.inner}} -->


    <!-- {{$store.state.listTitle}}{{$store.state.furnitureisShow}}{{$store.state.householdisShow}} -->

      <!-- 究极简化魔改 -->
    <ul class="furniture">
      <router-link v-for="data1,index in $store.state.categoryTopList" :key="data1.id" :to="'/list?categoryId='+data1.id" activeClass="active"><li @click="FurnitureisShow(data1.name)">{{data1.name}}<i>ic</i></li></router-link>
    </ul>

      <img class="banner" src="/static/household.png">

    <!-- 究极简化魔改 -->
    <ul class="household">
      <router-link v-for="data2,index in $store.state.categoryBottomList" :key="data2.id" :to="'/list?categoryId='+data2.id" activeClass="active"><li @click="HouseholdisShow(data2.name)">{{data2.name}}<i>ic</i></li></router-link>
    </ul>


  </div>
</template>
  
<script>
export default {
  name: 'category',
  data () {
    return {

    }
  }, 
  mounted () {
    
    // this.categoryTopList = this.list1
    // this.$store.commit('categoryTopList', this.categoryTopList)
    // this.categoryBottomList = this.list2
    // this.$store.commit('categoryBottomList', this.categoryBottomList)
    // console.log(state.furnitureisShow)
    // console.log(state.householdisShow)
  
  },
  methods:{
    FurnitureisShow(data){
      this.$store.commit('changeFurnitureisShow', true)
      // this.$store.commit('changeFootisShow', false)
      this.$store.commit('changeListTitle', data)
    },
    HouseholdisShow(data){
      this.$store.commit('changeHouseholdisShow', true)
      // this.$store.commit('changeFootisShow', false)
      this.$store.commit('changeListTitle', data)
    }
  },
  beforedestory () {
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .category {
    padding: .09rem .15rem .8rem .15rem; 
    .banner {width: 3.45rem; height: 1.15rem;margin-top: .17rem;}
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
