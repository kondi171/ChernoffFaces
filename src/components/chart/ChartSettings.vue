<script setup lang="ts">
import { useAppStore } from './../../stores/app';
import { DataParts, Stats } from './../../ts/enums';

const appStore = useAppStore();
const { setChartParameter, setChartFunction } = appStore;

const handleCheckParameter = (e: MouseEvent) => {
    const clickedEl = e.target;
    const radios = document.querySelectorAll('.parameter-label');
    radios.forEach(radio => radio.classList.remove('checked'));
    clickedEl!.classList.add('checked');
    setChartParameter(clickedEl!.dataset.id);
}

const handleCheckFunction = (e: MouseEvent) => {
    const clickedEl = e.target;
    const radios = document.querySelectorAll('.function-label');
    radios.forEach(radio => radio.classList.remove('checked'));
    clickedEl!.classList.add('checked');
    setChartFunction(clickedEl!.dataset.id);
}

</script>
<template>
    <section class="interface">
        <div class="configure-box">
            <h2>Wybierz parametr:</h2>
            <form class="container">
                <div :data-id="DataParts.POPULATION" @click="(e) => handleCheckParameter(e)"
                    class="parameter-label checked">Populacja
                </div>
                <div :data-id="DataParts.INTERNAL_MIGRATION" @click="(e) => handleCheckParameter(e)"
                    class="parameter-label">Migracje
                    Wewnętrzne</div>
                <div :data-id="DataParts.EXTERNAL_MIGRATION" @click="(e) => handleCheckParameter(e)"
                    class="parameter-label">
                    Migracje
                    Zagraniczne</div>
                <div :data-id="DataParts.BIRTHS" @click="(e) => handleCheckParameter(e)" class="parameter-label">
                    Urodzenia</div>
                <div :data-id="DataParts.DEATHS" @click="(e) => handleCheckParameter(e)" class="parameter-label">Zgony
                </div>
            </form>
        </div>
        <div class="configure-box">
            <h2>Wybierz funkcję:</h2>
            <form class="container">
                <div :data-id="Stats.AVERAGE" @click="(e) => handleCheckFunction(e)" class="function-label checked">Średnia
                </div>
                <div :data-id="Stats.MEDIAN" @click="(e) => handleCheckFunction(e)" class="function-label">Mediana</div>
                <div :data-id="Stats.MIN" @click="(e) => handleCheckFunction(e)" class="function-label">Wartość Minimalna
                </div>
                <div :data-id="Stats.MAX" @click="(e) => handleCheckFunction(e)" class="function-label">Wartość
                    Maksymalna</div>
            </form>
        </div>
    </section>
</template>
<style scoped lang="scss" >
@import './../../assets/scss/variables.scss';

.interface {
    width: 25vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .configure-box {
        background-color: $secondaryColor;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 2vmin;
        box-shadow: 1vmin 1vmin 2vmin 0 $supportColor;
        border: 2px solid $darkColor;
        padding: 4vmin;
        width: 22vw;

        h2 {
            color: $darkColor;
            font-size: 4vmin;
            font-family: $fontDecorative;
            width: 100%;
            margin-bottom: 2vmin;
            text-align: center;
            border-bottom: 2px solid $darkColor;
        }

        .container {
            display: flex;
            flex-direction: column;
            text-align: center;

            .function-label,
            .parameter-label {
                font-size: 3vmin;
                font-weight: bold;
                transition-duration: .4s;
                margin: .5vmin 0;
                color: $bgColor;
                text-shadow: .1vmin .1vmin .1vmin $darkColor,
                    -.1vmin -.1vmin .1vmin $darkColor,
                    -.1vmin .1vmin .1vmin $darkColor,
                    .1vmin -.1vmin .1vmin $darkColor;

                &:hover {
                    color: $primaryColor;
                    cursor: pointer;
                }

                &.checked {
                    transform: scale(1.2);
                    color: $primaryColor;
                }
            }
        }
    }
}
</style>