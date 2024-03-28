<script>
  import SunIcon from '../icons/Sun.svelte'
  import MoonIcon from '../icons/Moon.svelte'
  import { mode } from '../../lib/store'

  $: themeMode = $mode;

  const handleToggleMode = () => {
    if(themeMode === 'light'){
      mode.set('dark')
      return
    }

    if(themeMode === 'dark'){
      mode.set('light')
      return
    }
  }

</script>

<div class="{$$restProps.class || ''}">
  <button type="button" class="btn" class:light-mode={themeMode==='light'} class:dark-mode={themeMode==='dark'} on:click={handleToggleMode}>
    {#if themeMode === 'light'}
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