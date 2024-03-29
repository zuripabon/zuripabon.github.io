<script>
  import Typography from '../atoms/Typography.svelte';
  import Tag from '../atoms/Tag.svelte';
  import Translate from '../atoms/Translate.svelte';

  export let name = ''
  // export let url = ''
  // export let pictureUrl = ''
  export let date = ''
  export let stack = []
</script>

<card class="container" id={name}>
  <div class="heading">
    <Typography variant="subheading" uppercase>
      {name}
    </Typography>
  </div>

  <!-- <div class="aspect-ratio">
        <a href={url} target="_blank" class="a"><img class="image" src={pictureUrl} alt={name}/></a>
      </div> -->

  <!-- role -->

  <!-- stack -->
  
  <!-- description -->

  <!-- challenges -->

  <!-- projects -->
  <div>
    <Typography variant="label">
      <Translate key={`${name}.role`}/>
    </Typography> • <Typography variant="label">
      {date}
    </Typography>
    <Typography variant="body-big">
      <Translate key={`${name}.challenges`}/>
    </Typography>
  </div>

  <div class="poster">
    <div class="skills">
      <div class="skills-title">
        <Typography variant="label">
          Learning Skills
        </Typography> ( 
        <span class="skills-info"><span class="high"/> Higher focus <span class="low"/> Lower focus</span>)
      </div>
      <div>
        {#each stack as skill}
          <div class="tag-item">
            <Tag variant={skill.level}>
              {skill.name}
            </Tag>
          </div>
        {/each}
      </div>

    </div>
    <div>
      <Typography variant="label">
        About the company
      </Typography>
      <Typography variant="body-small">
        <Translate key={`${name}.desc`}/>
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

  .skills {
    max-width: 40%;
    min-width: 40%;
  }

  .tag-item {
    display: inline-block;
    margin: 0.25rem;
  }

  .skills-info {
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .high {
    display: inline-block;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    background-color: rgba(11, 255, 158, 0.25);
  }
  
  .low {
    display: inline-block;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    background-color: rgba(255, 190, 11, 0.15);
  }

  .skills-title {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
/* 
  .aspect-ratio {
    position: relative;
    aspect-ratio: 16 / 9;
    max-width:200px;
    min-width: 200px;
    max-height: 125px;
    min-height: 125px;
    transition: all;
    transition-duration: 0ms;
    
  }

  .image {
    object-fit: contain;
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
  } */

</style>
