<script>
  import { Link } from 'svelte-routing';
  import linklist from '../linklist.js';  
  let current='';  
  
</script>

<header>
  <nav>
    {#each linklist as link}

    <div class:selected="{ current === link.name }"
         on:click="{ () => current = link.name}" >
      
      <Link class="nav-link" to={link.path}>
        {link.name}
      </Link>

    </div>

    {/each}
  </nav>
</header>

<style>
  header {
    width: 100%;
    height: 10vh;    
    vertical-align: center;
  }

  nav {
    width: 100%;
    height: 100%;
    /* margin: auto; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;  
  }

  div {
    /* text-align:center;
    vertical-align: center; */
    width: 25%;
    display: flex;
    justify-content: center;
  }

  :global(a){
    font-family: 'Petit Formal Script', cursive;
    text-align: center; 
    margin: auto;
    /* height: 100%; */
    width: 100%;
    /* padding: 10%; */
    text-transform: capitalize;
    text-decoration: none;
    /* color:rgb(240,88,25); */
    color: black;
    font-size: 2rem;
  }

  :global(a):hover, :active, :visited {
    color: black;
    text-decoration: none;
  }

  /* :global(a):active {
    color: black;
    text-decoration: none;
  } */

  /* :global(a):visited {
    color: black;
    text-decoration: none;
  }   */

  .selected {
    font-weight: 700;
    /* font-size: 2.25rem; */
    /* color:rgb(240,88,25); */
    color: black;
    background: rgb(36,21,0);
    background: radial-gradient(
      circle, 
      rgba(36,21,0,0.9332107843137255) 0%, 
      /* rgba(201,123,13,1) 0%,  */
      rgba(255,155,70,1) 0%, 
      rgba(172,157,171,0) 40%);
  }

</style>