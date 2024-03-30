<script>
  import Typography from '../atoms/Typography.svelte';
  import Translate from '../atoms/Translate.svelte';
  import ShopCard from '../molecules/ShopCard.svelte';
</script>


<div class="container">
  
  <header class="header">
    <Typography variant="heading" uppercase>
      <Translate key="title.shop"/>
    </Typography>

    <Typography variant="body">
      <Translate key="desc.shop"/>
    </Typography>
  </header>

  <div class="plans">
    <ShopCard 
      title="One-shot Session" 
      subtitle="Best option for personal portfolio or single-product selling landing page" 
      hint="Includes 1hr private meeting to help you land your project and landing page ready to ship"
      offer="480€"
      price="399€"
      features={[
        // {name: 'Kick off your business idea'},
        {name: 'Starting Design System Kit'}, 
        {name: 'Initial Project Prototype'}, 
        {name: 'Production Ready Landing Page'},
        {name: 'Lifetime access to boilerplate'},
        {name: 'Full Support & Guidance'},
      ]}
    />
    <ShopCard 
      isPopular
      title="3 weeks fulltime" 
      subtitle="Get your custom product idea MVP production ready in 3 weeks" 
      price="1,399€/week"
      features={[
        {name: 'Full-time dedication'},
        {name: 'Domain Driven Design & Hexagonal Architecture'}, 
        {name: 'Auth & Magic Links'}, 
        {name: 'Postgres/Mongo Database'}, 
        {name: 'Stripe Payments'}, 
        {name: 'SEO & Blog'}, 
        {name: 'AWS Cloud Deployment'}, 
        {name: 'Full Support & Guidance'},
      ]}
      hint="MVP including only core product features. Price charged weekly. Cancel anytime."
      />
  </div>
</div>

<style>
  .header {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 4rem;
  }
  
  .plans {
    display: flex;
    gap: 1rem;
  }

</style>
