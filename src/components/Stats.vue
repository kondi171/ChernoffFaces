<script setup lang="ts">
</script>
<template>
  <section>
    <div class="stat">
      <h2>Gas 95</h2>
      <p>This is a statistics page.</p>
    </div>
    <div class="stat">
      <h2>Diesel</h2>
      <p>This is a statistics page.</p>
    </div>
    <div class="stat">
      <h2>Auto Gas</h2>
      <p>This is a statistics page.</p>
    </div>
    <div class="stat">
      <h2>Gas 98</h2>
      <p>This is a statistics page.</p>
    </div>
    <div class="stat">
      <h2>Premium Diesel</h2>
      <p>This is a statistics page.</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import './../assets/scss/variables.scss';

section {
  width: 25vw;
  // height: 40vh;
  display: flex;

  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  .stat {
    background-color: $primaryColor;
    border-radius: 1rem;
    padding: 2vmin;
    width: 45%;
    height: 30%;
    box-shadow: 1vmin 1vmin 2vmin 0 $supportColor;

    h2 {
      font-size: 2.2vmin;
      text-align: center;
      margin-bottom: 2vmin;
    }
  }

}
</style>