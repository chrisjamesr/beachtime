<script>
  import {Router, Route, Link} from 'svelte-routing';
  import Header from './pages/components/Header.svelte';
  import Footer from './pages/components/Footer.svelte';

  import linklist from './pages/linkList.js';
  
  export let url = "";

  let currentComponent;
   
</script>


<main>

  <Router url="{url}">  

    <section class="container">

      <Header />

      {#each linklist as route}
        
        <Route path={route.path}> <svelte:component this={route.component}/> </Route>

      {/each}

    </section>

    

  </Router> 

  <Footer/>
</main>

<style>
	main {
		text-align: center;
    height: 99%;
    display: flex;
    flex-direction: column;
	}

	

	@media (min-width: 640px) {
		
	}

	.container {
    height: 98%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    
  }

@media screen and (max-width: 500px) {
  /* .title {
    font-size: 5rem;  
  } */

}
</style>