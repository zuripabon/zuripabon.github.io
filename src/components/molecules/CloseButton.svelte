<script>
  export let onClick = () => null
</script>

<div class="{$$restProps.class || ''}">
  <button type="button" class="btn" on:click={onClick}></button>
</div>

<style>
  .btn {
    margin: 0;
    padding: 0;
    text-transform: none;
    appearance: button;
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none;
    position: relative;
    height: 45px;
    width: 45px;
    cursor: pointer;
    border-radius: 50%;
    border-color: rgba(255,255,255,.8);
    border: none;
    outline: none;
  }

  .btn::before {
    content: "";
    position: absolute;
    width: 80%;
    height: 4px;
    top: 50%;
    left: 50%;
    background-color: rgba(255,255,255,.8);
    transition: all;
    transition-duration: 300ms;
    transform: translate(-50%,-50%) rotate(45deg);
  }

  .btn::after {
    content: "";
    position: absolute;
    width: 80%;
    height: 4px;
    top: 50%;
    left: 50%;
    background-color: rgba(255,255,255,.8);
    transition: all;
    transition-duration: 300ms;
    transform: translate(-50%,-50%) rotate(-45deg);
  }

  .btn:hover {
    transform: scaleX(1.1) scaleY(1.1)
  }

  .btn:hover::before {
    transform: translate(-50%,-50%) rotate(135deg);
  }

  .btn:hover::after {
    transform: translate(-50%,-50%) rotate(225deg);
  }
  
  </style>