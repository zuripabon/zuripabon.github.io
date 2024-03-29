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
      <Translate key="title.companies"/>
    </Typography>

    <Typography variant="body">
      <Translate key="desc.companies"/>
    </Typography>
  </header>

  <JobCard 
    name="Kalzate"
    url="https://github.com/tsur/vtt-to-srt"
    date="Current"
    stack={[
      {name: Skills.NEXT_JS, level: Skills.HIGH},
      {name: Skills.RSC, level: Skills.HIGH},
      {name: Skills.SSR, level: Skills.HIGH},
      {name: Skills.LLM, level: Skills.HIGH},
      {name: Skills.PWA, level: Skills.HIGH},
      {name: Skills.SUPABASE, level: Skills.HIGH},
      {name: Skills.POSTGRES, level: Skills.HIGH},
      {name: Skills.DDD, level: Skills.HIGH},
      {name: Skills.TELEGRAM, level: Skills.HIGH},
      {name: Skills.WHATSAPP, level: Skills.HIGH},
      {name: Skills.K8S, level: Skills.HIGH},
      {name: Skills.OPEN_AI, level: Skills.MID},
      {name: Skills.MISTRAL, level: Skills.MID},
      {name: Skills.SNS, level: Skills.MID},
      {name: Skills.EKS, level: Skills.MID}
    ]}
    pictureUrl="/cober.png"
  />
  <JobCard 
    name="Power bargain"
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
      {name: Skills.CYPRESS, level: Skills.MID},
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
