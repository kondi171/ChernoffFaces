<script setup lang="ts">
import Header from './components/Header.vue';
import Interface from './components/Interface.vue';
import Map from './components/Map.vue';
import Footer from './components/Footer.vue';
import Panel from './components/Panel.vue';
</script>

<template>
  <Header />
  <main>
    <Interface />
    <Map />
    <Panel />
  </main>
  <Footer />
</template>

<style scoped lang="scss">
main {
  display: flex;
  justify-content: space-between;
  height: 85vh;
  padding: 5vmin;
}
</style>
