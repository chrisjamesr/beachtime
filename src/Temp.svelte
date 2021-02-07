<script>
  import Dots from './Dots.svelte'
</script>
  
<h1 class="title">
  <span>beachtime</span>
  <Dots />
</h1>        

<style>

	section {
		text-align: center;
		padding: 1em;
		width: 100%;
		margin: 0 auto;
    height: 98%;
	}

  span {
    font-family: 'Petit Formal Script', cursive;
    font-weight: 700;
    font-size: 6rem;
    color: #35495e;
    letter-spacing: 1px;
    width: 80vw;  
    text-align: center;
  }

  /* section .title {
    font-weight: 700;
    font-size: 6rem;
    color: #35495e;
    letter-spacing: 1px;
    width: 80vw;  
  } */

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  flex-direction: column;
  max-width: 95vw;  
} */

@media screen and (max-width: 500px) {
  .title {
    font-size: 5rem;  
  }

}
</style>