<script>

  import Link from './Link.svelte';
  import links from '../links.js';

</script>

<header>

  {#each links as link}
    <Link link={link} />
  {/each}

</header>

<style>

  header {
    width: 90%;
    height: 20vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;  
    /* margin: 2% 0 */
  }

</style>