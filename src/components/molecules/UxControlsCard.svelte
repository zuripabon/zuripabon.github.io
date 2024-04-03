<script>
  import { onMount } from 'svelte';
  import { translate } from '../../lib/copies';
  import Typography from '../atoms/Typography.svelte';
  import MouseIcon from '../icons/Mouse.svelte';

  export let isOpen = true

</script>

<card class="controls-card" class:hidden={!isOpen}>
  <div class="container">
    <MouseIcon/> <Typography variant="subheading-xs">{translate(`game.controls`)}</Typography>
  </div>
</card>
    
<style>

  .controls-card {
    position: absolute;
    left: 50%;
    top: 20%;
    display: none;
    z-index: 50;
    transform: translateX(-50%);
    place-content: center;
    place-items: center;
    transition: all;
    transition-duration: 200ms;
    border: none;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.5);
    outline: none;
    

    & svg {
      width: 30px;
    }
  }

  .container {
    display: flex;
    align-items: center;
    padding: 1.5rem;
    gap: 1rem;
  }

  .hidden {
    display: none !important;
  }

</style>
