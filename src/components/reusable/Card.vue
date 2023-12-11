<script setup lang="ts">
import { defineProps } from 'vue';
const { title, content, data } = defineProps(['title', 'content', 'data']);

</script>
<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <div class="flex">
      <p>{{ content }} <strong>{{ data }}</strong> osób.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './../../assets/scss/variables.scss';

.card {
  background-color: $primaryColor;
  background-image: url('./../../assets/img/map.png');
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-blend-mode: luminosity;
  border-radius: 5vmin 0 5vmin 0;
  border: 2px solid $darkColor;
  padding: 2vmin;
  width: 45%;
  height: 30%;
  margin: 1vmin;
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);

  h2 {
    font-family: $fontDecorative;
    font-size: 2.5vmin;
    text-align: center;
    margin-bottom: .5vmin;
    padding-bottom: .5vmin;
    margin-top: -1vmin;
    color: white;
    border-bottom: 2px solid white;
  }

  .flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 75%;

    p {
      color: $bgColor;
      text-align: center;
      font-size: 1.8vmin;
      text-shadow: 1px 1px 0 $darkColor;

      strong {
        color: $secondaryColor;
        font-size: 2.2vmin;
      }
    }
  }
}
</style>