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
        </Typography>
        <span class="skills-info"> Higher focus <span class="high"/> Lower focus <span class="low"/></span>
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
    flex-direction: column;
    justify-content: stretch;
    gap: 2rem;
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
    background-color: rgba(236, 113, 113, 0.5);
  }

  .skills-title {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.25rem;
    gap: 0.25rem;
  }

  @media only screen and (min-width: 685px) {

    .poster {
      display: flex;
      flex-direction: row;
      justify-content: stretch;
      gap: 2rem;
    }

    .skills {
      max-width: 40%;
      min-width: 40%;
    }
      
  }

  @media only screen and (min-width: 905px) {

    .skills-title {
      margin-bottom: 1rem;
    }

  }

</style>
