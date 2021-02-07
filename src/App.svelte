<script>
  
  import Footer from './pages/components/Footer.svelte';
  import Temp from './Temp.svelte';
   
</script>


<main>
    <Temp/>
    <Footer/>
</main>

<style>     

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
    height: 96%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
	}	

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
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