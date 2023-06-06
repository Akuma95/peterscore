<template>
    <div class="menu">
        <div class="item1 item yellow"><router-link to="/engine">Engine</router-link></div>
        <div class="item2 item blue"><router-link to="/gallery">Art</router-link></div>
        <div class="item3 item purple"><router-link to="/socials">Socials</router-link></div>
        <div class="item4 item green"><router-link to="/friends">Friends</router-link></div>
    </div>
</template>
  
  <script>
  export default {
    name: 'HomeView',
    components: {
    }
  }
  </script>
  
  <style scoped lang="scss"> 
  @import "../assets/style/variables.scss";

    a {
        padding-left: 20px;
        padding-right: 20px;
        transition: padding-left 1s;
        text-decoration: none;
    }
    .menu {
        animation: MoveInLeft 1s;
    }

    .item {
        width: 50%;
        transition: $transition;

        &:hover {
            width: 75%;

            & a {
                padding-left: 35%;
            }
        }
    }
    
    @media (max-width: $mobileView) {
        .item {
            width: 75%;
            transition: $transition;

            &:hover {
                width: 100%;

                & a {
                    padding-left: 35%;
                }
            }
        }
    }
    .yellow {
        background-color: rgb(120, 120, 120);
        transition: $transition;

        &:hover {
            background-color: rgb(255, 200, 125);
        }
    }
    .blue {
        background-color: rgb(120, 120, 120);
        transition: $transition;

        &:hover {
            background-color: rgb(125, 255, 215);
        }
    }
    .purple {
        background-color: rgb(120, 120, 120);
        transition: $transition;

        &:hover {
            background-color: rgb(175, 125, 255);
        }
    }
    .green {
        background-color: rgb(120, 120, 120);
        transition: $transition;

        &:hover {
            background-color: rgb(180, 255, 125);
        }
    }
  </style>
  