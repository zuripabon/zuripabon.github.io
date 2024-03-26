<script>
  import Typography from '../atoms/Typography.svelte';
  import Translate from '../atoms/Translate.svelte';
  import GithubIcon from '../icons/Github.svelte';

  export let name = ''
  export let repoUrl = ''
  export let posterUrl = ''
  export let demoUrl = ''
</script>

<card class="container">
  <div class="heading">
    <Typography variant="subheading" uppercase>
      <Translate key={`experiments.title.${name}`}/>
    </Typography>
  </div>
  
  <div class="poster">
    <div class="aspect-ratio">
      <a href={demoUrl} target="_blank" class="a"><img class="image" src={posterUrl} alt={`Experiment ${name}`}/></a>
    </div>
    <div class="desc">
      <Typography variant="body">
        <a class="link-repo" href={repoUrl} target="_blank"><GithubIcon/></a>
        <Translate key={`experiments.desc.${name}`}/>
      </Typography>
    </div>
  </div>
</card>
    
<style>

  .container{
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }

  .poster {
    display: flex;
    justify-content: stretch;
    column-gap: 2rem;
  }

  .aspect-ratio {
    position: relative;
    aspect-ratio: 16 / 9;
    max-width: 450px;
    min-width: 450px;
    max-height: 325px;
    min-height: 325px;
    transition: all;
    transition-duration: 0ms;
    
  }

  .image {
    border: 2px solid white;
    object-fit: cover;
    width: 100%;
    height: 100%;
    mask-image: linear-gradient(rgb(0 0 0 / 80%) 60%, transparent);
  }

  .aspect-ratio:hover ~ .desc{
    display: none;
    transition-duration: 300ms;
  }
  
  .aspect-ratio:hover {
    max-width: 100%;
    min-width: 100%;
    transition-duration: 300ms;
  }

  .link-repo {
    color: currentColor;
    vertical-align: middle;
  }

</style>
