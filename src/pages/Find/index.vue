<template>
  <div class="hello" @click="openWebView">
    Find
  </div>
</template>

<script>
import {setTitle,pushNotification,openWebView} from '@/utils/nativeActions'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created(){
    console.log('find')
  },
  methods:{
    openWebView(){
      openWebView("http://172.11.89.33:3000/#/find")
    },
    pushNotification(){
      pushNotification('vue is great')
    }
  }
}
</script>
<style lang="less" scoped>
.hello{
  width: 100vw;
  height: 100vh;
  background: red;
}
</style>

