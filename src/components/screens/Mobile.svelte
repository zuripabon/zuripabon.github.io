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
  
  let isModalOpen = false;
  let section;

  const handleOnSectionClick = (id) => {
    section = id;
    isModalOpen = true
  }

  const handleOnCloseModal = () => {
    isModalOpen = false
  }

</script>

<ButtonMobile onClick={() => handleOnSectionClick('boat')} />
<NavigationMenu onClick={handleOnSectionClick} isMobile />
<Modal section={section} isOpen={isModalOpen} onClose={handleOnCloseModal}>
  {#if section === 'tent'}
    <Education/>
  {:else if section === 'campfire'}
    <About/>
  {:else if section === 'fox'}
    <Experiments/>
  {:else if section === 'box'}
    <Jobs/>
  {:else if section === 'boat'}
    <Shop isMobile/>
  {:else if section === 'legal'}
    <Legal/>
  {/if}
</Modal>


<style>
</style>
