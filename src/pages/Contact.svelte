<script>
  import { navigate } from "svelte-routing";

  let name="";
  let email=""
  let message="";
  const postMsg = Object.assign({}, name, email, message);
  
  async function fetchTest(e){    
    e.preventDefault();
    
    const postMessage = await fetch('/test', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({postMsg})

    });

    const response = await postMessage;
    if(postMessage.ok) { 
      navigate('/'); 
      setTimeout(() => {
        alert("message sent");
      }, 1000);
    }

  }

</script>

<article class="content-container">

  <div class="heading">
    Contact
  </div>

  <section class="text-content">
    We are happy to create a custom clock with an image
    that means something special to you. Contact us to get
    started on your special clock today!
  </section>

  <form on:submit={fetchTest}>

    <fieldset>
    
      <div id='name'>
        <label for="name">Name:</label>
        <input type="text" name="name" bind:value={name}/><br>
      </div>

      <div id='email'>
        <label for="email">Email:</label>
        <input type="email" name="email" bind:value={email}/><br>
      </div>

      <div id='message'>
        <label for="name">Message:</label>
        <textarea name="message" rows="6" bind:value={message}/><br>
      </div> 

      <!-- <div class="submit-button"> -->
        <button class="button">SUBMIT</button>
      <!-- </div> -->

    </fieldset>
  </form>

</article>

<style>
  
  .content-container {
    flex-direction: column;
    justify-content: space-between;  
    align-items: center; 
  }

  .text-content {
    width: 50%;
    font-style: normal;
    font-weight: normal;
    font-size: 1.171875rem;
    line-height: 150%;
  }

  form {
    width: 50%;
    /* margin-right: 5%;
    margin-bottom: 2%; */
    padding-right: 10%;
  }

  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    font-size: 1.25rem;
  }

  fieldset div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-content: baseline;
    margin: 1% 0;
  }
  
  input, textarea {
    font-size: 1.15rem;
  }

  input, textarea {
    width: 90%;
    justify-self: left;
    background: #F5F5F5;
    border: 0.75px solid #CFCFCF;
    box-sizing: border-box;
    align-self:flex-end;
  }

  label {
    width: 20%;
    text-align: right;
    font-size: 0.984375rem;
    margin-right: 2%;
  }

  .button {
	  height: 18%;
    padding: 2% 8%;
    margin-top: 2%;
    text-align: center;
    align-self: flex-end;
  }

  @media screen and (max-width: 1155px) {
  section.text-content {
    text-align: left;
  }

}

</style>