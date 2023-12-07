<svelte:options
  customElement={{
    tag: "view-port",
    props: {},
  }}
/>

<script lang="ts">
  import { Canvas, T } from "@threlte/core"
  import { OrbitControls, Grid, ContactShadows } from "@threlte/extras"
  import Bots from "./Bots.svelte"
</script>

<div>
  <Canvas>
    <T.PerspectiveCamera makeDefault position={[0, 4, 9]} fov={15}>
      <OrbitControls autoRotate enableZoom={true} enableDamping autoRotateSpeed={2} target.y={0.8} />
    </T.PerspectiveCamera>
    <T.AmbientLight intensity={0.5} />
    <T.DirectionalLight args={["#fff", 0.5]} intensity={0.6} />
    <Grid
      position.y={-0.001}
      cellColor={"#fff"}
      sectionColor={"#fff"}
      sectionThickness={1}
      fadeDistance={14}
      cellSize={1}
    />
    <ContactShadows
      resolution={44}
      depthWrite={true}
      color={"#87ceeb"}
      smooth={true}
      scale={7}
      blur={7}
      far={1.8}
      opacity={0.7}
    />
    <Bots />
  </Canvas>
</div>

<slot />

<style>
  div {
    width: 100vw;
    height: 100vh;
    background: rgb(13, 19, 32);
    background: linear-gradient(180deg, rgba(13, 19, 32, 1) 0%, rgba(8, 12, 21, 1) 100%);
  }
</style>
