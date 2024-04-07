<script>
  export let variant = 'paragraph';
  export let uppercase = false;
  export let strong = false;
  export let strike = false;
  export let big = false;
</script>

{#if variant === 'heading'}
<h1 class="heading-text" class:uppercase={uppercase} class:heading-text-big={big}><slot/></h1>
{/if}

{#if variant === 'heading-small'}
<h1 class="heading-text heading-small-text" class:uppercase={uppercase} class:heading-text-big={big}><slot/></h1>
{/if}

{#if variant === 'subheading'}
<h1 class="subheading-text" class:uppercase={uppercase} class:strong={strong}><slot/></h1>
{/if}

{#if variant === 'subheading-s'}
<h1 class="subheading-text subheading-s-text" class:uppercase={uppercase} class:strong={strong}><slot/></h1>
{/if}

{#if variant === 'subheading-xs'}
<h1 class="subheading-text subheading-xs-text" class:uppercase={uppercase} class:strong={strong}><slot/></h1>
{/if}

{#if variant === 'paragraph'}
<p class="paragraph-text" class:uppercase={uppercase} class:strong={strong}><slot/></p>
{/if}

{#if variant === 'paragraph-lg'}
<p class="paragraph-text paragraph-lg" class:uppercase={uppercase} class:strong={strong}><slot/></p>
{/if}

{#if variant === 'body'}
<p class="body-text" class:uppercase={uppercase} class:strong={strong} class:strike={strike}><slot/></p>
{/if}

{#if variant === 'body-small'}
<p class="body-text body-small-text" class:uppercase={uppercase} class:strong={strong}><slot/></p>
{/if}

{#if variant === 'body-big'}
<p class="body-text body-big-text" class:uppercase={uppercase} ><slot/></p>
{/if}

{#if variant === 'label'}
<span class="label-text" class:uppercase={uppercase} class:strong={strong} class:strike={strike}><slot/></span>
{/if}

{#if variant === 'label-small'}
<span class="label-text label-small-text" class:uppercase={uppercase} class:strong={strong} class:strike={strike}><slot/></span>
{/if}

{#if variant === 'gradient'}
<span class="text-gradient" class:uppercase={uppercase} class:strong={strong} ><slot/></span>
{/if}

<style>

  .text-gradient {
		background-image: var(--accent-gradient);
    background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: 400%;
		background-position: 0%;
    font-size: inherit;
	}

	.heading-text {
    line-height: 1.1;
    font-size: 5rem;
    font-weight: 600;
    letter-spacing: -0.15rem;
    text-wrap: nowrap;
    margin: 0;
    padding: 0;
    color: currentColor;
	}

  .heading-small-text {
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: -0.05rem;
  }

  .heading-text-big {
    font-size: 6rem;
  }

  .subheading-text {
    line-height: 1.1;
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: -0.05rem;
    text-wrap: nowrap;
    margin: 0;
    padding: 0;
    color: currentColor;
	}

  .subheading-s-text {
    line-height: 1;
    font-size: 2.2rem;
	}

  .subheading-xs-text {
    line-height: 1;
    font-size: 1.5rem;
	}


  .paragraph-text {
    line-height: 1.3;
    font-size: 1.8rem;
    font-weight: 400;
    letter-spacing: 0;
    margin: 0;
    padding: 0;
    color: currentColor;
	}

  .paragraph-lg {
    font-size: 2.4rem;
  }

  .body-text {
    font-family: 'Work Sans', ui-sans-serif, system-ui, sans-serif;
    line-height: 1.3;
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: -0.05rem;
    margin: 0;
    padding: 0;
    color: currentColor;
  }

  .body-small-text {
    font-size: 1.3rem;
  }

  .body-big-text {
    font-size: 1.8rem;
  }
  
  .label-text {
    font-family: 'Work Sans', ui-sans-serif, system-ui, sans-serif;
    line-height: 1.3;
    font-size: 1.3rem;
    font-weight: 300;
    letter-spacing: -0.01rem;
    margin: 0;
    padding: 0;
    color: currentColor;
  }  

  .label-small-text {
    font-size: 1rem;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .strong {
    font-weight: bold;
  }  
  
  .strike {
    text-decoration: line-through;
  }
  

</style>
