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
        }
    },
    //methods: {
    /*downloadPDF() {
        const doc = new jsPDF();
        const img = new Image();
        img.src = 'https://raw.githubusercontent.com/simonemoretti94/assets.io/main/assets/antincendiosondrio/img/logo/table_logo.png';
        //img.src = '/icons/table_logo.png';
        img.onload = function () {
            doc.addImage(img, 'PNG', 10, 30, 30, 20); // Regola le coordinate e le dimensioni secondo necessità
            autoTable(doc, {
                html: 'table',
                startY: 40, // Imposta la posizione di inizio della tabella sotto l'immagine
                headStyles: {
                    fillColor: [255, 255, 255], // Colore di sfondo dell'intestazione
                    textColor: [0, 0, 0], // Colore del testo dell'intestazione
                    fontStyle: 'bold' // Stile del testo dell'intestazione
                }
            });
            doc.save('tabella.pdf');
        };
    },*/
    methods: {
        downloadPDF() {
            const doc = new jsPDF();
            const img = new Image();
            img.src = 'https://raw.githubusercontent.com/simonemoretti94/assets.io/main/assets/antincendiosondrio/img/logo/table_logo.png';
            img.onload = function () {
                autoTable(doc, {
                    html: 'table',
                    startY: 40,
                    headStyles: {
                        fillColor: [255, 255, 255],
                        textColor: [0, 0, 0],
                        fontStyle: 'bold'
                    }
                });
                doc.addImage(img, 'PNG', 15, 40, 32, 10); // x , y, width , height
                doc.save('tabella.pdf');
            };
        }
    }

}
</script>

<template>
    <div class="container-fluid">
        <div class="table-responsive my-2">

            <table class="table">
                <thead>
                    <tr>
                        <th colspan="2"><img id="table-logo" src="/public/icons/table_logo.png" alt="logo"></th>
                        <th colspan="6" class="border-lr text-center text-uppercase">riepilogo ore individuali
                            mensili<br>antincendio</th>
                        <th colspan="1"><small>mese/anno:<br><b>{{ state.workedCalendar[0].ita }}</b></small></th>
                    </tr>
                    <tr class="text-left">
                        <th colspan="4"><small>nome e cognome operatore:<br><i class="text-capitalize">{{
                            state.userData[4] }}</i></small></th>
                        <th colspan="5" class="border-lr"><small>indirizzo luogo di lavoro:<br><i>Ospedale di Sondrio
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
                    <tr class="text-center" v-for="(record, index) in state.workedCalendar[0].schedule" :key="index">
                        <td class="border-lr">{{ record.day }}</td>
                        <td class="border-lr">{{ record.dayShift.includes(state.userData[2]) ? '8:00' : '' }}</td>
                        <td class="border-lr">{{ record.dayShift.includes(state.userData[2]) ? '20:00' : '' }}</td>
                        <td class="border-lr">{{ record.nightShift.includes(state.userData[2]) ? '20:00' : '' }}</td>
                        <td class="border-lr">{{ record.nightShift.includes(state.userData[2]) ? '8:00' : '' }}</td>
                        <td>{{ record.dayShift.includes(state.userData[2]) ? 12 : '' }}</td>
                        <td class="border-lr">{{ record.nightShift.includes(state.userData[2]) ? 12 : '' }}</td>
                        <td class="border-lr"></td>
                        <td class="border-lr"></td>
                    </tr>
                </tbody>
            </table>
            <button class="btn btn-primary" @click="downloadPDF">Scarica PDF</button>
        </div>
    </div>


</template>

<style scoped>
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