<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
html {
  height: 100vh;
  width: 100vw;
}
body {
  background: radial-gradient(50% 50% at 50% 50%, #BB1A68 0%, #BB1A68 60.42%, #93134A 100%);
  background-repeat: no-repeat;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
