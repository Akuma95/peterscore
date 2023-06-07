<template>
  <h1>Engine</h1>
  <div class="container scrollBox">
    <div class="box animLeft">
      <div class="innerBox">
        <video autoplay="" muted="" loop="" class="videoddm">
          <source src="http://www.peterscore.com/Engine/DanceDanceMusic.mp4" type="video/mp4">
          Your browser does not support mp4 videos!
        </video>
      </div>
      <div class="innerBox">
        <p>For the future, I am going to make all objects network-compatible.
This is going to enable easy multiplayer features.
One of my big aims are dynamics resources, which means that your resources
are going to be loaded automatically.
If everything works like planned, I want to move to a own C# game engine.</p>
      </div>
    </div>
    
    <div class="box animRight">
      <div class="innerBox">
          <p>
            The PeterEngine is currently a class library build in C#.
You can combine it with <a href="https://www.monogame.net/">MonoGame</a> and already provides a good build in UI.
It's also possible to use it for <a href="https://unity.com/">Unity</a>, <a href="https://godotengine.org/">Godot</a> or any other C# supporting
game engine.
For now, one of the key function is the timer,
which allows making fluid 60fps movement.
As shown in the left dance dance music prototype,
it's perfect for timing relevant game mechanics.
The UI offers key, mouse and touch support.
Use the label box and the buildtime property
to make your text writes delayed like a dialog.</p>
      </div>
      <div class="innerBox">
        <video autoplay="" muted="" loop="" class="videoscg">
          <source src="http://www.peterscore.com/Engine/StrategyCardGame.mp4" type="video/mp4">
          Your browser does not support mp4 videos!
        </video>
      </div>
    </div>
  </div>
</template>
  
  <script>
  export default {
    name: 'EngineView',
    components: {
    }
  }
  </script>
  
  <style scoped lang="scss">
  video {
    width: 100%;
  }
  p {
    font-size: 24px;
  }
  a {
    color: rgb(0, 0, 255);
  }
  </style>