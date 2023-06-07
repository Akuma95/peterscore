<template>
  <div class="body">
    <router-view />
  </div>
  <div>
    <router-link to="/">Home</router-link> | <router-link to="/imprint">Imprint</router-link> | <router-link to="/dataprotection">Data Protection</router-link>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
@import "assets/style/variables.scss";

html {
  font-size: 2.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: rgb(255, 255, 255);
  text-align: start;

  height: 100vh;
  width: 100vw;
}
body {
  background: radial-gradient(50% 50% at 50% 50%, #BB1A68 0%, #BB1A68 60.42%, #93134A 100%);
  background-attachment: fixed;
  background-size: 100vw 100vh;
}
.body {
  height: 80vh;
}
@media (max-width: $mobileView) {
  .body {
    height: fit-content;
  }
}

#app {
  width: 90%;
  margin: auto;
}

.scrollBox {
  overflow: auto;
}
.container {
  max-height: 75%;
}
.box {
  display: flex;
  flex-wrap: wrap;

  .innerBox {
      max-height: 550px;
      flex: 0 0 50%;
  }
  @media (max-width: $mobileView) {
    .innerBox {
      max-height: 100%;
      flex: 0 0 100%;
    }
  }
}

a {
  color: rgb(255, 255, 255);
}

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: none;
    scrollbar-color: #bb1a68 #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: #ffffff;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #bb1a68;
    border-radius: 8px;
    border: 3px solid #ffffff;
  }


.animLeft {
  animation: MoveInLeft 1s;
}
.animRight {
  animation: MoveInRight 1s;
}
.animGrowIn {
  animation: GrowIn 1s;
}

@keyframes MoveInLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
        transform: translateX(0%);
    }
}
@keyframes MoveInRight {
    0% {
      transform: translateX(100%);
    }
    100% {
        transform: translateX(0%);
    }
}
@keyframes GrowIn {
    0% {
      font-size: 0%;
      transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}
</style>
