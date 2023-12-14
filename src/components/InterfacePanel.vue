<script setup lang="ts">
import ChartSettings from './chart/ChartSettings.vue';
import Interface from './Interface.vue';
import { useAppStore } from '../stores/app';

const appStore = useAppStore();
const { isChartVisible } = appStore;

const handleChangePanel = (e: MouseEvent, chart: boolean) => {
    const menuOptions = document.querySelectorAll('.interface-option');
    menuOptions.forEach(menuOption => menuOption.classList.remove('active'));

    const clickedOption = e.target as HTMLElement;
    clickedOption.classList.add('active');

    isChartVisible.value = chart;
}

</script>
<template>
    <section class="panel">
        <div class="miniMenu">
            <button data-id="interface" v-on:click="(e) => handleChangePanel(e, false)"
                class="interface-option active">Twarze</button>
            <button data-id="chart" v-on:click="(e) => handleChangePanel(e, true)" class="interface-option">Wykres</button>
        </div>
        <hr>
        <ChartSettings v-if="isChartVisible.value" />
        <Interface v-else />
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

        .interface-option {
            font-size: 3vmin;
            font-family: $fontDecorative;
            transition-duration: .4s;
            background-color: transparent;
            border: none;

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