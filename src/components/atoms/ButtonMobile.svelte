<script>
  import ArrowRight from '../icons/ArrowRight.svelte';
  import Typography from './Typography.svelte';
  import * as routes from '../../lib/routes';

  const handleOnClick = () => {
    routes.goTo(routes.CONTACT);
  }

</script>

<div class="cta-container">
  <div class="cta-border">
    <button type="button" on:click={handleOnClick} class="cta" >
      <Typography variant="gradient" strong>Let's build </Typography> 
      <span class="icon"><ArrowRight/></span>
    </button>
  </div>
</div>

<style>
	
  @keyframes progress-bar-stripes {
    0% {
      background-position: 40px 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  .cta-container {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    align-items: center;
    text-align: center;
    font-size: 1.7rem;
  }

  .cta-border {
    display: flex;
    border-radius: 20px;
    padding: 1px;
  }

  .cta-border:not(.loading-border) {
    opacity: 0.9;
    justify-content: center;
    align-items: center;
    position: relative;
    background-image: var(--accent-gradient);
  }

	.cta {
    background: transparent;
    border: none;
    position: relative;
    display: flex;
    align-items: center;
    outline: none;
    z-index: 0;
    font-size: 1.7rem;
    cursor: pointer;
    padding: 0.7rem;
    gap: 0.5rem;
    width: auto;
    overflow: hidden;
    transition: all;
    transition-duration: 500ms;
	}

  .cta:not(.loading):hover {
    & > .icon {
      opacity: 1;
    }
  }

  .cta:not(.loading){
    background: rgba(18,18,18, 0.95);
    /* border: 1px solid rgb(18,18,18); */
    border-radius: 20px;
  }

  .icon {
    display: none;
    position: absolute;
    right: 0.5rem;
    top: 0.7rem;
    opacity: 0;
    transition: all;
    transition-duration: 200ms;
    & svg {
      width: 40px;
      color: white;
    }
  }

</style>


