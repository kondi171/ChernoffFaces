<script setup lang="ts">
import { ref } from 'vue';
import Modal from './Modal.vue';
import { useAppStore } from '../stores/app';

const appStore = useAppStore();
const { voivodeshipsData } = appStore;

const modalVisible = ref(false);
const voivodeshipData = ref<any>(null);

const handleTitleVisible = (e: MouseEvent, voivodeshipName: string) => {
  const title = document.getElementById('title') as HTMLSpanElement;
  title.style.transform = 'scale(1)';
  title.style.left = `${e.clientX}px`;
  title.style.top = `${e.clientY}px`;
  title.innerText = voivodeshipName;

  const element = e.target as HTMLElement;
  const symbol = element.getAttribute('data-symbol');
  const voivodeships = document.querySelectorAll('.voivodeship');
  const activeVoivodeship = [...voivodeships].filter(voivodeship => {
    return voivodeship.getAttribute('data-symbol') == symbol;
  });
  activeVoivodeship[0].classList.add('active');
}

const handleTitleInvisible = () => {
  const voivodeships = document.querySelectorAll('.voivodeship');
  voivodeships.forEach(voivodeship => {
    voivodeship.classList.remove('active');
  })
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
          v-for="voivodeship in voivodeshipsData" :key="voivodeship.id" :d="voivodeship.points"
          v-bind:data-symbol="voivodeship.symbol">
        </path>
      </svg>
      <span id="title" class="title"></span>
      <div v-for="voivodeship in voivodeshipsData" :key="voivodeship.id" v-bind:id="`POL-${voivodeship.id}`"
        class="chernoffFace">
        <img v-for="face in voivodeship.face" v-on:mouseover="(e) => handleTitleVisible(e, voivodeship.name)"
          v-on:mouseleave="() => handleTitleInvisible()" v-on:click="() => handleModal(voivodeship)" v-bind:src="face"
          :data-symbol="voivodeship.symbol" alt="">
      </div>
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
      min-width: 700px;
      min-height: 700px;
      fill: $darkColor;
      stroke: $secondaryColor;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 4px;
    }

    .voivodeship {
      position: relative;
      transition-duration: .4s;

      &:hover {
        fill: $secondaryColor;
        cursor: pointer;
      }

      &.active {
        fill: $secondaryColor;
        cursor: pointer;
      }
    }

    .chernoffFace {
      img {
        position: absolute;
        transform: scale(.7);

        &:hover {
          cursor: pointer;
        }

        &:hover .voivodeship {
          fill: $secondaryColor;
          cursor: pointer;
        }
      }

      &#POL-0,
      &#POL-1,
      &#POL-2,
      &#POL-3,
      &#POL-4,
      &#POL-5,
      &#POL-6,
      &#POL-7,
      &#POL-8,
      &#POL-9,
      &#POL-10,
      &#POL-11,
      &#POL-12,
      &#POL-13,
      &#POL-14,
      &#POL-15 {
        position: absolute;

      }

      &#POL-0 {
        top: 90px;
        left: 420px;

      }

      &#POL-1 {
        top: 50px;
        left: 220px;
      }

      &#POL-2 {
        top: 400px;
        left: 110px;
      }

      &#POL-3 {
        top: 110px;
        left: 50px;
      }

      &#POL-4 {
        top: 270px;
        left: 30px;
      }

      &#POL-5 {
        top: 280px;
        left: 170px;
      }

      &#POL-6 {
        top: 180px;
        left: 260px;
      }

      &#POL-7 {
        top: 460px;
        left: 300px;
      }

      &#POL-8 {
        top: 340px;
        left: 320px;
      }

      &#POL-9 {
        top: 240px;
        left: 420px;
      }

      &#POL-10 {
        top: 440px;
        left: 420px;
      }

      &#POL-11 {
        top: 160px;
        left: 560px;
      }

      &#POL-12 {
        top: 390px;
        left: 560px;
      }

      &#POL-13 {
        top: 540px;
        left: 520px;
      }

      &#POL-14 {
        top: 460px;
        left: 210px;
      }

      &#POL-15 {
        top: 550px;
        left: 400px;
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
    z-index: 100;
  }
}
</style>