<script setup lang="ts">
import { ref } from 'vue';
import Stats from './Stats.vue';
import Legend from './Legend.vue';

const isLegendVisible = ref(false);

const handleChangePanel = (e: MouseEvent, legend: boolean) => {
  const menuOptions = document.querySelectorAll('.option');
  menuOptions.forEach(menuOption => menuOption.classList.remove('active'));

  const clickedOption = e.target as HTMLElement;
  clickedOption.classList.add('active');

  isLegendVisible.value = legend;
  console.log(clickedOption.dataset.id);
}

</script>
<template>
  <section class="panel">
    <div class="miniMenu">
      <div data-id="stats" v-on:click="(e) => handleChangePanel(e, false)" class="option active">Statystyka</div>
      <div data-id="legend" v-on:click="(e) => handleChangePanel(e, true)" class="option">Legenda</div>
    </div>
    <hr>
    <Legend v-if="isLegendVisible" />
    <Stats v-else />
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

      &:hover {
        cursor: pointer;
        color: $secondaryColor;
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
}
</style>