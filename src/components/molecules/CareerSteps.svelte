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
    {title: 'Spotahome', active: false, dates: '03/2019 - 11/2023', startAt: 'Apr 2019', months: 57 },
    {title: 'Valo', active: false, dates: '03/2015 - 02/2019', startAt: 'May 2015', months: 47 },
    {title: 'GSR', active: false, dates: '09/2014 - 03/2015', startAt: 'Sep 2014', months: 9 },
    {title: 'Ebury', active: false, dates: '11/2013 - 09/2014', startAt: 'Nov 2013', months: 11 }
  ]
  
  const totalMonths = calculateMonthsDifference()
  // const totalCompanyMonths = companies.filter(c => !c.active).reduce((a, c) => a + c.months, 0)
  // companies[0].months = totalMonths - totalCompanyMonths 
  companies = companies.map(c => ({...c, timelapse: (c.months/totalMonths)*100}))

  console.log({companies})
</script>
  
<ul>
  {#each companies as company }
    <li 
      class="company-item"
      class:active={company.active === true} 
      class:inactive={company.active === false} 
      data-text={company.startAt}
      style:width={`${company.timelapse}%`}>
      <a class="company-link" href="#" title={company.dates}>{company.title}</a>
    </li>
  {/each}
  
</ul>

<style>

  .company-item {
    list-style: none;
    display: inline-block;
    position: relative;
    text-align: center;
    cursor: pointer;
  }

  .company-link {
    color: rgb(163, 163, 163);
    text-decoration: none;  
    text-align: center;
    display: block;
    position: relative;
    left: -25px;
    text-transform: uppercase;
  }

  .company-item:first-child .company-link {
    color: white;
    left: 0;
  }

  .company-item:before {
    content: attr(data-text);
    font-size: 0.8rem;
    width: 50px;
    height: 50px;
    line-height : 50px;
    border-radius: 100%;
    display: block;
    text-align: center;
    margin: 0 0 10px auto;
    border: 1px solid rgb(163, 163, 163);
    background-color: rgb(163, 163, 163);
    color: black;
    font-weight: bold;
  }

  .company-item:first-child:before {
    border: 1px solid white;
    background-color: white;
  }

  .company-item:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    top: 25px;
    left: 0px;
    z-index: -1;
    background-color: rgb(163, 163, 163);
  }

  .company-item:first-child:after {
    content: none;
  }

  .inactive {
    color: rgb(163, 163, 163);
  }
  
  .active {
    color: rgb(163, 163, 163);
  }

  .company-link:hover {
    font-weight: bold;
  }

</style>