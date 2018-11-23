<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
    <footbar v-show="isShow" @event="isShow=!isShow"></footbar>
  </div>
</template>

<script>
  import footbar from './components/footbar'

  export default {
    name: 'App',
    provide(){
      return {
        reload: this.reload
      }
    },
    data(){
      return{
        isShow: true,
        isRouterAlive: true
      }
    },

    components:{
      footbar
    },

    methods:{
      reload(){
        this.isRouterAlive = false
        this.$nextTick(function (){
          this.isRouterAlive = true
        })
      }
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html{
    height: 100%;
    font-size: 26.666667vw;
  }

  body{
    font-size: .16rem;
  }

  ul,li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: #333;
  }

  img{
    display: block;
  }

  .clear:after{
    content:"";
    display:block;
    clear:both;
  }
  
  .l{
    float: left;
  }

  .r{
    float: right;
  }
</style>
