<script>
  import Typography from '../atoms/Typography.svelte';
  import Translate from '../atoms/Translate.svelte';
</script>

<div class="container">

  <Typography variant="heading" uppercase>
    <Translate key="title.academic"/>
  </Typography>
  <div class="university">
    <div class="university-description">
      <Typography variant="body">
        <Translate key="intro.academic"/>
      </Typography>
    </div>
    <!-- <div class="aspect-photo">
      <img class="image" src="/campus.png" alt="campus"/>
    </div> -->
  </div>
  
  <Typography variant="body">
    <Translate key="intership.academic"/>
  </Typography>
  <Typography variant="body">
    <Translate key="intership.tools.academic"/>
  </Typography>
  <Typography variant="body">
    <Translate key="intership.projects.academic"/>
  </Typography>
  <Typography variant="body">
    <Translate key="thesis.description.academic"/>
  </Typography>
  <Typography variant="body">
    <Translate key="thesis.tools.academic"/>
  </Typography>

</div>

<style>

  .container{
    display: flex;
    flex-direction: column;
    row-gap: 32px;
  }

  .university {
    display: flex;
    align-items: center;
    column-gap: 10px;
  }

  .university-description {
    display: flex;
    flex-direction: column;
    row-gap: 32px;
  }

  /* .aspect-photo{
    aspect-ratio: 4 / 3;
    flex-grow: 1;
    max-width: 550px;
  } */

</style>
