<script>
	import Button from "./Button.svelte"
  let progress = 100;
  let clear
  const ms = 200;
  const incr = () => {
    progress -= 5
    if(progress <= 0){
      progress = 0;
      clearInterval(clear)
      return;
    }
  }

  $: {
    clearInterval(clear)
    clear = setInterval(incr, ms)
  }

</script>

<div>
  <Button --width={progress}% loading={progress > 0}/>
</div>

<style>
  :root {
    --width: 0;
  }
</style>