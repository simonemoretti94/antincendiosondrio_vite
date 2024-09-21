<script>
import { state } from '/state.js';
import apptable from './subcomponents/table.vue';

export default {
    name: 'appMainAdminDocuments',
    //emits: [''],
    components: { //imported components 
        apptable,

    },
    data() {
        return {
            state,

            // select handlers
            chosenMonth: '',
            chosenUser: '',
        }
    },
    methods: {
        updateTable(user) {
            // Logica per aggiornare il componente apptable
            this.$refs.appTable.updateTable(user);
        }
    },
    watch: {
        chosenUser(oldVal, newVal) {
            console.log(oldVal, newVal);
        },
    },
}
</script>

<template>
    <div class="ms-2 my-2 d-flex justify-content-start">
        <div class="col-3 d-flex flex-column justify-content-between align-items-center ">
            <small class="text-left">User:</small>
            <select name="selectAdminUser" id="selectAdmin" v-model="this.chosenUser"
                class="p-1 rounded-2 text-left text-capitalize">
                <option selected disabled>Select a user</option>
                <option v-for="(user, index) in state.users" :value="user[2]">{{ index + 1 }} - {{ user[4] }}</option>
            </select>
        </div>
        <!-- <div class="col-3 d-flex flex-column justify-content-center align-items-center">
            <small class="text-left">Month:</small>
            <select name="selectAdminMonth" id="selectAdmin" v-model="this.chosenMonth" class="p-1 rounded-2 text-left">
                <option selected disabled>2024</option>
                <option v-for="(month, index) in state.workedCalendar" :value="month.month">{{ index + 1 }} - {{
                    month.month }}</option>
                <option selected disabled>Old 2024...</option>
            </select>
        </div> -->
    </div>

    <div class="container-fluid mt-2 mb-1">
        <h6>A causa di problemi di reattività, cambia pagina prima di selezionare un diverso utente, altrimenti verranno
            forniti al nuovo operatore l'ammontare ore di quello selezionato in precedenza</h6>
    </div>

    <div class="container-fluid">
        <hr>
        <div v-for="(month, index) in state.workedCalendar" class="accordion" :id="'accordionExample' + index">
            <div class="accordion-item">
                <h2 class="accordion-header" :id="'heading' + index">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        :data-bs-target="'#collapse' + index" aria-expanded="true" :aria-controls="'collapse' + index">
                        {{ month.month }}
                    </button>
                </h2>
                <div :id="'collapse' + index" class="accordion-collapse collapse show"
                    :aria-labelledby="'heading' + index" :data-bs-parent="'#accordionExample' + index">
                    <div class="accordion-body">
                        {{ month.month }} worked hour papers

                        <div v-if="this.chosenUser">
                            <apptable ref="appTable" :times="state.workedCalendar.length" :user="this.chosenUser"
                                :month="month">
                            </apptable>
                        </div>
                    </div>
                </div>
            </div>

            <hr>
        </div>


    </div>
</template>

<style scoped></style>