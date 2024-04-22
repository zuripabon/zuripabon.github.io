<script>
  import Typography from '../atoms/Typography.svelte';
  import BarsIcon from '../icons/Bars.svelte'
  import CloseButton from './CloseButton.svelte';
  import { getSectionFromPath } from '../../lib/routes'

  export let onClick = () => null
  export let isMobile = false;

  let isMenuOpen = false;

  const handleToggleMode = () => {
    isMenuOpen = !isMenuOpen
    const header = document.querySelector('.heading-mobile');
    if(header){
      header.style.textAlign= isMenuOpen ? 'end' : 'left';
    }
  }

  const handleOnClick = (id) => () => {
    const section = getSectionFromPath(id);
    if(section){
      onClick(section)
      setTimeout(()=>window.history.pushState({}, '', id), 3000)
      
    }
  }
</script>

<nav class="navbar" class:visible={isMobile === true} >
  <div>
    {#if isMenuOpen}
      <CloseButton onClick={handleToggleMode} />
    {:else }
      <button type="button" class="btn" on:click={handleToggleMode}>
        <BarsIcon/>
      </button>
    {/if }
  </div>

  <div class="menu">
    <ul class="list" class:visible={isMenuOpen}>
      <li class="item">
        <button class="link" on:click={handleOnClick("/education")}>
          <Typography variant="subheading-xs" uppercase>Education</Typography>
        </button>
      </li>
      <li class="item">
        <button class="link" on:click={handleOnClick("/career")}>
          <Typography variant="subheading-xs" uppercase>Career</Typography>
        </button>
      </li>
      <li class="item">
        <button class="link" on:click={handleOnClick("/projects")}>
          <Typography variant="subheading-xs" uppercase>Experiments</Typography>
        </button>
      </li>
      <li class="item">
        <button class="link" on:click={handleOnClick("/about")}>
          <Typography variant="subheading-xs" uppercase>About</Typography>
        </button>
      </li>
      {#if !isMobile }
      <li class="item">
        <button class="link" on:click={handleOnClick("/contact")}>
          <Typography variant="subheading-xs" uppercase>Contact</Typography>
        </button>
      </li>
      {/if}
      <li class="item">
        <button class="link" on:click={handleOnClick("/legal")}>
          <Typography variant="subheading-xs" uppercase>Legal</Typography>
        </button>
      </li>
    </ul>
  </div>
</nav>
    
<style>

  .navbar {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 40;
    flex-direction: column;
    transition: all;
    transition-duration: 200ms;
    border: none;
    outline: none;
    margin: 20px 20px;
    display: none;
    overflow: hidden;
    gap: 1rem;
  }

  .visible {
    display: flex;
    position: fixed;
  }

  .btn {
    margin: 0;
    padding: 0;
    text-transform: none;
    appearance: button;
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none;
    position: relative;
    height: 45px;
    width: 45px;
    cursor: pointer;
    border-radius: 50%;
    border-color: rgba(255,255,255,.8);
    color: currentColor;
    border: none;
    outline: none;
  }

  .menu {
    display: flex;
    position: relative;
    overflow: hidden;
  }

  .list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.35rem;
    position: relative;
    left: -900px;
    transition: all;
    transition-duration: 300ms;
    margin-left: 6px;
  }

  .visible {
    left: 0;
  }

  .item {
    transition: all;
    transition-duration: 300ms;
    color: rgba(255, 255, 255, 0.8);
  }

  .item:hover {
    color: rgba(255, 255, 255, 1);
    transform: scale(1.03);
  }

  .link {
    text-decoration: none;
    margin: 0;
    padding: 0;
    text-transform: none;
    appearance: button;
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none;
    position: relative;
    cursor: pointer;
    color: currentColor;
    border: none;
    outline: none;
  }

  @media only screen and (min-width: 905px) {
    .navbar {  
      place-content: center;
      place-items: center;
      flex-direction: row;
      gap: 0;
      margin: 30px 60px;
    }

    .list {
      place-items: center;
      flex-direction: row;
      margin-left: 0px;
      gap: 1.5rem;
    }

    .menu {
      padding-left: 1.5rem;
    }
        
  }


</style>
