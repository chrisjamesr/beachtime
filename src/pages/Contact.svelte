<script>
import { prevent_default } from "svelte/internal";


  let name="";
  let email="";
  let message="";
  
  async function fetchTest(e){
    e.preventDefault();
    const res = await fetch('/test', {
      method: 'get'
    });
    const response = await res.json(); 
    console.log(response);
  }

</script>

<header>
  <h1>Contact</h1>
</header>
<article>
  <form on:submit={fetchTest}>
    <fieldset>
    <!-- <legend>Contact Us</legend> -->

      <div id='name'>
        <label for="name">Your Name:</label>
        <input type="text" name="name" bind:value={name}/><br>
      </div>

      <div id='email'>
        <label for="email">Email Address:</label>
        <input type="email" name="email" bind:value={email}/><br>
      </div>

      <div id='message'>
        <label for="name">Message:</label>
        <textarea name="message" rows="8" bind:value={message}/><br>
      </div> 

      <div class='button'>

        <button type="submit">Submit</button>
      </div>

    </fieldset>
  </form>
</article>

<style>
  article {
    width: 90%;
    display: flex;
    flex-direction: column;
  }
  form {
    width: 100%;
    padding: 5%;
  }

  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 2%;
    font-size: 1.25rem;
  }

  fieldset div {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    margin: 2%;
  }
  div label {
    justify-content: flex-start;
  }
  input, textarea {
    font-size: 1.15rem;
  }
  input, textarea {
    width: 50%;
    justify-self: left;
  }
  /* textarea {
    width: 75%;    
  } */
  label {
    width: 25%;
    text-align: left;
  }

  button {
    justify-self: flex-end;
  }
</style>