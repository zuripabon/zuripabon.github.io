<script>
  import Typography from '../atoms/Typography.svelte';
  import Translate from '../atoms/Translate.svelte';
</script>


<div class="container">
  <Typography variant="heading" uppercase>
    <Translate key="title.about"/>
  </Typography>
  
  <Typography variant="body">
    <Translate key="intro.about"/>
  </Typography>

  <Typography variant="body">
    <Translate key="write.about"/>
  </Typography>
  
  <Typography variant="body">
    <Translate key="hobbies.about"/>
  </Typography>

  <div class="anime-posters">
    <div class="aspect-ratio">
      <img class="image" src="/haikyu.webp" alt="1. Haikyu"/>
    </div>
    <div class="aspect-ratio">
      <img class="image" src="/dragonballz.webp" alt="2. Dragon Ball Z"/>
    </div>
    <div class="aspect-ratio">
      <img class="image" src="/hunterxhunter.webp" alt="3. Hunter x Hunter"/>
    </div>
  </div>
  
  
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
    /* max-width: 230px; */
    /* max-height: 550px; */
  }

  .image {
    width: 100%;
    height: 100%;
    mask-image: linear-gradient(rgb(0 0 0 / 80%) 60%, transparent);
  }
</style>
