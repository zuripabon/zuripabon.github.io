<script>
  import Typography from './Typography.svelte';
  import { translate } from '../lib/copies'
  
  export let mode = 'light'
</script>

<Typography variant="heading" mode={mode} uppercase>{translate(`title.tent`)}</Typography>
<Typography mode={mode}>{translate(`intro.tent`)}</Typography>
<Typography mode={mode}>{translate(`intro.results.tent`)}</Typography>
<Typography mode={mode}>{translate(`intership.tent`)}</Typography>
<Typography mode={mode}>{translate(`intership.tools.tent`)}</Typography>
<Typography mode={mode}>{translate(`intership.projects.tent`)}</Typography>

<style>
</style>
