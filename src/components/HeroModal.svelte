<script>
  export let isOpen = false
  export let mode = 'light'
  export let onClose = () => null

  let mainElement;

  const handleOnClose = (event) => {
    if(event.target === mainElement){
      onClose();
    }
  }


</script>

<main class="main" class:hidden={!isOpen}>

  <div class="backdrop"/>
  <div class="content" bind:this={mainElement} class:animate={isOpen} class:light-mode={mode==='light'} class:dark-mode={mode==='dark'} on:click={handleOnClose}>
    <article class="article">
      <slot/>
    </article>
  </div>

</main>
    
<style>

  .main {
    position: fixed;
    width: 100vw;
    height: 100vh;
    opacity: 1;
    visibility: visible;
    top:0;
    left: 0;
    z-index: 40;
  }

  .hidden {
    visibility: hidden;
    opacity: 0;
    height: 0;
    
  }

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: -101%;
    /* max-width: 1200px; */
    transform: translateX(-50%);
    left: 50%;
    transition: all;
    transition-duration: 200ms;
    /* hsla(318, 63%, 72%, 0.15); */
    z-index: 60;
    overflow: auto;
  }

  .light-mode {
    background: hsla(318, 63%, 72%, 0.45);
  }

  .dark-mode {
    background: hsl(0deg 0% 0% / 65%);
  }

  .animate {
    top: 0;
  }
  
  .backdrop {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    /* max-width: 1200px; */
    transform: translateX(-50%);
    left: 50%;
    backdrop-filter: blur(10px);
    z-index: 50;
  }

  .article {
    margin: 4rem auto;
    padding: 4rem;
    max-width: 80%;

  }

</style>
