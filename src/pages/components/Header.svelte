<script>
  import { Link } from 'svelte-routing';
  import linklist from '../linklist.js';  
  let current='';  
  
</script>

<header>
  <div class="container">

    <div class="title-block">
      <h1>Beachtime</h1>
      <h1>Tide Clocks</h1>
      <h3>ROCKAWAY BEACH, NY</h3>
    </div>
    
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

  </div>
</header>

<style>
  header {
    box-sizing: border-box;
    width: 100%;
    /* height: 30%; */
    min-height: 260px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    padding-bottom: 2%;
  }

  .container {
    width:70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title-block{
    width:100%;
    height: 100%;
    flex-direction: column;    
    justify-content: space-between;
    align-items: center;
  }
  .title-block > * {
    margin: 0;
  }
  
  nav {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;  
  }

  h1 {
    font-style: normal;
    font-weight: 350;
    font-size: 3rem;
    line-height: 115%;
    text-align: center;
    color: #FFFFFF; 
  }
  h1:first-of-type {
    font-family: 'Yellowtail', cursive;
    font-style: normal;
    font-weight: normal;
    font-size: 5rem;
    line-height: 110%;
    text-align: center;
    color: #FFFFFF;
  }

  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 170%;
    text-align: center; 
  }

  div {
    width: 33%;
    display: flex;
    justify-content: center;
  }

  :global(a){
    font-style: normal;
    font-weight: 900;
    font-size: 1.40625rem;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    text-transform: uppercase;
    text-decoration: none;
    color: #FFFFFF;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.55);
  }

  :global(a):hover, :active, :visited {
    text-decoration: none;
  }
  
  /* .selected {
  
  } */

  @media screen and (max-height: 375px) and (orientation: portrait) {
    h1 {
    font-size: 1.5rem;
    line-height: 115%;
    }
    h1:first-of-type {
      font-size: 2.5rem;
      line-height: 110%;
    }

    h3 {
      font-weight: 600;
      font-size: .75rem;
      line-height: 170%;
    }
    nav {
      display: none;
    }
	}	 
</style>