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

            //formReady: false,
            month_select: '',
            month_days: '',
        }
    },
    methods: {
        formSubmit() {
            if (this.month_select && this.month_days) {
                console.log('month: ', this.month_select, 'n days: ', this.month_days);
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
    }
}
</script>

<template>
    <div class="container">
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