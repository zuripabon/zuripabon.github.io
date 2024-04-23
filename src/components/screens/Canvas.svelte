<script>
  import { onMount } from 'svelte';
  import ControlsCard from '../molecules/UxControlsCard.svelte';
  import ProfileCard from '../molecules/ProfileCard.svelte';
  import HoverMessageCard from '../molecules/MessageCard.svelte';
  import NavigationMenu from '../molecules/NavigationMenu.svelte';
  import Modal from '../molecules/Modal.svelte';
  import Education from './Education.svelte';
  import About from './About.svelte';
  import Experiments from './Experiments.svelte';
  import Jobs from './Jobs.svelte';
  import Shop from './Shop.svelte';
  import Legal from './Legal.svelte';
  
  import { loader, pathname, isModalOpen } from '../../lib/store'
  import { loadGame } from '../../lib/3d'
  import * as routes from '../../lib/routes'

  let section = null;
  let isMessageCardOpen = false;
  let isControlsCardOpen = true;

  const handleOnLoad = (progress) => loader.set(progress);
  const handleOnItemHover = (id, state) => {
    if($isModalOpen){
      return;
    }
    isControlsCardOpen = false;
    section = id;
    isMessageCardOpen= state;
  }
  const handleOnItemClick = () => {

    if(!isMessageCardOpen){
      return;
    }

    isMessageCardOpen= false;

    routes.goTo(section, true)
  }

  const handleOnSectionClick = () => {
    isMessageCardOpen= false;
  }

  const handleOnCloseModal = () => {
    routes.goTo(routes.HOME);
  }

  onMount(() => {
    loadGame(handleOnLoad, handleOnItemHover, handleOnItemClick)
	});

</script>

<!-- // set on:click={handleOnItemClick} if it makes hard to select button -->
<section class="webgl">
  <ProfileCard />
  <ControlsCard isOpen={isControlsCardOpen}/>
  <HoverMessageCard section={section} isOpen={isMessageCardOpen} onClick={handleOnItemClick}/>
  <NavigationMenu onClick={handleOnSectionClick} />
  <Modal isOpen={$isModalOpen} onClose={handleOnCloseModal}>
    {#if $pathname === routes.EDUCATION}
      <Education/>
    {:else if $pathname === routes.ABOUT}
      <About/>
    {:else if $pathname === routes.PROJECTS}
      <Experiments/>
    {:else if $pathname === routes.CAREER}
      <Jobs/>
    {:else if $pathname === routes.CONTACT}
      <Shop/>
    {:else if $pathname === routes.LEGAL}
      <Legal/>
    {/if}
  </Modal>
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
