<script lang="ts">
  const useNode = (node: HTMLElement) => {
      console.log(node)
  }
</script>

<svelte:head>
  <script type="module" src="../dist/view-port.js"></script>
  <title>view-port</title>
</svelte:head>
<main>
  <view-port use:useNode> </view-port>
</main>

<style>
  :global(body) {
    margin: 0;
  }
</style>
