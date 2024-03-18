<script>
  export let loading = true
</script>

<p class="cta-container"><button type="button" class="cta text-gradient" class:loading={loading} class:disabled={loading}>Let's build</button> awesome experiences together.</p>

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
    row-gap: 10px;
    align-items: center;
    text-align: center;
    font-size: 1.7rem;
  }

	.cta {
    border: none;
    position: relative;
    display: inline;
    outline: none;
    z-index: 0;
    font-weight: bold;
    font-size: 1.7rem;
    cursor: pointer;
    margin-right: 5px;
    padding: 0 0.5rem;
	}

  .disabled {
    user-select: none;
    cursor: progress;
  }

  .cta.loading::before {
    background-image: -webkit-linear-gradient(45deg,rgba(0,0,0,.35) 25%,transparent 25%,transparent 50%,rgba(0,0,0,.35) 50%,rgba(0,0,0,.35) 75%,transparent 75%,transparent);
    background-size: 40px 40px;
    animation: progress-bar-stripes 2s linear infinite;
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

  /* .cta:hover::before {
    background-color: hsla(283, 82%, 78%, 76%);
	} */

  @media only screen and (min-width: 685px) {
    
    .cta {
      font-size: 2rem;
    }

    .cta-container {
      flex-direction: row;
      font-size: 2rem;
    }
  }

  @media only screen and (min-width: 905px) {
    .cta {
      font-size: 2.4rem;
    }

    .cta-container {
      flex-direction: row;
      font-size: 2.4rem;
    }
  }

</style>


