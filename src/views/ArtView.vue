<template>
  <h1>Gallery</h1>
  <div class="container scrollBox">
    <div class="auto">
      <img src="http://www.peterscore.com/Gallery/laughing_jana_summer.png" alt="laughing_jana_summer" height="300">
      <img src="http://www.peterscore.com/Gallery/laughing_jana_winter.png" alt="laughing_jana_winter" height="300">
      <img src="http://www.peterscore.com/Gallery/lama_del_rey.png" alt="lama_del_rey" height="300">
      <img src="http://www.peterscore.com/Gallery/burr_gering.png" alt="burr_gering" height="300">
      <img src="http://www.peterscore.com/Gallery/rehmix_christmasalt.png" alt="rehmix_christmasalt" height="300">
      <img src="http://www.peterscore.com/Gallery/rehmix.png" alt="rehmix" height="300">
      <img src="http://www.peterscore.com/Gallery/squirtle.png" alt="squirtle" height="300">
      <img src="http://www.peterscore.com/Gallery/bear_scares_bear.png" alt="bear_scares_bear" height="300">
      <img src="http://www.peterscore.com/Gallery/snow_leopard.png" alt="snow_leopard" height="300">
      <img src="http://www.peterscore.com/Gallery/peterthelykoi.png" alt="peter_the_lykoi" height="300">
    </div>
  </div>
</template>
  
  <script>
  export default {
    name: 'ArtView',
    components: {
    }
  }
  </script>
  
  <style scoped>
  .auto {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    gap: 20px;
  }
  img {
    animation: GrowIn 1s;
  }
  </style>