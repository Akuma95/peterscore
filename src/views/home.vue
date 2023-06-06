<template>
    <h1>PetersCore</h1>
    <div class="left">
        <p>left</p>
    </div>
    <div class="right">
        <p>right</p>
    </div>
</template>
  
  <script>
  import HelloWorld from './components/HelloWorld.vue'
  
  export default {
    name: 'App',
    components: {
      HelloWorld
    }
  }
  </script>
  
  <style scoped>
  .left {
    float: left;
  }
  .right {
    float: right;
  }
  </style>
  