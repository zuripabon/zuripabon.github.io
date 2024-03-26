<script>
	import Button from "../atoms/Button.svelte"
  import { loader } from "../../lib/store"
  import { startGame } from '../../lib/3d'
</script>

<div>
  <Button --width={100 - $loader}% loading={$loader < 100} onClick={startGame}/>
</div>

<style>
  :root {
    --width: 0;
  }
</style>