<script>
  import ArrowRight from '../icons/ArrowRight.svelte';
import Typography from './Typography.svelte';
  export let loading = true
  export let onClick;

  const handleOnClick = () => {
    if(loading){
      return;
    }
    onClick()
  }
</script>

<div class="cta-container">
  <div class="cta-border" class:loading-border={loading}>
    <button type="button" disabled={loading} on:click={handleOnClick} class="cta" class:loading={loading} class:disabled={loading} >
      <Typography variant="gradient" strong>Let's build </Typography> 
      <span class="icon"><ArrowRight/></span>
    </button>
  </div> awesome experiences together.
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

  .disabled {
    user-select: none;
    /* cursor: progress; */
    cursor: wait;
  }

  .loading::before {
    background-image: -webkit-linear-gradient(45deg,rgba(0,0,0,.35) 25%,transparent 25%,transparent 50%,rgba(0,0,0,.35) 50%,rgba(0,0,0,.35) 75%,transparent 75%,transparent);
    background-size: 40px 40px;
    animation: progress-bar-stripes 2s linear infinite;
    border-radius: 20px;
  }

	.cta::before {
		content: "";
		position: absolute;
    left: 0px;
    inset-block: -0.3rem;
		transition: all;
		transition-duration: 600ms;
    z-index: 1;
    background-color: hsla(283, 82%, 78%, var(--width));
    width: 100%;
    border-radius: 20px;
    
	}


  @media only screen and (min-width: 685px) {
    
    .cta {
      font-size: 2rem;
      width: 185px;
    }

    .cta:not(.loading):hover {
      width: 220px;
    }

    .icon {
      display: block;
    }

    .cta-container {
      flex-direction: row;
      font-size: 2rem;
    }
  }

  @media only screen and (min-width: 905px) {
    .cta {
      font-size: 2.4rem;
      width: 215px;
    }

    .cta:not(.loading):hover {
      width: 260px;
    }

    .cta-container {
      flex-direction: row;
      font-size: 2.4rem;
    }

    .icon {
      top: 1rem;
    }
  }

</style>


