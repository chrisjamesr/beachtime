<script>
  import Dots from './Dots.svelte'
  const src = 'https://beachtimetideclocks.s3.us-east-2.amazonaws.com/resources/image0.jpeg'
</script>

<main>
	<section class="container">
		<h1 class="title">
			<span>beachtime</span>
			<Dots />
		</h1>        
		<br>
		<div class="coming-soon">
			<img {src} alt="sunset beach">
		</div>
	</section>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		/* text-transform: uppercase; */
		font-size: 4em;
		font-weight: 100;
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
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  flex-direction: column;
  max-width: 95vw;
  
}

.title {
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

.coming-soon div {
  font-size: 1rem;
}


.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
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