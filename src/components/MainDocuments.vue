<script>
import { state } from '/state.js';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


export default {
    name: 'appMainDocuments',
    //emits: [''],
    components: { //imported components 
        //*,

    },
    data() { //variables, bool, array, objects and so on

        return {
            state,

            //month selector
            monthSelected: '',
            tempMonth: null,

            //infos
            h4SmallHide: false,

            //day and night hours cumulator
            dayHours: 0,
            nightHours: 0,
            psHours: 0,
        }
    },
    methods: {
        loadMonth() {
            this.dayHours = 0;
            this.nightHours = 0;
            this.psHours = 0;

            this.tempMonth = state.workedCalendar.find(element => element.month === this.monthSelected);
            if (this.tempMonth && this.tempMonth.schedule) {
                //console.log(this.tempMonth, this.tempMonth.schedule);
                this.tempMonth.schedule.forEach((element, index) => {
                    if (element.dayShift.includes(state.userData[2])) {
                        this.dayHours += 12;
                    } else if (element.nightShift.includes(state.userData[2])) {
                        this.nightHours += 12;
                    }
                    else if (element.psShift.includes(state.userData[2])) {
                        this.psHours += 6;
                    }
                    else {
                        //console.log('day ', index + 1, ' is without ', state.userData[2]);
                    }
                });
            } else {
                console.log('No schedule found for the selected month');
            }

            this.h4SmallHide = true;
        },
        downloadPDF(name, surname, month) {
            const doc = new jsPDF();
            const img = new Image();
            img.src = 'https://raw.githubusercontent.com/simonemoretti94/assets.io/main/assets/antincendiosondrio/img/logo/table_logo.png';
            img.onload = function () {
                autoTable(doc, {
                    html: 'table',
                    startY: 5,
                    margin: { top: 5 },
                    styles: {
                        fontSize: 8,
                        cellPadding: 2
                    },
                    headStyles: {
                        fillColor: [255, 255, 255],
                        textColor: [0, 0, 0],
                        fontStyle: 'bold'
                    }
                });
                doc.addImage(img, 'PNG', 15, 5, 32, 10); // x , y, width , height

                //console.log(state.workedCalendar[0].month, typeof state.workedCalendar[0].month);
                //console.log(name, surname, month);
                //console.log(fileName);
                //const fileName = 'riepilogo_ore_' + name + '_' + surname + '_' + month;

                const fileName = 'riepilogo_ore_' + name + '_' + surname;
                doc.save(fileName);
            };
        },
        dayOrPs(record, inOrOut) {
            // in = 1, out = 0,
            const isUser = false;
            if (record.dayShift.includes(state.userData[2])) {
                if (inOrOut) {
                    return '8:00';
                }
                else {
                    return '20:00';
                }
            }
            else if (record.psShift.includes(state.userData[2])) {
                if (inOrOut) {
                    return '14:00';
                }
                else {
                    return '20:00';
                }
            }
            else {
                return '';
            }

        },
    },
    mounted() {
    },
    watch: {
        monthSelected(newValue, oldValue) {
            if (newValue != null) {
                this.h4SmallHide = false;
                this.loadMonth();
            }
        },
        h4SmallHide(newValue, oldValue) {
            if (newValue == true) {

                setTimeout(() => {
                    this.h4SmallHide = false;
                }, 15000);
            }
        },
    }
}
</script>

