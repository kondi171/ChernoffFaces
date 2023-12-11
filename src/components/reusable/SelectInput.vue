<script setup lang="ts">
import { defineProps } from 'vue';
import { DataParts } from './../../ts/enums';
const { id, title, selected } = defineProps(['id', 'title', 'selected']);
</script>
<template>
  <div class="form-group">
    <label :for="id">{{ title }}:</label>
    <select :id="id" :name="id">
      <option :selected="selected === DataParts.POPULATION" v-bind:value="DataParts.POPULATION">Populacja</option>
      <option :selected="selected === DataParts.INTERNAL_MIGRATION" v-bind:value="DataParts.INTERNAL_MIGRATION">Migracje
        Wewnętrzne</option>
      <option :selected="selected === DataParts.EXTERNAL_MIGRATION" v-bind:value="DataParts.EXTERNAL_MIGRATION">Migracje
        Zagraniczne</option>
      <option :selected="selected === DataParts.BIRTHS" v-bind:value="DataParts.BIRTHS">Urodzenia</option>
      <option :selected="selected === DataParts.DEATHS" v-bind:value="DataParts.DEATHS">Zgony</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
@import './../../assets/scss/variables.scss';

.form-group {
  margin-bottom: 1vmin;

  label {
    display: block;
    margin-bottom: 1vmin;
    margin-left: -3vmin;
    color: $darkColor;
    font-weight: bold;
    font-size: 2vmin;
  }

  select {
    padding: 1vmin;
    border: 1px solid $bgColor;
    border-radius: 1vmin;
    width: 25vmin;
    outline: none;
    cursor: pointer;
  }
}
</style>