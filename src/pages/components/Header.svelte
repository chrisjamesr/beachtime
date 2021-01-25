<script>

  import linklist from '../links.js';
  import Link from './Link.svelte';
  // import {Link} from 'svelte-routing';

</script>

<header>
  
    {#each linklist as link}
      <Link {link} />
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