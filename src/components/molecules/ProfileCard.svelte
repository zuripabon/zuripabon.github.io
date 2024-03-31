<script>
  import Typography from '../atoms/Typography.svelte';
  import TelegramIcon from '../icons/Telegram.svelte';
  import LinkedInIcon from '../icons/LinkedIn.svelte';
  import GithubIcon from '../icons/Github.svelte';
  import TwitterIcon from '../icons/Twitter.svelte';
  // import CalendarIcon from '../icons/Calendar.svelte';
  // import NpmIcon from '../icons/Npm.svelte';

</script>

<card class="profile">
  <img class="profile-image" src="docs/assets/progressLogo.png" alt="zuripabon" title="zuripabon"/>
  <div class="profile-content">
      <div class="hashtag"><Typography variant="subheading-s" strong>zuripabon</Typography></div>
      <Typography variant="label">hola@zuripabon.es</Typography>
      <p class="icons">
        <a class="icon-link" href="https://es.linkedin.com/in/zuripabon" target="_blank"><LinkedInIcon/></a>
        <!-- <a class="icon-link" href="https://tidycal.com/zuripabon/15-minute-meeting" target="_blank"><CalendarIcon/></a> -->
        <a class="icon-link" href="https://t.me/zuripabon" target="_blank"><TelegramIcon/></a>
        <a class="icon-link" href="https://twitter.com/zuripabon" target="_blank"><TwitterIcon/></a>
        <a class="icon-link" href="https://github.com/zuripabon" target="_blank"><GithubIcon/></a>
        <!-- <a class="icon-link" href="https://www.npmjs.com/~tsur" target="_blank"><NpmIcon/></a> -->
      </p>
  </div>
</card>
    
<style>

  .profile {
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    background: transparent;
    z-index: 20;
    margin: 30px 60px;
    display: none;
    gap: 0.5rem;
  }

  .profile-image {
    object-fit: fill;
    max-width: 100px;
    aspect-ratio: 1 / 1;
  }

  .profile-content {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .hashtag {
    color: #EE9CA8;
  }

  .icons {
    display: flex;
    gap: 0.5rem;
    align-items: end;
   
  }

  .icon-link {
    display: flex;
    text-decoration: none;
    color: white;
    & > svg {
      width: 20px;
    }
  }

</style>
