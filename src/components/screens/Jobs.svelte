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
<!--     
    <Typography variant="body">
      <Translate key="intro.experiments"/>
    </Typography> -->

    <CareerSteps/>
      
  </header>

  <ExperimentCard 
    name="octoql" 
    demoUrl="https://tsur.github.io/octoql/" 
    repoUrl="https://github.com/tsur/octoql" 
    posterUrl="/octoql.webp"
  />
  <ExperimentCard 
    name="shipped"
    demoUrl="https://tsur.github.io/shipped/"
    repoUrl="https://github.com/tsur/shipped" 
    posterUrl="/shipped.webp" 
  />
  <ExperimentCard 
    name="webvtt" 
    demoUrl="https://tsur.github.io/webvtt/"
    epoUrl="https://github.com/tsur/webvtt" 
    posterUrl="/webvtt.webp" 
    />
  <ExperimentCard 
    name="gameoflife"
    demoUrl="https://tsur.github.io/gamelife/"
    repoUrl="https://github.com/tsur/gamelife" 
    posterUrl="/gameoflife.webp"
  />
  <ExperimentCard 
    name="bigmouse"
    demoUrl="https://big-mouse.github.io/examples/"
    repoUrl="https://big-mouse.github.io/examples/" 
    posterUrl="/bigmouse.webp"
  />
  <ExperimentCard 
    name="rae"
    demoUrl="https://github.com/tsur/node-rae"
    repoUrl="https://github.com/tsur/node-rae" 
    posterUrl="/rae.gif"
  />
  <ExperimentCard 
    name="unicode"
    demoUrl="https://github.com/tsur/unicode-wtf"
    repoUrl="https://github.com/tsur/unicode-wtf" 
    posterUrl="/unicode.gif"
  />
  <!-- <ExperimentCard 
    name="sword"
    demoUrl="https://github.com/tsur/node-sword"
    repoUrl="https://github.com/tsur/node-sword"
    posterUrl="/unicode.gif" 
  /> -->
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
    row-gap: 1rem;
  }

  .container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 6rem;
  }
</style>
