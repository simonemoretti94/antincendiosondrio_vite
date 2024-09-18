<script>
import { state } from '/state.js';

export default {
    name: 'pageform',
    //emits: [''],
    components: { //imported components 
        //*,

    },
    data() { //variables, bool, array, objects and so on

        return {
            state,

            // getting infos about new month
            month_select: '',
            month_days: 0,

            //making infos disappearing
            monthInfoContainer: true,

            //making table form container appear
        }
    },
    methods: {
        formSubmit() {
            this.month_days = parseInt(this.month_days);
            if (this.month_select && this.month_days) {
                console.log('month: ', this.month_select, 'n days: ', this.month_days, typeof this.month_days);

                setTimeout(() => {
                    this.monthInfoContainer = false;
                }, 3000);
            }
            else {
                console.log('some value is empty!');
            }
        },
    },
    computed: {
        combinedValues() {
            return this.month_select + ' , ' + this.month_days;
        }
    },
    mounted() {

    }
}
</script>

<template>

    <!-- month infos -->
    <div v-if="this.monthInfoContainer" class="container">
        <form action="input_form" method="get" class="col-md-6 col-sm-6 text-center">

            <p>What's the month's name?</p>
            <select name="month_select" id="month_select" v-model="month_select">
                <option selected disabled>2024</option>
                <option value="november_2024">november_2024</option>
                <option value="december_2024">december_2024</option>
                <option selected disabled>old 2024...</option>
            </select>
            <hr class="my-1">
            <select name="month_days" id="month_days" v-model="month_days">
                <option selected disabled>number of days</option>
                <option value="31">31</option>
                <option value="31">30</option>
                <option value="31">29</option>
                <option value="31">28</option>
            </select>
            <br>
            <small>Select above n days</small>
            <hr>
        </form>
        <button class="btn btn-primary" @click="formSubmit()">submit</button>
        <p>{{ combinedValues }}</p>
    </div>

    <!-- input table -->
    <div class="container">
        <div v-for="day in this.month_days">
            <div class="col-12 d-flex">
                <div class="col-6 d-flex flex-column justify-content-center px-1">
                    <p>Day:</p>
                    <input type="text">
                    <small>Name 1</small>
                    <input type="text">
                    <small>Name 2</small>
                </div>
                <div class="col-6 d-flex flex-column justify-content-center px-1">
                    <p>Night:</p>
                    <input type="text">
                    <small>Name 1</small>
                    <input type="text">
                    <small>Name 2</small>
                </div>
            </div>
            <hr>
            <hr>
        </div>
    </div>
</template>

<style scoped>
form#input_form {
    & div {
        margin: 1rem auto;
        padding: 1rem;
        border: solid .5px black;

    }

    & select {
        border-radius: 10px;
    }
}
</style>