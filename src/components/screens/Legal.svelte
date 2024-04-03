<script>
  import Typography from '../atoms/Typography.svelte';
  import Translate from '../atoms/Translate.svelte';
</script>


<div class="container">
  <Typography variant="heading" uppercase>
    <Translate key="title.legal"/>
  </Typography>
  
  <Typography variant="body">
    <Translate key="intro.legal"/>
  </Typography>

  <Typography variant="body">
    <Translate key="terms-1.legal"/>
  </Typography>
  
  <Typography variant="body">
    <Translate key="terms-2.legal"/>
  </Typography>

  <Typography variant="body">
    <Translate key="terms-3.legal"/>
  </Typography>

  <Typography variant="body">
    <Translate key="terms-4.legal"/>
  </Typography>

  <Typography variant="body">
    <Translate key="terms-5.legal"/>
  </Typography>

  <Typography variant="body">
    <Translate key="terms-6.legal"/>
  </Typography>

  <Typography variant="body">
    <Translate key="terms-7.legal"/>
  </Typography>
  
</div>

<style>
  .container{
    display: flex;
    flex-direction: column;
    row-gap: 32px;
  }

  .anime-posters {
    display: flex;
    justify-content: stretch;
    column-gap: 2rem;
  }

  .aspect-ratio {
    position: relative;
    aspect-ratio: 9 / 14;
    width: 33.3%;
    /* max-width: 230px; */
    /* max-height: 550px; */
  }

  .image {
    width: 100%;
    height: 100%;
    mask-image: linear-gradient(rgb(0 0 0 / 80%) 60%, transparent);
  }
</style>
