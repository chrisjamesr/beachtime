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
    height: 98%;
	}

	

	@media (min-width: 640px) {
		
	}

	.container {
    /* margin: 0 auto;     */
    height: 98%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* text-align: center; */
    flex-direction: column;
    /* max-width: 95vw;   */
  }

@media screen and (max-width: 500px) {
  .title {
    font-size: 5rem;  
  }

  .title h1 {
    margin: 2.5%;
  }

}
</style>