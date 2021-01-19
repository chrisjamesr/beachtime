<script>
  export let link;
</script>

<div class="header_link">
  <a href="/{link.name}">
    {link.name}
  </a>
</div>

<style>
  a {
    text-transform: capitalize;
  }
  div {
    align: center;
  }
</style>