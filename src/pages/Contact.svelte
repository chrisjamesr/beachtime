<script>
  let name, email, message;

  const tempClickHandler = ()=> alert(
          `Submit Button Clicked!\n
          Name: ${name}\n
          Email: ${email}\n
          Message: ${message}`
          )

</script>

<header>
  <h1>Contact</h1>
</header>
<article>
  <form>
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
        <textarea name="message" rows="5" bind:value={message}/><br>
      </div> 

      <div class='button'>

        <button type="submit" on:click={tempClickHandler}>Submit</button>
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
  input {
    width: 50%;
    justify-self: left;
  }
  textarea {
    width: 75%;
    
  }
  label {
    width: 25%;
    text-align: left;
  }

  button {
    justify-self: flex-end;
  }
</style>