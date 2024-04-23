<script>
  import NavigationMenu from '../molecules/NavigationMenu.svelte';
  import Modal from '../molecules/Modal.svelte';
  import Education from './Education.svelte';
  import About from './About.svelte';
  import Experiments from './Experiments.svelte';
  import Jobs from './Jobs.svelte';
  import Shop from './Shop.svelte';
  import Legal from './Legal.svelte';
  import ButtonMobile from '../atoms/ButtonMobile.svelte';
  import * as routes from '../../lib/routes'
  import { pathname, isModalOpen } from '../../lib/store'
  import { onMount } from 'svelte';

  const handleOnCloseModal = () => {
    routes.goTo(routes.HOME);
  }

  onMount(() => {
    routes.router();
  })

</script>

<ButtonMobile />
<NavigationMenu isMobile />
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
    <Shop isMobile/>
  {:else if $pathname === routes.LEGAL}
    <Legal/>
  {/if}
</Modal>


<style>
</style>
