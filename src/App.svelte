<script>
  import {Router, Route, Link} from 'svelte-routing';
  import Home from './pages/Home.svelte';
  import About from './pages/About.svelte';
  import Contact from './pages/Contact.svelte';
  import Gallery from './pages/Gallery.svelte';
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

    <Footer/>

  </Router> 

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    width: 100%;
    flex-direction: column;
    max-width: 95vw;  
  }

section .title {
  font-family: /* 'Caveat', cursive, */
    'Dancing Script', cursive,
    /* 'Source Sans Pro', */
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
    display: block;
    font-weight: 700;
    font-size: 6rem;
    color: #35495e;
    letter-spacing: 1px;
    width: 80vw;  
  }
.coming-soon {
  /* font-family: 'Dancing Script', cursive; */
  font-family: 'Caveat', cursive;
  font-weight: 400;
  font-size: 3rem;
  color: #35495e;
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