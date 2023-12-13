<script setup lang="ts">
import { ref, reactive, onMounted, watch } from 'vue';
import Chart, { ChartItem } from 'chart.js/auto';
import { useAppStore } from '../stores/app';
import { DataParts, Stats } from '../ts/enums';

const appStore = useAppStore();
const { chartOptions } = appStore;
const { voivodeshipsNames, voivodeshipsDatasets } = defineProps(['voivodeshipsNames', 'voivodeshipsDatasets']);
const chartData = reactive<{ data: number[] }>({
    data: [],
});

const chart = ref();
const doughnutChart = ref<ChartItem | null>(null);



const checkChartSettings = () => {
    // if (chartOptions.parameter === DataParts.POPULATION) {
    //     if (chartOptions.function === Stats.AVERAGE) chartData.data = voivodeshipsPopulationAverage.value;
    //     else if (chartOptions.function === Stats.MEDIAN) chartData.data = voivodeshipsPopulationMedian.value;
    //     else if (chartOptions.function === Stats.MIN) chartData.data = voivodeshipsPopulationMin.value;
    //     else if (chartOptions.function === Stats.MAX) chartData.data = voivodeshipsPopulationMax.value;
    // } else if (chartOptions.parameter === DataParts.INTERNAL_MIGRATION) {
    //     if (chartOptions.function === Stats.AVERAGE) chartData.data = voivodeshipsInternalMigrationAverage.value;
    //     else if (chartOptions.function === Stats.MEDIAN) chartData.data = voivodeshipsInternalMigrationMedian.value;
    //     else if (chartOptions.function === Stats.MIN) chartData.data = voivodeshipsInternalMigrationMin.value;
    //     else if (chartOptions.function === Stats.MAX) chartData.data = voivodeshipsInternalMigrationMax.value;
    // } else if (chartOptions.parameter === DataParts.EXTERNAL_MIGRATION) {
    //     if (chartOptions.function === Stats.AVERAGE) chartData.data = voivodeshipsExternalMigrationAverage.value;
    //     else if (chartOptions.function === Stats.MEDIAN) chartData.data = voivodeshipsExternalMigrationMedian.value;
    //     else if (chartOptions.function === Stats.MIN) chartData.data = voivodeshipsExternalMigrationMin.value;
    //     else if (chartOptions.function === Stats.MAX) chartData.data = voivodeshipsExternalMigrationMax.value;
    // } else if (chartOptions.parameter === DataParts.BIRTHS) {
    //     if (chartOptions.function === Stats.AVERAGE) chartData.data = voivodeshipsBirthsAverage.value;
    //     else if (chartOptions.function === Stats.MEDIAN) chartData.data = voivodeshipsBirthsMedian.value;
    //     else if (chartOptions.function === Stats.MIN) chartData.data = voivodeshipsBirthsMin.value;
    //     else if (chartOptions.function === Stats.MAX) chartData.data = voivodeshipsBirthsMax.value;
    // } else {
    //     if (chartOptions.function === Stats.AVERAGE) chartData.data = voivodeshipsDeathsAverage.value;
    //     else if (chartOptions.function === Stats.MEDIAN) chartData.data = voivodeshipsDeathsMedian.value;
    //     else if (chartOptions.function === Stats.MIN) chartData.data = voivodeshipsDeathsMin.value;
    //     else if (chartOptions.function === Stats.MAX) chartData.data = voivodeshipsDeathsMax.value;
    // }
    // updateChart();
}

const createChart = () => {
    const backgroundColors = [
        '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#800080',
        '#008080', '#FFC0CB', '#8B4513', '#808080', '#800000', '#008000', '#000080', '#333333'
    ];
    const hoverBackgroundColors = [
        '#BB0000', '#00BB00', '#0000BB', '#BBBB00', '#BB00BB', '#00BBBB', '#BB8300', '#700070',
        '#006060', '#DDC0CB', '#6B4513', '#505050', '#600000', '#006000', '#000060', '#444444'
    ]
    const data = {
        labels: voivodeshipsNames,
        datasets: [
            {
                label: "PopulationAverage",
                data: voivodeshipsDatasets[0],
                backgroundColor: backgroundColors,
                hoverBackgroundColor: hoverBackgroundColors,
            },
            {
                label: "InternalMigrationAverage",
                data: voivodeshipsDatasets[1],
                backgroundColor: backgroundColors,
                hoverBackgroundColor: hoverBackgroundColors,
            },
            {
                label: "ExternalMigrationAverge",
                data: voivodeshipsDatasets[2],
                backgroundColor: backgroundColors,
                hoverBackgroundColor: hoverBackgroundColors,
            },
            {
                label: "BirthsAverage",
                data: voivodeshipsDatasets[3],
                backgroundColor: backgroundColors,
                hoverBackgroundColor: hoverBackgroundColors,
            },
            {
                label: "DeathsAverage",
                data: voivodeshipsDatasets[4],
                backgroundColor: backgroundColors,
                hoverBackgroundColor: hoverBackgroundColors,
            },
        ],
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
            },
            tooltip: {
                callbacks: {
                    label: (context: { formattedValue: string; }) => {
                        const value = context.formattedValue || '';
                        return ` ${value}`;
                    },
                },
            },
        },
    };

    chart.value = new Chart(<ChartItem>doughnutChart.value, {
        type: 'doughnut',
        data: data,
        options: options,
    });
}

const updateChart = () => {
    if (chart.value && chart.value.data) {
        console.log(chart.value);
        chart.value.data.datasets[0].data = chartData.data;
        // chart.value.update();
    }
};


watch(voivodeshipsDatasets, () => {
    if (voivodeshipsDatasets.length !== 0) createChart();
});

</script>
<template>
    <section class="chart">
        <canvas id="chart" ref="doughnutChart"></canvas>
    </section>
</template>

<style scoped lang="scss">
@import './../assets/scss/variables.scss';

.chart {
    width: 50vw;
}
</style>