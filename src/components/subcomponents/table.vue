<script>
import { state } from '/state.js';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default {
    name: 'apptable',
    data() {

        return {
            state,

            //day and night hours cumulator
            dayHours: 0,
            nightHours: 0,
            psHours: 0,

            //loop variable
            loopTimes: 0,
        }
    },
    props: {
        user: String,
        userObj: Object,
        month: Object,
        times: Number,
    },
    methods: {

        loadMonth() {

            this.dayHours = 0;
            this.nightHours = 0;
            this.psHours = 0;

            if (this.month && this.month.schedule) {
                //console.log(this.month, this.month.schedule);

                this.month.schedule.forEach((element, index) => {
                    if (element.nightShift.includes(this.user) && element.psShift.includes(this.user)) {
                        this.nightHours += 12;
                        this.dayHours += 6;
                    }
                    else if (element.dayShift.includes(this.user) && element.nightShift.includes(this.user)) {
                        this.dayHours += 12;
                        this.nightHours += 12;
                    }
                    else if (element.nightShift.includes(this.user)) {
                        this.nightHours += 12;
                    }
                    else if (element.dayShift.includes(this.user)) {
                        this.dayHours += 12;
                    }
                    else if (element.psShift.includes(this.user)) {
                        //this.psHours += 6;
                        this.dayHours += 6;
                    }
                    else {
                        //console.log('day ', index + 1, ' is without ', this.user);
                    }
                    console.log('day: ', index + 1, ' dayH: ', this.dayHours, ' nightH: ', this.nightHours);
                });
            } else {
                //console.log('No schedule found for the selected month');
            }

            //console.log('day: ', this.dayHours, ' night: ', this.nightHours, ' ps:', this.psHours);

        },
        downloadPDF(name, surname, month) {
            const doc = new jsPDF();
            const img = new Image();
            //img.src = 'https://raw.githubusercontent.com/simonemoretti94/assets.io/main/assets/antincendiosondrio/img/logo/table_logo.png';
            img.src = '/antincendiosondrio_vite/icons/table_logo.png';
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

                const fileName = 'riepilogo_ore_' + name + '_' + surname + '_' + month;
                doc.save(fileName);
            };
        },
        dayOrPs(record, inOrOut) {
            // in = 1, out = 0,
            const isUser = false;
            if (record.dayShift.includes(this.user)) {
                if (inOrOut) {
                    return '8:00';
                }
                else {
                    return '20:00';
                }
            }
            else if (record.psShift.includes(this.user)) {
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
        nHours(record) {
            if (record.dayShift.includes(this.user)) {
                return '12';
            }
            else if (record.psShift.includes(this.user)) {
                return '6';
            }
            else {
                return '';
            }
        },
    },
    mounted() {
        this.loopTimes = this.times;
        //console.log('month: ', this.month, ' user: ', this.user, ' times: ', this.loopTimes);
        this.loadMonth();
    },
}
</script>

<template>
    <!-- <h2 class="text-capitalize">{{ this.userObj[4] }}</h2>
    <hr class="my-1"> -->
    <div class="table-responsive my-2">

        <table class="table">
            <thead>
                <tr>
                    <th colspan="2"><img id="table-logo" src="/public/icons/table_logo.png" alt="logo"></th>
                    <th colspan="6" class="border-lr text-center text-uppercase">riepilogo ore individuali
                        mensili<br>antincendio</th>
                    <th colspan="1"><small>mese/anno:<br><b>{{ this.month.ita }}</b></small></th>
                </tr>
                <tr class="text-left">
                    <th colspan="4"><small>nome e cognome operatore:<br><i class="text-capitalize">{{
                        this.userObj[4] }}</i></small></th>
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
                <tr class="text-center" v-for="(record, index) in this.month.schedule" :key="index">
                    <td class="border-lr">{{ record.day }}</td>
                    <td class="border-lr">{{ dayOrPs(record, 1) }}</td>
                    <td class="border-lr">{{ dayOrPs(record, 0) }}</td>
                    <td class="border-lr">{{ record.nightShift.includes(this.user) ? '20:00' : '' }}
                    </td>
                    <td class="border-lr">{{ record.nightShift.includes(this.user) ? '8:00' : '' }}</td>
                    <td>{{ nHours(record) }}</td>
                    <td class="border-lr">{{ record.nightShift.includes(this.user) ? '12' : '' }}</td>
                    <td class="border-lr"></td>
                    <td class="border-lr"></td>
                </tr>
                <tr>
                    <td colspan="4" class="border-lr"></td>
                    <td colspan="1" class="text-center border-lr"><b>Sommano:</b></td>
                    <td colspan="1" class="text-center border-lr">{{ this.dayHours }}</td>
                    <td colspan="1" class="text-center border-lr">{{ this.nightHours }}</td>
                    <td colspan="2" class="text-left border-lr"><b>TOTALE ORE = </b>{{ this.dayHours +
                        this.nightHours }}</td>
                </tr>
                <tr>
                    <td colspan="9" style="height: 80px;">NOTE:</td>
                </tr>
            </tbody>
        </table>
        <button class="btn btn-primary" @click="downloadPDF(this.userObj[2], this.userObj[3], this.month.month)">Scarica
            PDF</button>
    </div>

</template>

<style scoped>
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