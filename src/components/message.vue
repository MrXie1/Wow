<template>
  <div >
    <login></login>
  </div>
</template>
  
<script>
import login from './login'
import bus from '../bus'
export default {
  name: 'message',
  data () {
    return {
    }
  },

  methods:{
    
  },

  beforeCreate(){
    bus.$emit("footerbarhide",false);
  },

  beforeDestroy(){
    bus.$emit("footerbarhide",true);
  },

  components:{
    login
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
  }
</style>
