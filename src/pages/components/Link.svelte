<script>
export let link;
import { Link } from 'svelte-routing';

</script>

<div class="header-link">

  <Link class="nav-link" to={link.path}>
    {link.name}
  </Link>

</div>

<style>

  div {
    /* border: 1px solid black; */
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .nav-link > :global(a){
    text-align: center; 
    margin: auto;
    text-transform: capitalize;
    color: black;
    font-size: 2rem;
  }

  :global(a):hover {
    color: black;
    text-decoration: none;
  }

  :global(a):active {
    color: black;
    text-decoration: none;
  }

  :global(a):visited {
    color: black;
  }  

</style>