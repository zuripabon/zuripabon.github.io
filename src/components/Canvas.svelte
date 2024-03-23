<script>
  import { onMount } from 'svelte';
  import { loader } from '../lib/loader'
  import start from '../lib/3d'

  onMount(() => {
    start(".webgl", (progress) => {
      loader.set(progress);
    })
	});

</script>

<section class="webgl">
  <!-- <div class="ui">
    <div class="info">
      <div class="message-card">
          Here the content
      </div>
      <div class="info-container">
          <img class="logo-pic" src="assets/progressLogo.png" alt="zuripabon" title="zuripabon"/>
          <div class="info-contact">
              <p>Software Developer</p>
              <p>reach.zuripabon@gmail.com</p>
              <p class="hashtag">zuripabon</p>
          </div>
      </div>
    </div>
    <div class="message-desktop">
      <div class="message-card">
          Here the content
      </div>
    </div>
  </div> -->
  <canvas class="canvas"/>
</section>

<style>
  /* .webgl {
    width: 100vw;
    height: 100vh;
    display: none;
    position:absolute;
    top:0;
    left:0;
    max-width: 100%;
    max-height: 100%;
  }

  .ui {
    display: none;
  }

  .ui .info {
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    z-index: 110;
    margin: 30px;
  }

  .info-container {  
    display: flex;
    align-items: center;
  }

  .ui .message-desktop {
    position: absolute;
    left: 0;
    top:0;
    display: flex;
    z-index: 110;
    align-items: center;
    max-width: 250px;
    display: none;
  }

  .message-desktop .message-card, .info .message-card {
    font-size: 18px;
    color: #2e2e2e;
    background-color: #bbb8b8;
    padding: 30px;
    border-radius: 10px;
    border-bottom: 5px solid #e16d81;
    text-align: center;
  }

  .info .message-card {
      display: none;
      margin-bottom: 20px;
  }

  .info .message-card::after {
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

  .info .logo-pic {
      width: 90px;
      height: 85px;
  }

  .info .info-contact{
      font-size: 18px; 
      color: #E0DADB;
      margin-left: 10px;
  }

  .info .info-contact .hashtag{
      font-size: 30px; 
      color: #EE9CA8;
  } */

</style>
