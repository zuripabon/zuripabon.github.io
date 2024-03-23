<script>
	import Button from "./Button.svelte"
  import { loader } from "../lib/loader"
</script>

<div>
  <Button --width={100 - $loader}% loading={$loader < 100}/>
</div>

<style>
  :root {
    --width: 0;
  }
</style>