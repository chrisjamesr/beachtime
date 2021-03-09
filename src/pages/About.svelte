<script>

</script>

<article class="content-container">

  <section class="content">

    <div class="heading">
      Always Know The Tide
    </div>

    <section class="text-content">
      We are a father daughter duo creating beautiful tide clocks to keep track of the local changing tides.
    <br>
      --A perfect addition to your home by the sea.
    </section>

    <div class="button">
      <a href="https://www.instagram.com/beachtime_tideclocks/"
        rel="noreferrer noopener" target="_blank" >
        Shop Our Instagram
      </a>
    </div>

  </section>

    <img src="clock1.jpg" alt="Image of a tide clock">
  
</article>

<style>
  .content-container {
    /* flex-direction: row; */
    flex-wrap: nowrap;
  }
  .content {
    height: 90%;
    line-height: 3rem;
    max-width: 42%; 
    flex: 1 2 auto;
    padding-left: 5%;
    padding: 0 3% 0 3%;
    text-align: left;    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
    
  img {
    max-width: 400px;
    height: auto;
    width: 100%;
    /* margin: auto; */
    /* align-self: center; */
    /* flex: 0 1 auto; */
  }

  .text-content {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 1.171875rem;
    line-height: 150%;
    color: #000000;
  }

  .button {
    padding: 3%;
    width: 180px;
    text-align: center;
    line-height: 1.5rem;
  }
  
  a {
    width: 100%;
  }
/* 1440px x 821px */

  @media (max-height: 768px), screen and (orientation: portrait) {
    .content-container {
      flex-wrap: wrap;
      align-content: stretch;
    }
    .content{
      height: 40%;
      max-width: 90%;
      align-items: center;
      justify-content: space-evenly;
      text-align: center;    
    }
    
  }
</style>