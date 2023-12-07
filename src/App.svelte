<script lang="ts">
  let name = "one"
  // только при изменении в svelte
  $: console.log(name)
  setTimeout(() => (name = "yo!"), 4000)

  const useNode = (node: HTMLElement) => {
    node.addEventListener("m4-update", (e) => {
      console.log(e)
    })
  }
</script>

<svelte:head>
  <script type="module" src="../dist/view-port.js"></script>
  <title>view-port</title>
</svelte:head>
<main>
  <view-port use:useNode {name}> </view-port>
</main>

<style>
  :global(body) {
    margin: 0;
  }
</style>
