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

            formReady: false,
        }
    },
    mounted() {

    },
}
</script>

<template>
    <div class="container-fluid">
        <div class="container">
            <p>What's the month's name?</p>
            <select name="month_select" id="month_select">
                <option selected disabled>2024</option>
                <option value="november_2024">november_2024</option>
                <option value="december_2024">december_2024</option>
                <option selected disabled>old 2024...</option>
            </select>
            <hr class="my-1">
            <select name="month_days" id="month_days">
                <option selected disabled>number of days</option>
                <option value="31">31</option>
                <option value="31">30</option>
                <option value="31">29</option>
                <option value="31">28</option>
            </select>
            <br>
            <small>Select above n days</small>
            <hr>
        </div>
        <form action="input_form" method="get" class="col-xl-3 col-lg-4 col-md-12 col-sm-12">
        </form>
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