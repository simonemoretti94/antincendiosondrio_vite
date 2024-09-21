<script>
import { state } from '/state.js';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default {
    name: 'apptable',
    data() {

        return {
            state,
        }
    },
    props: {
        user: String,
    },
    methods: {
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

                const fileName = 'riepilogo_ore_' + name + '_' + surname;
                doc.save(fileName);
            };
        }
    },
    computed: { // computed properties are cached based on their reactive dependencies
        //value(){,
        //return example this.value1 + this.value2;
        //},

    },
    created() { //Run code before DOM's initial rendering

    },
    watch: { //triggers a function whenever a reactive property changes

    },
}
</script>

<template>
    <h2>{{ this.user }}</h2>
</template>

<style scoped></style>