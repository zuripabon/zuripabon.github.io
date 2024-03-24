<script>

  export let variant = 'paragraph';
  export let uppercase = false;
  export let mode = 'light';
</script>

{#if variant === 'heading'}
<h1 class="heading-text" class:uppercase={uppercase} class:light-mode={mode === 'light'} class:dark-mode={mode === 'dark'} ><slot/></h1>
{/if}

{#if variant === 'paragraph'}
<p class="paragraph-text" class:uppercase={uppercase} class:light-mode={mode === 'light'} class:dark-mode={mode === 'dark'} ><slot/></p>
{/if}

<style>
  .uppercase {
    text-transform: uppercase;
  }

	.heading-text {
		font-family: Inter, system-ui;
    line-height: 1.1;
    font-size: 6rem;
    font-weight: 600;
    letter-spacing: -0.15rem;
    text-wrap: nowrap;
    margin: 0;
    padding: 0;
	}

  .paragraph-text {
		font-family: Inter, system-ui;
    line-height: 1.3;
    font-size: 2.4rem;
    font-weight: 400;
    letter-spacing: 0;
    margin: 0;
    padding: 0;
    max-width: 875px;
	}


  .light-mode {
    color: rgba(255, 255, 255, 0.8);
  }

  .dark-mode {
    color: rgba(255, 255, 255, 0.8);
  }
</style>
