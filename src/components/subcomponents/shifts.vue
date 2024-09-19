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

            //handles closing img
            closeBtn: false,

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
            this.selectedMonth = null;
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

            //console.log(this.imgPath, typeof this.imgPath);


            /**
             * table handler
             */
            this.selectedMonth = state.calendar.find(element => element.month === this.monthImage);
            if (this.selectedMonth && this.selectedMonth.schedule) {
                this.user = state.userData[2]; // 'simone'
                //console.log('user: ', this.user);
                //console.log('month: ', this.selectedMonth.schedule[0]);
            }
        },
        nameSwitcher(name) {
            if (name == 'rosarios') { return 'scerra' }
            else if (name == 'rosariob') { return "buttice'" }
            else { return name };
        },
        cellOutput(name) {
            let tempName = '';

            if (name == state.userData[2]) {
                if (name == 'rosarios') { tempName = 'scerra' }
                else if (name == 'rosariob') { tempName = "buttice'" }
                else { tempName = name };

                tempName = '<b><u>' + tempName + '</u></b>';
                //tempName = '<u>' + tempName + '</u>';
                //console.log('tempname: ', tempName);
                return tempName;
            }
            else {
                if (name == 'rosarios') { tempName = 'scerra' }
                else if (name == 'rosariob') { tempName = "buttice'" }
                else { tempName = name };

                //console.log('name: ', tempName);
                return tempName;
            }
        },
    },
    watch: {
        monthImage(newValue, oldValue) {
            if (newValue != null) {
                this.loadImage();
            }
        }
    },
}
</script>

<template>
    <div class="ms-2 mt-2">
        <h4 id="h4_greetings">Ciao <span class="text-capitalize">{{ nameSwitcher(state.userData[2]) }}</span>!</h4>
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
        <span @click="this.monthImage = null, this.closeBtn = true">Chiudi <i class="fa fa-solid fa-close"></i></span>
    </div>
    <div v-if="this.selectedMonth">
        <div class="table-responsive w-100">
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
                            <div class="day">
                                <span v-html="cellOutput(shift.dayShift[0])"></span>
                                <span v-html="cellOutput(shift.dayShift[1])"></span>
                            </div>
                        </td>
                        <td>
                            <div class="night">
                                <span v-html="cellOutput(shift.nightShift[0])"></span>
                                <span v-html="cellOutput(shift.nightShift[1])"></span>
                            </div>
                        </td>
                        <td :class="{ 'ps': shift.psShift[0] }">
                            <span>{{ shift.psShift[0] ? shift.psShift[0] : '-' }}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-3" :class="{ 'd-none': !shift.psShift[0] }"
                    v-for="(shift, index) in this.selectedMonth.schedule">
                    <span>{{ index + 1 }} - </span>
                    <span v-html="cellOutput(shift.psShift[0])"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
img#loaded_img {
    width: 100%;
    position: relative
}

img#loaded_img+span {
    position: absolute;
    right: 10px;
    top: 110px;
    cursor: pointer;

    color: red;
    font-size: medium;
    font-weight: 600;

    background-color: white;
    border: solid 1px black;
    border-radius: 10px;
    box-shadow: -1px -1.5px black;

    padding: .1rem .25rem;


    @media screen and (max-width: 450px) {
        top: 100px;
    }

    @media screen and (max-width: 350px) {
        top: 105px;
        font-size: small;
    }
}

img#loaded_img+span:hover {
    transform: scale(.9);
    color: white;
    background-color: red;
}

.table-responsive {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    max-height: 350px;
    overflow-y: scroll;
}

table {
    width: 100%;
    table-layout: fixed;
    border-collapse: separate !important;
}

th,
td {
    word-wrap: break-word;

    @media screen and (max-width: 576px) {
        padding: .25rem !important;
    }
}

@media screen and (max-width: 576px) {

    th:last-child,
    td:last-child {
        display: none;
    }
}

th:first-child,
td:first-child {
    width: 10%;

    @media screen and (max-width: 576px) {
        width: 15%;
    }

    @media screen and (max-width: 456px) {
        font-size: small;
    }
}

th:nth-child(2),
th:nth-child(3),
td:nth-last-child(2),
td:nth-child(3) {
    width: 40%;

    @media screen and (max-width: 576px) {
        width: calc((100% - 15%) / 2);
    }
}

th:last-child,
td:last-child {
    width: 10%;

    @media screen and (max-width: 576px) {
        display: none;
    }
}

@media screen and (max-width: 576px) {

    th:last-child,
    td:last-child {
        display: none;
    }
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

.ps {
    background-color: #fbec99;

    >span {
        font-size: x-small;
    }
}

.d-none-500 {
    @media screen and (max-width: 500px) {
        display: none;
    }
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

        @media screen and (max-width: 576px) {
            font-size: small;
        }

        @media screen and (max-width: 360px) {
            font-size: x-small;
        }
    }

    @media screen and (max-width: 768px) {
        width: 80%;
    }

    @media screen and (max-width: 576px) {
        width: 100%;
    }
}
</style>