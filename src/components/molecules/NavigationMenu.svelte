<script>
  import Typography from '../atoms/Typography.svelte';
  import BarsIcon from '../icons/Bars.svelte'
  import CloseButton from './CloseButton.svelte';
  import * as routes from '../../lib/routes'

  export let isMobile = false;
  export let onClick = () => null

  let isMenuOpen = false;

  const handleToggleMode = () => {
    isMenuOpen = !isMenuOpen
    const header = document.querySelector('.heading-mobile');
    if(header){
      header.style.textAlign= isMenuOpen ? 'end' : 'left';
    }
  }

  const handleOnClick = (id) => (event) => {
    event.preventDefault();
    routes.goTo(id);
    onClick();
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
        <a class="link" href={routes.EDUCATION} on:click={handleOnClick(routes.EDUCATION)}>
          <Typography variant="subheading-xs" uppercase>Education</Typography>
        </a>
      </li>
      <li class="item">
        <a class="link" href={routes.CAREER} on:click={handleOnClick(routes.CAREER)}>
          <Typography variant="subheading-xs" uppercase>Career</Typography>
        </a>
      </li>
      <li class="item">
        <a class="link" href={routes.PROJECTS} on:click={handleOnClick(routes.PROJECTS)}>
          <Typography variant="subheading-xs" uppercase>Experiments</Typography>
        </a>
      </li>
      <li class="item">
        <a class="link" href={routes.ABOUT} on:click={handleOnClick(routes.ABOUT)}>
          <Typography variant="subheading-xs" uppercase>About</Typography>
        </a>
      </li>
      {#if !isMobile }
      <li class="item">
        <a class="link" href={routes.CONTACT} on:click={handleOnClick(routes.CONTACT)}>
          <Typography variant="subheading-xs" uppercase>Contact</Typography>
        </a>
      </li>
      {/if}
      <li class="item">
        <a class="link" href={routes.LEGAL} on:click={handleOnClick(routes.LEGAL)}>
          <Typography variant="subheading-xs" uppercase>Legal</Typography>
        </a>
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
    min-width: 100%;
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
    /* gap: 1.35rem; */
    position: relative;
    left: -900px;
    transition: all;
    transition-duration: 300ms;
    margin-left: 6px;
    width: 100%;
  }

  .visible {
    left: 0;
  }

  .item {
    transition: all;
    transition-duration: 300ms;
    color: rgba(255, 255, 255, 0.8);
    user-select: none;
  }

  .item:hover {
    color: rgba(255, 255, 255, 1);
    transform: scale(1.01);
  }

  .link {
    text-decoration: none;
    margin: 0;
    padding: 0.9rem 0;
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
    width: 100%;
    text-align: left;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE 10+ */
    user-select: none; /* Standard syntax */
  }

  @media only screen and (min-width: 905px) {
    .navbar {  
      place-content: center;
      place-items: center;
      flex-direction: row;
      gap: 0;
      margin: 30px 60px;
      min-width: auto;
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

    .item:hover {
      transform: scale(1.03);
    }
        
  }


</style>
