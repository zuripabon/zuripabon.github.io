<script>
  export let variant = 'paragraph';
  export let uppercase = false;
</script>

{#if variant === 'heading'}
<h1 class="heading-text" class:uppercase={uppercase} ><slot/></h1>
{/if}

{#if variant === 'subheading'}
<h1 class="subheading-text" class:uppercase={uppercase} ><slot/></h1>
{/if}

{#if variant === 'paragraph'}
<p class="paragraph-text" class:uppercase={uppercase} ><slot/></p>
{/if}

{#if variant === 'body'}
<p class="body-text" class:uppercase={uppercase} ><slot/></p>
{/if}

<style>
  .uppercase {
    text-transform: uppercase;
  }

	.heading-text {
    line-height: 1.1;
    font-size: 6rem;
    font-weight: 600;
    letter-spacing: -0.15rem;
    text-wrap: nowrap;
    margin: 0;
    padding: 0;
    color: currentColor;
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

  .paragraph-text {
    line-height: 1.3;
    font-size: 2.4rem;
    font-weight: 400;
    letter-spacing: 0;
    margin: 0;
    padding: 0;
    color: currentColor;
	}

  .body-text {
    font-family: 'Work Sans', ui-sans-serif, system-ui, sans-serif;
    line-height: 1.3;
    font-size: 1.8rem;
    font-weight: 400;
    letter-spacing: -0.01rem;
    margin: 0;
    padding: 0;
    color: currentColor;
  }

</style>
