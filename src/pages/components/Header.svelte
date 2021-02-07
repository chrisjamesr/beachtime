<script>
  import { Link } from 'svelte-routing';
  import linklist from '../linklist.js';  
  let current;  
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
    height: 20vh;    
    vertical-align: center;
  }

  nav {
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;  
    /* margin: 2% 0 */
  }

  div {
    /* border: 1px solid black; */
    text-align:center;
    vertical-align: center;
    width: 25%;
    /* height: 100%; */
    display: flex;
    justify-content: center;
  }

  :global(a){
    font-family: 'Petit Formal Script', cursive;
    text-align: center; 
    margin: auto;
    text-transform: capitalize;
    text-decoration: none;
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
    text-decoration: none;
  }  

  .selected > :global(a){
    font-weight: 700;
    color:red;
    text-decoration: none;
  }

</style>