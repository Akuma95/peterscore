<template>
    <h1>Peters&shy;Core</h1>
    <div class="container box">
      <div class="innerBox animLeft">
          <h2>Menu</h2>
          <MenuComponent></MenuComponent>
      </div>
      <div class="innerBox scrollBox animRight">
        <a href="https://www.furaffinity.net/journals/peterthelykoi/"><h2>Newest Journal</h2></a>
        <h2>Newest Sticker</h2>
        <img src="http://www.peterscore.com/Newest/sticker.png" alt="Peter laughs">
      </div>
    </div>
</template>
  
  <script>
  import MenuComponent from '@/components/MenuComponent.vue';
  export default {
    name: 'HomeView',
    components: {
      MenuComponent
    }
  }
  </script>

  <style scoped lang="scss">
  img {
    max-width: 100%;
  }
  </style>
  