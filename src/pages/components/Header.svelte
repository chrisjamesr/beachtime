<script>
  import Link from './Link.svelte';
   import links from '../links.js';
  // const links = ['about', "home"];

</script>

<header>
  {#each links as link}
    <Link link={link} />
  {/each}
</header>

<style>

  header {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  header div {
    margin: 1px solid black;
    width:25%;
  }

</style>