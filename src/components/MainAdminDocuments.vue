<script>
import { workedCalendar } from '../../shifts';
import { state } from '/state.js';

export default {
    name: 'appMainAdminDocuments',
    //emits: [''],
    components: { //imported components 
        //*,

    },
    data() { //variables, bool, array, objects and so on

        return {
            state,

            // select handlers
            chosenMonth: '',
            chosenUser: '',
        }
    },
    methods: { //functions; all kind of manipulations

    },
    computed: { // computed properties are cached based on their reactive dependencies
        //return example this.value1 + this.value2;

    },
    mounted() { //Run code after DOM's initial rendering
        /*axios
        .get('')
        .then((response) => {
           console.log(response);
        } )*/
    },
    watch: {
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
        <div class="col-3 d-flex flex-column justify-content-center align-items-center">
            <small class="text-left">Month:</small>
            <select name="selectAdminMonth" id="selectAdmin" v-model="this.chosenMonth" class="p-1 rounded-2 text-left">
                <option selected disabled>2024</option>
                <option v-for="(month, index) in state.workedCalendar" :value="month.month">{{ index + 1 }} - {{
                    month.month }}</option>
                <option selected disabled>Old 2024...</option>
            </select>
        </div>
    </div>
</template>

<style scoped></style>