<template>
    <div class="ms-2">
        <small class="d-block">Mese:</small>
        <select class="p-1 rounded-2 my-1 text-capitalize" name="workedShift" id="workedShift"
            v-model="this.monthSelected">
            <option selected disabled>2024</option>
            <option v-for="(element, index) in state.workedCalendar" :value="element.month">{{ element.ita }}</option>
        </select>
    </div>
    <div id="page-filler" v-if="!this.tempMonth" class="bg-secondary">
        <h3 class="text-center text-white">Utilizza il selettore 'mese' per accedere alla tabella pre-compilata
            relativa al
            mese selezionato oppure clicca su 'Fogli
            ore' per effettuare altre azioni</h3>
    </div>
    <div v-if="this.tempMonth">
        <h4 v-if="this.h4SmallHide" class="ms-2 my-1">Ruota il telefono <i class="fa fa-solid fa-rotate-left"></i>
            oppure
            scorri
            <i class="fa fa-solid fa-left-right"></i>
        </h4>
        <small v-if="this.h4SmallHide" class="ms-2 my-1">A piè di pagina troverai il pulsante per il download in formato
            .pdf</small>
        <div class="container-fluid media-700">
            <div class="table-responsive my-2">

                <table class="table">
                    <thead>
                        <tr>
                            <th colspan="2"><img id="table-logo" src="/public/icons/table_logo.png" alt="logo"></th>
                            <th colspan="6" class="border-lr text-center text-uppercase">riepilogo ore individuali
                                mensili<br>antincendio</th>
                            <th colspan="1"><small>mese/anno:<br><b>{{ this.tempMonth.ita }}</b></small></th>
                        </tr>
                        <tr class="text-left">
                            <th colspan="4"><small>nome e cognome operatore:<br><i class="text-capitalize">{{
                                state.userData[4] }}</i></small></th>
                            <th colspan="5" class="border-lr"><small>indirizzo luogo di lavoro:<br><i>Ospedale di
                                        Sondrio
                                        via Stelvio 25,
                                        23100 Sondrio</i></small></th>
                        </tr>
                        <tr class="text-center">
                            <th colspan="1"></th>
                            <th colspan="2" class="border-lr">servizio diurno</th>
                            <th colspan="2" class="border-lr">servizio notturno</th>
                            <th colspan="1" class="border-r-0"></th>
                            <th colspan="1" class="border-r-0"></th>
                            <th colspan="1" class="border-r-0"></th>
                            <th colspan="1"></th>
                        </tr>
                        <tr class="text-center">
                            <th>Giorno</th>
                            <th class="border-lr">entrata</th>
                            <th class="border-lr">uscita</th>
                            <th class="border-lr">entrata</th>
                            <th class="border-lr">uscita</th>
                            <th class="border-lr">totale ore<br>diurno</th>
                            <th class="border-lr">totale ore<br>notturno</th>
                            <th class="border-lr">luogo</th>
                            <th class="border-lr">note</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="text-center" v-for="(record, index) in tempMonth.schedule" :key="index">
                            <td class="border-lr">{{ record.day }}</td>
                            <td class="border-lr">{{ dayOrPs(record, 1) }}</td>
                            <td class="border-lr">{{ dayOrPs(record, 0) }}</td>
                            <!-- <td class="border-lr">{{ record.dayShift.includes(state.userData[2]) ? '8:00' : '' }}</td>
                            <td class="border-lr">{{ record.dayShift.includes(state.userData[2]) ? '20:00' : '' }}</td> -->
                            <td class="border-lr">{{ record.nightShift.includes(state.userData[2]) ? '20:00' : '' }}
                            </td>
                            <td class="border-lr">{{ record.nightShift.includes(state.userData[2]) ? '8:00' : '' }}</td>
                            <td>{{ record.dayShift.includes(state.userData[2]) ? 12 : '' }}</td>
                            <td class="border-lr">{{ record.nightShift.includes(state.userData[2]) ? 12 : '' }}</td>
                            <td class="border-lr"></td>
                            <td class="border-lr"></td>
                        </tr>
                        <tr>
                            <td colspan="4" class="border-lr"></td>
                            <td colspan="1" class="text-center border-lr"><b>Sommano:</b></td>
                            <td colspan="1" class="text-center border-lr">{{ this.dayHours }}</td>
                            <td colspan="1" class="text-center border-lr">{{ this.nightHours }}</td>
                            <td colspan="2" class="text-left border-lr"><b>TOTALE ORE = </b>{{ this.dayHours +
                                this.nightHours + this.psHours }}</td>
                        </tr>
                        <tr>
                            <td colspan="9" style="height: 80px;">NOTE:</td>
                        </tr>
                    </tbody>
                </table>
                <button class="btn btn-primary"
                    @click="downloadPDF(state.userData[2], state.userData[3]), state.workedCalendar[0].month">Scarica
                    PDF</button>
            </div>
        </div>
    </div>



</template>

<style scoped>
div#page-filler {
    min-height: calc(100vh - 150px);

    display: flex;
    justify-content: center;
    align-items: center
}

.media-700 {
    @media screen and (max-width: 700px) {
        overflow-x: scroll;
    }
}

table {
    border: solid 1px black;
}

img#table-logo {
    max-width: 150px;
    max-height: 60px;
}

.border-lr {
    border-left: solid .5px black;
    border-right: solid .5px black;
}

.border-l-0 {
    border-left: 0;
}

.border-r-0 {
    border-right: 0;
}
</style>