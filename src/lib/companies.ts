
const START_WORKING_DATE = new Date('2013-11-01')

const CURRENT_COMPANY = {
    title: 'Cober', 
    dates: 'From Oct 2023', 
    url: '#cober', 
    startAt: '2023'
}

const COMPANIES = [
    {
        title: 'Spotahome', 
        dates: 'Apr 2019 to Nov 2023', 
        url: '#spotahome', 
        startAt: '2019', 
        months: 55 
    },
    {
        title: 'Valo', 
        dates: 'Mar 2015 to Feb 2019', 
        url: '#valo', 
        startAt: '2015', 
        months: 47 
    },
    {
        title: 'GSR', 
        dates: 'Sep 2014 to Mar 2015', 
        url: '#gsr', 
        startAt: '2014', 
        months: 7 
    },
    {
        title: 'Ebury', 
        dates: 'Nov 2013 to Sep 2014', 
        url: '#ebury', 
        startAt: '2013',  
        months: 10 
    }
];

function calculateMonthsDifference() {
    const startDate = START_WORKING_DATE;
    const providedUTCDate = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const currentDate = new Date()
    const currentUTCDate = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const differenceInMs = currentUTCDate - providedUTCDate;
    const monthsDifference = Math.floor(differenceInMs / (1000 * 60 * 60 * 24 * 30));
    return monthsDifference;
}

const totalMonths = calculateMonthsDifference()
const totalCompanyMonths = COMPANIES.reduce((a, c) => a + c.months, 0)

export default (baseWidth=0) => {
    
    const companies = [{...CURRENT_COMPANY, months: totalMonths - totalCompanyMonths},...COMPANIES];
    
    return companies.map(c => ({
        ...c, 
        timeLapsePercentage: (c.months/totalMonths) * (100 - baseWidth * companies.length)
    })
)}

  

