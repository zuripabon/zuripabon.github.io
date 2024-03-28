<script>
  import Typography from '../atoms/Typography.svelte';
  import Translate from '../atoms/Translate.svelte';
  import ExperimentCard from '../molecules/ExperimentCard.svelte';
  import CareerSteps from '../molecules/CareerSteps.svelte';
</script>


<div class="container">
  
  <header class="header">
    <Typography variant="heading" uppercase>
      <Translate key="title.jobs"/>
    </Typography>

    <div class="career-container">
      <CareerSteps/>
    </div>
      
  </header>

  <ExperimentCard 
    name="vtt"
    demoUrl="https://github.com/tsur/vtt-to-srt"
    repoUrl="https://github.com/tsur/vtt-to-srt" 
    posterUrl="/vtt.webp"
  />
  <ExperimentCard 
    name="tabita" 
    demoUrl="https://github.com/tsur/tabita"
    repoUrl="https://github.com/tsur/tabita"
    posterUrl="/tabita.webp"
  />

</div>

<style>
  .header {
    display: flex;
    flex-direction: column;
    row-gap: 3rem;
  }

  .career-container {

  }

  .container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 3rem;
  }
</style>
