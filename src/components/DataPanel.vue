<script setup lang="ts">
import { ref } from 'vue';
import Stats from './Stats.vue';
import Legend from './Legend.vue';
import { useAppStore } from '../stores/app';

const appStore = useAppStore();
const { isFacesGenerated } = appStore;

const isLegendVisible = ref(false);
const handleChangePanel = (e: MouseEvent, legend: boolean) => {
  const menuOptions = document.querySelectorAll('.option');
  menuOptions.forEach(menuOption => menuOption.classList.remove('active'));

  const clickedOption = e.target as HTMLElement;
  clickedOption.classList.add('active');

  isLegendVisible.value = legend;
}

const handleShowInfo = () => {
  if (!isFacesGenerated.generated) {
    const info = document.querySelector('.info');
    info?.classList.add('visible');
  }
}

const handleCloseInfo = () => {
  if (!isFacesGenerated.generated) {
    const info = document.querySelector('.info');
    info?.classList.remove('visible');
  }
}

</script>
<template>
  <section class="panel">
    <div class="miniMenu">
      <button data-id="stats" v-on:click="(e) => handleChangePanel(e, false)" class="option active">Statystyka</button>
      <button v-on:mouseenter="handleShowInfo" v-on:mouseleave="handleCloseInfo" :disabled="!isFacesGenerated.generated"
        data-id="legend" v-on:click="(e) => handleChangePanel(e, true)" class="option">Legenda</button>
    </div>
    <hr>
    <Legend v-if="isLegendVisible" />
    <Stats v-else />
    <div class="info">
      Twarze Chernoffa nie zostały jeszcze wygenerowane!
    </div>
  </section>
</template>

<style scoped lang="scss">
@import './../assets/scss/variables.scss';

.panel {
  width: 25vw;

  .miniMenu {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .option {
      font-size: 3vmin;
      font-family: $fontDecorative;
      transition-duration: .4s;
      background-color: transparent;
      border: none;

      &:hover {
        cursor: pointer;
        color: $secondaryColor;
      }

      &[disabled] {
        color: rgb(162, 7, 7);
      }

      &.active {
        color: $primaryColor;
        transform: scale(1.3);
      }
    }
  }

  hr {
    border: 0;
    height: .2vmin;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
  }

  .info {
    position: fixed;
    bottom: 2vmin;
    right: 2vmin;
    color: red;
    font-size: 2vmin;
    font-weight: bold;
    background-color: $darkColor;
    padding: 2vmin;
    text-align: center;
    border-radius: 1vmin;
    z-index: 10;
    transform: scale(0);
    transition-duration: .4s;

    &.visible {
      transform: scale(1);
    }
  }
}
</style>