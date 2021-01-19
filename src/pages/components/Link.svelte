<script>
  export let link;
</script>

<div class="header-link">

  <a href="/{link.name}">
    {link.name}
  </a>

</div>

<style>

  div {
    /* border: 1px solid black; */
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  a {
    text-align: center;
    margin: auto;
    text-transform: capitalize;
    color: black;
    font-size: 2rem;
  }

  a:hover {
    color: black;
    text-decoration: none;
  }

  a:active {
    color: black;
    text-decoration: none;
  }

  a:visited {
    color: black;
  }  

</style>