<script setup lang="ts">
import Header from './components/Header.vue';
import InterfacePanel from './components/InterfacePanel.vue';
import Map from './components/Map.vue';
import Footer from './components/Footer.vue';
import DataPanel from './components/aside/DataPanel.vue';
import ChartWrapper from './components/chart/ChartWrapper.vue';
import { useAppStore } from './stores/app';
const appStore = useAppStore();
const { isChartVisible } = appStore;
</script>

<template>
  <Header />
  <main>
    <InterfacePanel />
    <ChartWrapper v-if="isChartVisible.value" />
    <Map v-else />
    <DataPanel />
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
