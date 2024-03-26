<script>
  import { onMount } from 'svelte';
  import { translate } from '../../lib/copies';
  export let section = ''
  export let isOpen = false
  export let onClick = () => null

  let messageElement;

  const handleOnClick = () => {
    onClick()
  }

  onMount(() => {
    document.addEventListener('mousemove', (e) => {
      if(!messageElement || !isOpen){
        return;
      }
      messageElement.style.left = (e.clientX) + 'px';
      messageElement.style.top = (e.clientY) + 'px';
    });
	});
</script>

<button type="button" tabindex="-1" class="message" bind:this={messageElement} class:hidden={!isOpen} on:click={handleOnClick}>
  <span class="message-card">{translate(`cta.${section}`)}</span>
</button>
    
<style>

  .message {
    position: absolute;
    left: 50%;
    top: 50%;
    display: flex;
    z-index: 50;
    place-content: center;
    place-items: center;
    max-width: 250px;
    transition: all;
    transition-duration: 200ms;
    border: none;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
  }

  .hidden {
    display: none;
  }

  .message-card {
    font-size: 18px;
    font-weight: bold;
    color: #2e2e2e;
    background-color: #bbb8b8;
    padding: 20px;
    border-radius: 10px;
    border-bottom: 5px solid #e16d81;
    text-align: center;
    text-wrap: nowrap;
    /* text-transform: uppercase; */
    letter-spacing: -0.05rem;
  }

</style>
