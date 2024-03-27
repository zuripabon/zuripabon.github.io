<script>

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
    {title: 'Cober', active: true, dates: '10/2023 - ?', startAt: 'Oct 2023', months: 0},
    {title: 'Spotahome', active: false, dates: '04/2019 - 11/2023', startAt: 'Apr 2019', months: 55 },
    {title: 'Valo', active: false, dates: '03/2015 - 02/2019', startAt: 'May 2015', months: 47 },
    {title: 'GSR', active: false, dates: '09/2014 - 03/2015', startAt: 'Sep 2014', months: 7 },
    {title: 'Ebury', active: false, dates: '11/2013 - 09/2014', startAt: 'Nov 2013',  months: 10 }
  ]
  
  const totalMonths = calculateMonthsDifference()
  const totalCompanyMonths = companies.filter(c => !c.active).reduce((a, c) => a + c.months, 0)
  console.log(totalMonths)
  companies[0].months = totalMonths - totalCompanyMonths 
  companies = companies.map(c => ({...c, timelapse: (c.months/totalMonths)*100}))

  console.log(companies.reduce((a, c) => a + c.timelapse, 0))
  console.log({companies})
</script>
  
<section class="companies">
  {#each companies as company }
    <div 
      class="company-item"
      class:active={company.active === true} 
      class:inactive={company.active === false} 
      data-text={company.startAt}
      style:width={`${company.timelapse}%`}>
      <a class="company-link" href="#" title={company.dates}>{company.title}</a>
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
  }

  .company-link {
    color: rgb(163, 163, 163);
    text-decoration: none;  
    text-align: right;
    display: block;
    text-transform: uppercase;
  }

  .company-item:first-child .company-link {
    color: white;
  }

  .company-item:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    top: 25px;
    background-color: rgb(163, 163, 163);
  }

  /* .company-item:first-child:after {
    content: none;
  } */

  .inactive {
    color: rgb(163, 163, 163);
  }
  
  .active {
    color: rgb(163, 163, 163);
  }

  .company-link:hover {
    color:white;
  }
  
  .company-item:hover::after {
    background:white;
  }

</style>