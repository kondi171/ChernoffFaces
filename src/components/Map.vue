<script setup lang="ts">
import { ref, watch } from 'vue';
import voivodeshipsData from './../data/voivodeships.json';
import Modal from './Modal.vue';
import { useAppStore } from '../stores/app';

const appStore = useAppStore();
const { chernoffFace, isFaceGenerated } = appStore;

const modalVisible = ref(false);
const voivodeshipData = ref<any>(null);

const handleTitleVisible = (e: MouseEvent, voivodeshipName: string) => {
  const title = document.getElementById('title') as HTMLSpanElement;
  title.style.transform = 'scale(1)';
  title.style.left = `${e.clientX}px`;
  title.style.top = `${e.clientY}px`;
  title.innerText = voivodeshipName;
}

const handleTitleInvisible = () => {
  const title = document.getElementById('title') as HTMLSpanElement;
  title.style.transform = 'scale(0)';
}

const handleModal = (voivodeship: any) => {
  modalVisible.value = true;
  voivodeshipData.value = voivodeship;
}

const handleCloseModal = () => {
  modalVisible.value = false;
}



</script>

<template>
  <section>
    <div class="map-wrapper">
      <svg class="map" id="map" viewBox="0 0 1000 950" xmlns="http://www.w3.org/2000/svg">
        <path v-on:mouseover="(e) => handleTitleVisible(e, voivodeship.name)"
          v-on:mouseleave="() => handleTitleInvisible()" v-on:click="() => handleModal(voivodeship)" class="voivodeship"
          v-for="voivodeship in voivodeshipsData" :d="voivodeship.points" :symbol="voivodeship.symbol">
        </path>
      </svg>
      <span id="title" class="title"></span>
    </div>
    <Modal v-bind:modalVisible="modalVisible" v-bind:voivodeship="voivodeshipData" v-bind:closeModal="handleCloseModal" />
  </section>
</template>


<style scoped lang="scss">
@import './../assets/scss/variables.scss';

section {
  width: 50vw;
  display: flex;
  justify-content: center;

  .map-wrapper {
    margin: 0 auto;
    width: 100%;
    max-width: 700px;
    height: 700px;
    display: block;
    position: relative;

    .map {
      width: 100%;
      height: 100%;
      fill: $darkColor;
      stroke: $secondaryColor;
      // stroke: $primaryColor;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 4px;
    }

    .voivodeship {
      position: relative;
      transition-duration: .4s;

      &:hover {
        fill: $secondaryColor;
        // fill: $primaryColor;
        cursor: pointer;
      }
    }
  }

  .title {
    position: fixed;
    left: 0;
    top: 0;
    padding: 1vmin;
    border-radius: 5vmin 0 5vmin 0;
    display: block;
    text-align: center;
    width: 10%;
    transform: scale(0);
    background-color: $primaryColor;
    color: $bgColor;
    font-size: 2vmin;
    font-weight: bold;
    border: 2px solid $darkColor;
  }
}
</style>