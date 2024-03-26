<script>
  import CloseButton from "./CloseButton.svelte"
  import ModeButton from "./ModeButton.svelte"

  export let isOpen = false
  export let mode = 'dark'
  export let onClose = () => null

  const handleOnClose = (event) => {
      onClose();
  }

  const handleToggleMode = () => {
    if(mode === 'light'){
      mode = 'dark';
      return
    }

    if(mode === 'dark'){
      mode = 'light';
      return
    }
  }

</script>

<main class="main" class:hidden={!isOpen}>

  <div class="backdrop"/>
  <div class="close-container">
    <CloseButton onClick={handleOnClose} />
  </div>
  <div class="mode-container">
    <ModeButton onClick={handleToggleMode} mode={mode}/>
  </div>
  <div class="content" class:animate={isOpen} class:light-mode={mode==='light'} class:dark-mode={mode==='dark'} >
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


  /* Track */
  .content::-webkit-scrollbar {
    width: 7px; /* Width of the scrollbar */
  }

  /* Handle */
  .content::-webkit-scrollbar-thumb {
    background: rgba(207, 207, 207, 0.8) ; /* Color of the scrollbar handle */
    border-radius: 5px; /* Rounded corners */
  }

  /* Handle on hover */
  .content::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 1); /* Color of the scrollbar handle on hover */
  }

  .content::-webkit-scrollbar-track {
    background-color: rgba(207, 207, 207, 0.2); /* Color of the scrollbar track */
  }

  .light-mode {
    background: hsla(318, 63%, 72%, 0.7);
    color: rgba(255, 255, 255, 1);
  }

  .dark-mode {
    background: hsl(0deg 0% 0% / 65%);
    color: rgba(207, 207, 207, 0.8);
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
    width: 70%;
    max-width: 1080px;

  }

  .close-container {
    position: fixed;
    top: 30px;
    right: 60px;
    z-index: 70;
  }

  .mode-container {
    position: fixed;
    top: 30px;
    left: 60px;
    z-index: 70;
  }

</style>
