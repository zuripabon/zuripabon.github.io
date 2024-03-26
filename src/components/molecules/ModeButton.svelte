<script>
  import SunIcon from '../icons/Sun.svelte'
  import MoonIcon from '../icons/Moon.svelte'
  export let onClick = () => null
  export let mode = "light"
</script>

<div class="{$$restProps.class || ''}">
  <button type="button" class="btn" class:light-mode={mode==='light'} class:dark-mode={mode==='dark'} on:click={onClick}>
    {#if mode === 'light'}
    <MoonIcon/>
    {:else }
    <SunIcon/>
    {/if }
  </button>
</div>

<style>
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
  
  </style>