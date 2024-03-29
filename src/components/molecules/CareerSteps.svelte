<script>
  import Typography from "../atoms/Typography.svelte";
  import { mode } from '../../lib/store'
  import getCompanies from '../../lib/companies'

  const BASE_WIDTH = 5;
  
  const companies = getCompanies(BASE_WIDTH)

</script>
  
<section class="companies">
  {#each companies as company }
    <div 
      class="company-item" 
      class:dark={$mode === 'dark'} 
      style:width={`${BASE_WIDTH + company.timeLapsePercentage}%`}>
      <a class="company-link" href={company.url} title={company.dates}>
        <p class="company-title"><Typography variant="label">{company.title}</Typography></p>
        <p class="company-start"><Typography variant="label">{company.startAt}</Typography></p>
      </a>
    </div>
  {/each}
  
</section>

<style>

  .companies {
    display: flex;
  }
  .company-item {
    position: relative;
    margin: 0;
    padding: 0;
    cursor: pointer;
    /* color: rgb(163, 163, 163); */
    text-align: right;
  }

  .company-item:hover {
    color: black;
  }
  
  .company-item.dark:hover {
    color:white;
  }

  .company-start {
    padding-top: 5px;
    transition: all;
    transition-duration: 300ms;
  }

  .company-title {
    padding-bottom: 5px;
    border-bottom: 3px solid currentColor;
    transition: all;
    transition-duration: 300ms;
  }

  .company-link {
    text-decoration: none;  
    display: block;
    text-transform: uppercase;
    color: currentColor;
  }
  
  /* .company-item:first-child, .company-item:first-child:hover {
    color: rgb(163, 163, 163);
  }
   */

</style>