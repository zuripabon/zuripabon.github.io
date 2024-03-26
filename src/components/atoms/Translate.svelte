<script>
  import { translate } from '../../lib/copies'

  export let key 
  export let locale = 'en';

  // function splitWithTags(input) {
  //   const regex = /(<[^>]+>)/g;
  //   return input.split(regex).filter(Boolean);
  // }

  // const htmlToRender = splitWithTags(translate(key, locale));

</script>
<!-- {#each htmlToRender as html}
  {#if html.startsWith('<')}
    <slot/>
  {:else}
    {html}
  {/if}
{/each} -->

{@html translate(key, locale)}

<style></style>


