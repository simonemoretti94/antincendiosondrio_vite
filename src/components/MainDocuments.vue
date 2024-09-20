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
    methods: {
        downloadPDF() {
            const doc = new jsPDF();
            autoTable(doc, { html: 'table' });
            doc.save('tabella.pdf');
        }
    },
    computed: { // computed properties are cached based on their reactive dependencies
        //return example this.value1 + this.value2;

    },
    created() { //Run code before DOM's initial rendering
        //return //example this.value1 + this.value2;

    },
    mounted() { //Run code after DOM's initial rendering
        console.log(state.userData[4]);
    },
    watch: { //triggers a function whenever a reactive property changes

    },
}
</script>

<template>
    <h1>hi from main documents!</h1>
    <!-- <div class="container-fluid">
        <table>
            <thead>
                <tr>
                    <th>Giorno</th>
                    <th>Entrata Mattina</th>
                    <th>Uscita Mattina</th>
                    <th>Entrata Pomeriggio</th>
                    <th>Uscita Pomeriggio</th>
                    <th>Totale Ore</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(record, index) in state.workedCalendar[0].schedule" :key="index">
                    <td>{{ record.day }}</td>
                    <td>{{ record.dayShift.includes(state.userData[2]) ? '8:00' : '' }}</td>
                    <td>{{ record.dayShift.includes(state.userData[2]) ? '20:00' : '' }}</td>
                    <td>{{ record.nightShift.includes(state.userData[2]) ? '20:00' : '' }}</td>
                    <td>{{ record.nightShift.includes(state.userData[2]) ? '8:00' : '' }}</td>
                    <td>TEST TOT</td>
                </tr>
            </tbody>
        </table>
        <button @click="downloadPDF">Scarica PDF</button>
    </div> -->
    <div class="container-fluid">
        <div class="table-responsive">

            <table class="table table-primary">
                <thead class="text-center">
                    <tr>
                        <th colspan="1"></th>
                        <th colspan="2">servizio diurno</th>
                        <th colspan="2">servizio notturno</th>
                        <th colspan="1"></th>
                        <th colspan="1"></th>
                        <th colspan="1"></th>
                        <th colspan="1"></th>
                    </tr>
                    <tr>
                        <th>Giorno</th>
                        <th>entrata</th>
                        <th>uscita</th>
                        <th>entrata</th>
                        <th>uscita</th>
                        <th>totale ore<br>diurno</th>
                        <th>totale ore<br>notturno</th>
                        <th>luogo</th>
                        <th>note</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center" v-for="(record, index) in state.workedCalendar[0].schedule" :key="index">
                        <td>{{ record.day }}</td>
                        <td>{{ record.dayShift.includes(state.userData[2]) ? '8:00' : '' }}</td>
                        <td>{{ record.dayShift.includes(state.userData[2]) ? '20:00' : '' }}</td>
                        <td>{{ record.nightShift.includes(state.userData[2]) ? '20:00' : '' }}</td>
                        <td>{{ record.nightShift.includes(state.userData[2]) ? '8:00' : '' }}</td>
                        <td>{{ record.dayShift.includes(state.userData[2]) ? 12 : '' }}</td>
                        <td>{{ record.nightShift.includes(state.userData[2]) ? 12 : '' }}</td>
                        <td>luogo</td>
                        <td>note</td>
                    </tr>
                </tbody>
            </table>
            <button @click="downloadPDF">Scarica PDF</button>
        </div>
    </div>


</template>

<style scoped></style>