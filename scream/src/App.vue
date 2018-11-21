<template>
  <div id="app">
    <footbar v-show="isShow" @event="isShow = !isShow"></footbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import footbar from './components/footbar'

  export default {
    name: 'App',
    data(){
      return{
        isShow: true
      }
    },

    components:{
      footbar
    },

    methods:{
      
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
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
  }
</style>
