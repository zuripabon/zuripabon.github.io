<script>
  export let uppercase = false;
  export let strong = false;
</script>

<span class="text-gradient" class:uppercase={uppercase} class:strong={strong}><slot/></span>

<style>
  .uppercase {
    text-transform: uppercase;
  }

  .strong {
    font-weight: bold;
  }

  .text-gradient {
		background-image: var(--accent-gradient);
    background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: 400%;
		background-position: 0%;
	}
</style>
