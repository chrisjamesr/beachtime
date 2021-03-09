<script>

</script>

<svelte.head>
  <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
</svelte.head>

<article class="content-container">

  <section class="content">
    
    <div class="heading">Shop</div>

    <section class="text-content">
      Follow us on Instagram to see our newest clocks, or contact
      us to create a custom clock with an image of your own
    </section>

    <div class="button">
      <a href="https://www.instagram.com/beachtime_tideclocks/"
          rel="noreferrer noopener" target="_blank" >
          FOLLOW US<br/>@BEACHTIME_TIDECLOCKS
      </a>
    </div>

  </section>   
  <!-- LightWidget WIDGET -->
  <!-- <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script> -->
  <iframe src="//lightwidget.com/widgets/7f501f24b03e5de6a47183a0cc16380c.html"
    scrolling="no" allowtransparency="true" 
    class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;">
  </iframe>
  

   <!-- <div id="widget"> -->
      <!-- <iframe src="//lightwidget.com/widgets/03fcc7c3dff951ea9ac8358371314f97.html"
          title="lightwidget" scrolling="no" allowtransparency="true" 
          class="lightwidget-widget" >
      </iframe> -->
    <!-- </div> -->

</article>

<style>
  .content-container {
    flex-wrap: nowrap;
  }

   .content {
    height: 70%;
    line-height: 3rem;
    width: 42%;
    text-align: left;    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
   }

  .text-content {
    font-style: normal;
    font-weight: normal;
    font-size: 1.171875rem;
    line-height: 150%;
  }

  .button {
    padding: 3%;
    width: 330px;
    text-align: center;
    line-height: 1.5rem;
  }
  
  a {
    width: 100%;
  }

  iframe {
    max-width: 400px;
    height: auto;
    width: 100%;
    border: 0;
    overflow: hidden;
  }
 
  @media screen and (max-width: 920px) {
    a {
      font-size: 1rem;
    }
   .button {
     align-self: center;
     width: 80%;
   }
  
  @media (max-height: 768px), screen and (orientation: portrait) {
    .content-container {
      flex-wrap: wrap;
      width:100%;
      /* align-content: stretch; */
    }
    .content{
      height: 40%;
      width: 60%;
      align-items: center;
      justify-content: space-evenly;
      text-align: center;    
    }    
  }

 }
</style>