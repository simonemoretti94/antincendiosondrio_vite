<script>
import { state } from '/state.js';

export default {
    name: 'shifts',
    data() {
        return {
            state,

            // handles chosen img
            monthImage: '',
            imgPath: '',

            // handles table
            selectedMonth: null,
            user: '',

        }
    },
    mounted() {
        setTimeout(() => {
            if (document.getElementById('h4_greetings')) {
                document.getElementById('h4_greetings').remove();
            }
        }, 3000);

    },
    methods: {
        loadImage() {
            /**
             * in sviluppo
             */
            //this.imgPath = 'http://localhost:5173/antincendiosondrio_vite/months/' + this.monthImage + '.jpg';

            /**
             * in produzione
             */
            //this.imgPath = 'https://simonemoretti94.github.io/antincendiosondrio_vite/months/' + this.monthImage + '.jpg';

            /**
             * from external assets
             */
            this.imgPath = 'https://raw.githubusercontent.com/simonemoretti94/assets.io/main/assets/antincendiosondrio/img/shifts/' + this.monthImage + '.jpg?raw=true';
            //https://raw.githubusercontent.com/simonemoretti94/assets.io/main/assets/antincendiosondrio/img/shifts/october_2024.jpg

            console.log(this.imgPath, typeof this.imgPath);


            /**
             * table handler
             */
            this.selectedMonth = state.calendar.find(element => element.month === this.monthImage);
            if (this.selectedMonth && this.selectedMonth.schedule) {
                this.user = state.userData[2]; // 'simone'
                console.log('user: ', this.user);
                console.log('month: ', this.selectedMonth.schedule[0]);
            }
        }
    },
    watch: {
        monthImage(newValue, oldValue) {
            this.loadImage();
        }
    },
}
</script>

<template>
    <div class="ms-2 mt-2">
        <h4 id="h4_greetings">Ciao {{ state.userData[2] }}!</h4>
        <div>
            <select name="shifts" id="shifts_select" class="p-1 rounded-2" v-model="this.monthImage">
                <option selected disabled>2024</option>
                <option value="october_2024">Ottobre</option>
                <option value="september_2024">Settembre</option>
                <option value="august_2024">Agosto</option>
                <option disabled>old 2024...</option>
            </select>
            <br>
            <small class="ps-1">Seleziona un mese</small>
        </div>
    </div>
    <div v-if="this.monthImage" id="month_image" class="container my-2">
        <img id="loaded_img" :src="this.imgPath" :alt="monthImage">
    </div>
    <div v-if="this.monthImage">
        <div class="table-responsive">
            <table class="table table-primary text-center">
                <thead>
                    <tr>
                        <th scope="col">Day</th>
                        <th scope="col">Turno Diurno</th>
                        <th scope="col">Turno Notturno</th>
                        <th scope="col">Ps</th>

                    </tr>
                </thead>
                <tbody>
                    <tr :class="{ 'bg-light': index % 2 === 0, 'bg-aqua': index % 2 !== 0 }"
                        v-for="(shift, index) in this.selectedMonth.schedule">
                        <td scope="row">{{ index + 1 }}</td>
                        <td>
                            <div class="day"><span>{{ shift.dayShift[0] }}</span><span>{{ shift.dayShift[1] }}</span>
                            </div>
                        </td>
                        <td>
                            <div class="night"><span>{{ shift.nightShift[0] }}</span><span>{{ shift.nightShift[1]
                                    }}</span></div>
                        </td>
                        <td>N/A</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<style scoped>
img#loaded_img {
    width: 100%;
}

.bg-aqua {
    background-color: #cfe2ff;
}

.day {
    background-color: #53852C;
}

.night {
    background-color: #E57D36;
}

td div {
    width: 60%;
    margin: auto auto;
    display: flex;
    justify-content: space-evenly;
    border: solid .5px black;
    border-radius: 6px;

    & span {
        text-transform: capitalize;
        color: white;
        text-shadow: 0 0 1px black;
        margin: auto .2rem;
    }
}
</style>