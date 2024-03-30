<script>
  import Typography from '../atoms/Typography.svelte';
  import ShieldIcon from '../icons/Shield.svelte';

  export let features = []
  export let title = ''
  export let subtitle = ''
  export let hint = ''
  export let price = ''
  export let offer = ''
  export let isPopular = false
</script>

<div class="card-container">
  {#if isPopular}
  <div class="hook"><Typography variant="label-small" uppercase strong>Popular</Typography></div>
  {/if}

  <card
    class="card"
    tabIndex={0}
    role="button"
  >
    <header class="title">
      <Typography variant="heading-small">{title}</Typography>
    </header>
    <section class="content">
      <Typography variant="body-small">{subtitle}</Typography>
      <div class="pricing">
        {#if offer}
        <Typography variant="label" strike>{offer}</Typography>
        {/if}
        <Typography variant="body" strong>{price}</Typography>
      </div>

      <ul class="features">
        {#each features as feature }
          <li key={feature.name} class="feature-box">
            <div class="feature-item"><svg width="24" height="22" viewBox="0 0 24 22" fill="none" class="success-icon" data-uia="success-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0183 21.0833C17.7761 21.0833 22.4438 16.5688 22.4438 11C22.4438 5.43112 17.7761 0.916656 12.0183 0.916656C6.26044 0.916656 1.59277 5.43112 1.59277 11C1.59277 16.5688 6.26044 21.0833 12.0183 21.0833ZM11.7407 14.3982L17.4273 8.89817L16.087 7.60181L11.0705 12.4536L8.89738 10.3518L7.55702 11.6482L10.4004 14.3982L11.0705 15.0463L11.7407 14.3982Z" fill="white"></path></svg> <Typography variant="label-small">{feature.name}</Typography></div>
          </li>
        {/each}
      </ul>
      <footer class="footer">
        <div class="cta-container">
          <a class="cta" href="">
            <ShieldIcon/><Typography variant="label-small" uppercase strong>Hire me</Typography>
          </a>
        </div>
        <p class="hint">
          <Typography variant="label-small">{hint}</Typography>
        </p>
      </footer>
    </section>
  </card>

</div>
    
<style>

  .card-container {
    position: relative;
    display: flex;
  }

  .hook {
    z-index: 1;
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    color: black;
    border-radius: 15px;
    padding: 0 0.5rem;
  }

  .card {
    padding-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    flex: 1 1 auto;
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 18px;
    position: relative;
    margin: 0;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 10px 0px;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 0;
  }


  .card-container:first-child {
    max-width: 45%;
  }

  .content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 3rem;
    padding: 0 2rem;
    margin-bottom: 1rem;
  }

  .title {
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px;
    box-sizing: border-box;
    color: white;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0 8px;
    padding: 10px 16px;
    background: radial-gradient(140.76% 131.96% at 100% 100%, rgb(176, 56, 220) 0%, rgba(74, 42, 150, 0.5) 73.57%, rgba(74, 42, 150, 0) 100%), rgb(29, 82, 157);
    text-transform: uppercase;
  }

  .pricing {
    display: flex;
    gap: 0.5rem;
    place-items: center;
  }

  .features {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
    min-height: 360px;
  }
  
  .feature-item {
    display: flex;
    gap: 0.5rem;
    padding-bottom: 0.5rem;
  }
  
  .feature-box:not(:last-child) .feature-item  {
    border-bottom: 1px solid rgba(128, 128, 128, 0.4);
  }

  .footer {
    display: flex;
    flex-direction: column;
    place-items: center;
  }
  
  .cta-container {
    display: flex;
    margin-bottom: 0.5rem;
    width: 100%;
  }

  .cta {
    width: 100%;
    padding: 0.75rem;
    color: white;
    background: #525261ad;
    text-decoration: none;
    border-radius: 10px;
    transition: all;
    transition-duration: 500ms;
    display: flex;
    justify-content: center;
    place-items: end;
    gap: 0.5rem;

    & > svg {
      transition: all;
      transition-duration: 500ms;
    }
  }

  .cta:hover {
    background: radial-gradient(140.76% 131.96% at 100% 100%, rgb(176, 56, 220) 0%, rgba(74, 42, 150, 0.5) 73.57%, rgba(74, 42, 150, 0) 100%), rgb(29, 82, 157);

    & > svg {
      transform: scale(1.1);
    }
  }

  .hint {
    text-align: center;
  }

</style>
