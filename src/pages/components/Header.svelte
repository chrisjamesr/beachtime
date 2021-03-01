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
    width: 100%;
    height: 41.769%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    
  }

  .container {
    width:70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 0 10%; */
    /* margin: auto; */
  }

  .title-block{
    width:100%;
    height: 100%;
    flex-direction: column;    
    justify-content: space-between;
    align-items: center;
    /* margin-bottom: 10%; */
  }
  .title-block > *{
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
    font-size: 3.515625rem;
    line-height: 115%;
    text-align: center;
    color: #FFFFFF; 
  }
  h1:first-of-type {
    font-family: 'Yellowtail', cursive;
    font-style: normal;
    font-weight: normal;
    font-size: 5.809375rem;
    line-height: 105%;
    /* line-height: 10.625em; */
    text-align: center;
    color: #FFFFFF;
  }

  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 1.59375rem;
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
    line-height: 37px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    /* margin: auto; */
    /* width: 100%; */
    text-transform: uppercase;
    text-decoration: none;
    color: #FFFFFF;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.55);
    
  }

  :global(a):hover, :active, :visited {
    text-decoration: none;
    /* text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.55); */
  }

  
  .selected {
    /* text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.55); */
    /* font-weight: 700; */
    /* font-size: 2.25rem; */
    /* color:rgb(240,88,25); */
  }

</style>