<template>
  <div id="app">
    <router-view></router-view>
    <footbar v-show="isShow" @event="isShow=!isShow"></footbar>
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
    box-sizing: border-box;
  }
  
  html{
    height: 100%;
    font-size: 26.666667vw;
  }

  body{
    font-size: .16rem;
    background: #F5F5F5;
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
