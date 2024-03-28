<script>
  import Typography from "../atoms/Typography.svelte";
  import { mode } from '../../lib/store'

  function calculateMonthsDifference() {
    const startDate = new Date('2013-11-01');
    const providedUTCDate = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const currentDate = new Date()
    const currentUTCDate = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const differenceInMs = currentUTCDate - providedUTCDate;
    const monthsDifference = Math.floor(differenceInMs / (1000 * 60 * 60 * 24 * 30));
    return monthsDifference;
  }

  
  
  let companies = [
    {title: 'Cober', active: true, dates: 'From Oct 2023', url: '', startAt: '2023', months: 0},
    {title: 'Spotahome', active: false, dates: 'Apr 2019 to Nov 2023', url: '', startAt: '2019', months: 55 },
    {title: 'Valo', active: false, dates: 'Mar 2015 to Feb 2019', url: '', startAt: '2015', months: 47 },
    {title: 'GSR', active: false, dates: 'Sep 2014 to Mar 2015', url: '', startAt: '2014', months: 7 },
    {title: 'Ebury', active: false, dates: 'Nov 2013 to Sep 2014', url: '', startAt: '2013',  months: 10 }
  ]

  const baseWidth = 5
  
  const totalMonths = calculateMonthsDifference()
  const totalCompanyMonths = companies.filter(c => !c.active).reduce((a, c) => a + c.months, 0)
  console.log(totalMonths)
  companies[0].months = totalMonths - totalCompanyMonths 
  companies = companies.map(c => ({...c, timelapse: (c.months/totalMonths)*(100 - baseWidth * companies.length)}))

  console.log(mode, 11123)
</script>
  
<section class="companies">
  {#each companies as company }
    <div 
      class="company-item"
      class:active={company.active === true} 
      class:dark={$mode === 'dark'} 
      style:width={`${baseWidth + company.timelapse}%`}>
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
  
  /* .active, .active:hover {
    color: rgb(163, 163, 163);
  }
   */

</style>