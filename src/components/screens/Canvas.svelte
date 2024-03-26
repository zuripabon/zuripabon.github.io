<script>
  import { onMount } from 'svelte';
  import ProfileCard from '../molecules/ProfileCard.svelte';
  import HoverMessageCard from '../molecules/MessageCard.svelte';
  import HeroModal from '../molecules/Modal.svelte';
  import AcademicBackground from './AcademicBackground.svelte';
  import About from './About.svelte';
  
  import { loader } from '../../lib/store'
  import { loadGame } from '../../lib/3d'

  let section = null;
  let isMessageCardOpen = false;
  let isModalOpen = false;

  const handleOnLoad = (progress) => loader.set(progress);
  const handleOnItemHover = (id, state) => {
    if(isModalOpen){
      return;
    }
    section = id;
    isMessageCardOpen= state;
  }
  const handleOnItemClick = () => {
    if(!isMessageCardOpen){
      return;
    }
    isModalOpen = true
    isMessageCardOpen= false;
  }
  const handleOnCloseModal = () => {
    isModalOpen = false
  }

  onMount(() => {
    loadGame(handleOnLoad, handleOnItemHover, handleOnItemClick)
	});

</script>

<!-- // set on:click={handleOnItemClick} if it makes hard to select button -->
<section class="webgl">
  <ProfileCard />
  <HoverMessageCard section={section} isOpen={isMessageCardOpen} onClick={handleOnItemClick}/>
  <HeroModal section={section} isOpen={isModalOpen} onClose={handleOnCloseModal}>
    {#if section === 'tent'}
      <AcademicBackground />
    {:else if section === 'campfire'}
      <About/>
    {/if}
  </HeroModal>
  <canvas id="canvas" class="canvas" class:cursor={isMessageCardOpen}/>
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

</style>
