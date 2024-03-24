<script>
  import { onMount } from 'svelte';
  import { loader } from '../lib/store'
  import { loadGame } from '../lib/3d'
  import Copies from '../lib/copies';

  let section = null;
  let isOpen = false;
  let messageElement;

  const handleOnLoad = (progress) => loader.set(progress);
  const handleOnItemHover = (id, state) => {
    section = id;
    isOpen= state;
  }
  const handleOnItemClick = (id) => {
    console.log('click', id)
  }

  onMount(() => {
    loadGame(handleOnLoad, handleOnItemHover, handleOnItemClick)
    document.addEventListener('mousemove', function(e) {
      if(!messageElement || !isOpen){
        return;
      }
      messageElement.style.left = (e.clientX + 3) + 'px';
      messageElement.style.top = (e.clientY + 3) + 'px';
    });
	});

</script>

<section class="webgl">
  <div class="webgl-ui">
    <div class="info">
        <img class="logo-pic" src="docs/assets/progressLogo.png" alt="zuripabon" title="zuripabon"/>
        <div class="info-contact">
            <p class="hashtag">zuripabon</p>
            <p>hola@zuripabon.es</p>
            <p>telegram | twitter | linkedin | calendy</p>
        </div>
    </div>
    <div class="message" bind:this={messageElement} class:hidden={!isOpen}>
      <div class="message-card">
          {Copies(section)}
      </div>
    </div>
  </div>
  <canvas id="canvas" class="canvas" class:cursor={isOpen}/>
</section>

<style>

  .canvas {
    width: 100%;
    height: 100%;
    position:absolute;
    top:0;
    left:0;
    max-width: 100%;
    max-height: 100%;
    z-index:10;
    display: none;
  }

  .cursor {
    cursor: pointer !important;
  }

  .webgl-ui {
    display: none;
  }

  .info {
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    background: transparent;
    z-index: 20;
    margin: 30px;
  }


  .message {
    position: absolute;
    left: 50%;
    top: 50%;
    display: flex;
    z-index: 20;
    place-content: center;
    place-items: center;
    max-width: 250px;
    transition: all;
    transition-duration: 200ms;
  }

  .hidden {
    display: none;
  }

  .message-card {
    font-size: 18px;
    font-weight: bold;
    color: #2e2e2e;
    background-color: #bbb8b8;
    padding: 20px;
    border-radius: 10px;
    border-bottom: 5px solid #e16d81;
    text-align: center;
    text-wrap: nowrap;
  }

  .message-card::after {
      content: '(external link)';
      display: inline-block;
      width: 1em;
      height: 1em;
      text-indent: 1em;
      white-space: nowrap;
      overflow: hidden;
      background-image: url(./external.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: 75% auto;
      position: relative;
      top: 3px;
      left: 2px;
    }

  .logo-pic {
      width: 90px;
      height: 85px;
  }

  .info-contact{
    display: flex;
    flex-direction: column;
      font-size: 18px; 
      color: #E0DADB;
      margin-left: 10px;
  }

  .hashtag{
      font-size: 30px; 
      color: #EE9CA8;
  }

</style>
