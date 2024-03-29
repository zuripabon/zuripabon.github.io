<script>
  import Typography from "./Typography.svelte";
  export let variant = 'mid';
</script>

<div
  class="tag"
  class:high={variant === 'high'} 
  class:mid={variant === 'mid'}
  class:low={variant === 'low'}
  >
  <Typography variant="label" uppercase><slot/></Typography>
</div>

<style>
  
  .tag {
    display: inline-block;
    text-align: center;
    padding: 0.3rem;
    background-color: transparent;
    border-radius: 10px;
  }

  .high {
    background: rgba(11, 255, 158, 0.25);
  }
  
  .mid {
    background: rgba(255, 190, 11, 0.15);
  }  
  
  .low {
    background: rgba(255, 11, 100, 0.15);
  }

</style>
