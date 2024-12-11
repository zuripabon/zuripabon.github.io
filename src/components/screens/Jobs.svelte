<script>
  import Typography from '../atoms/Typography.svelte';
  import Translate from '../atoms/Translate.svelte';
  import JobCard from '../molecules/JobCard.svelte';
  import CareerSteps from '../molecules/CareerSteps.svelte';
  import * as Skills from '../../lib/skills';
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

  <JobCard 
    name="cober"
    url="https://github.com/tsur/vtt-to-srt"
    date="Last"
    stack={[
      {name: Skills.NEXT_JS, level: Skills.HIGH},
      {name: Skills.RSC, level: Skills.HIGH},
      {name: Skills.SSR, level: Skills.HIGH},
      {name: Skills.LLM, level: Skills.HIGH},
      {name: Skills.PWA, level: Skills.HIGH},
      {name: Skills.SUPABASE, level: Skills.HIGH},
      {name: Skills.POSTGRES, level: Skills.HIGH},
      {name: Skills.SHADCN, level: Skills.HIGH},
      {name: Skills.CLOUDFLARE, level: Skills.HIGH},
      {name: Skills.DDD, level: Skills.HIGH},
      {name: Skills.TELEGRAM, level: Skills.HIGH},
      {name: Skills.WHATSAPP, level: Skills.HIGH},
      {name: Skills.K8S, level: Skills.HIGH},
      {name: Skills.OPEN_AI, level: Skills.MID},
      {name: Skills.LANG_CHAIN, level: Skills.MID},
      {name: Skills.OLLAMA, level: Skills.MID},
      {name: Skills.SNS, level: Skills.MID},
      {name: Skills.EKS, level: Skills.MID}
    ]}
    pictureUrl="/cober.png"
  />
  <JobCard 
    name="spotahome"
    url="https://github.com/tsur/vtt-to-srt"
    date="Joined Apr 2019"
    stack={[
      {name: Skills.BFF, level: Skills.HIGH},
      {name: Skills.ADVANCED_REACT, level: Skills.HIGH},
      {name: Skills.GQL, level: Skills.HIGH},
      {name: Skills.DESIGN_SYSTEM, level: Skills.HIGH},
      {name: Skills.EMOTION, level: Skills.HIGH},
      {name: Skills.STORYBOOK, level: Skills.HIGH},
      {name: Skills.DDD, level: Skills.HIGH},
      {name: Skills.HEXAGONAL, level: Skills.HIGH},
      {name: Skills.RABBITMQ, level: Skills.HIGH},
      {name: Skills.TESTING_LIB, level: Skills.HIGH},
      {name: Skills.JEST, level: Skills.HIGH},
      {name: Skills.CYPRESS, level: Skills.HIGH},
      {name: Skills.AB_TESTING, level: Skills.MID},
      {name: Skills.GTM, level: Skills.MID},
      {name: Skills.GRAFANA, level: Skills.MID},
      {name: Skills.LOKI, level: Skills.MID},
      {name: Skills.PROMETHEUS, level: Skills.MID},
      {name: Skills.MONGO, level: Skills.MID},
      {name: Skills.MYSQL, level: Skills.MID},
      {name: Skills.K8S, level: Skills.MID},
      {name: Skills.AWS, level: Skills.MID},
      {name: Skills.CUSTOMERIO, level: Skills.MID},
      {name: Skills.ARGO, level: Skills.MID},
      {name: Skills.HARBOR, level: Skills.MID},
      {name: Skills.HOTJAR, level: Skills.MID},
    ]} 
    pictureUrl="/vtt.webp"
  />
  <JobCard 
    name="valo"
    url="https://github.com/tsur/vtt-to-srt"
    date="Joined Mar 2015"
    stack={[
      {name: Skills.REACT, level: Skills.HIGH},
      {name: Skills.SSE, level: Skills.HIGH},
      {name: Skills.WEB_WORKERS, level: Skills.HIGH},
      {name: Skills.WEBSOCKETS, level: Skills.HIGH},
      {name: Skills.JEST, level: Skills.HIGH},
      {name: Skills.T3, level: Skills.MID},
      {name: Skills.KNOCKOUT, level: Skills.MID},
      {name: Skills.D3, level: Skills.MID},
      {name: Skills.TDD, level: Skills.MID},
      {name: Skills.CUCUMBER, level: Skills.MID},
      {name: Skills.GHERKINS, level: Skills.MID},
    ]}
    pictureUrl="/vtt.webp"
  />
  <JobCard 
    name="gsr"
    date="Joined Sep 2014"
    url="https://github.com/tsur/vtt-to-srt"
    stack={[
      {name: Skills.ANGULAR, level: Skills.HIGH},
      {name: Skills.SOCKETIO, level: Skills.HIGH},
      {name: Skills.BASH, level: Skills.MID},
      {name: Skills.CRON, level: Skills.MID}
    ]}
    pictureUrl="/vtt.webp"
  />
  <JobCard 
    name="ebury"
    date="Joined Nov 2013"
    url="https://github.com/tsur/vtt-to-srt"
    stack={[
      {name: Skills.JQUERY, level: Skills.HIGH},
      {name: Skills.PYTHON, level: Skills.HIGH},
      {name: Skills.DJANGO, level: Skills.HIGH},
      {name: Skills.BACKBONE, level: Skills.MID},
      {name: Skills.PYTEST, level: Skills.MID},
      {name: Skills.LETTUCE, level: Skills.MID},
    ]}
    pictureUrl="/vtt.webp"
  />

</div>

<style>
  .header {
    display: flex;
    flex-direction: column;
    row-gap: 6rem;
  }

  .container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 6rem;
  }

  .career-container {
      display: none;
  }

  @media only screen and (min-width: 685px) {

    .career-container {
      display: block;
    }
      
  }

</style>
