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
                //this.createMonth();
            }
            else {
                console.log('some value is empty!');
            }
        },
        createMonth() {
            const monthName = this.month_select;
            const days = parseInt(this.month_days, 10);

            // Controlla se il mese esiste già
            const existingMonth = state.calendar.find(month => month.month === monthName);

            if (!existingMonth) {
                // Crea un nuovo mese con il numero di giorni specificato
                const newMonth = {
                    month: monthName,
                    days: days,
                    schedule: Array.from({ length: days }, (_, index) => ({
                        day: index + 1,
                        dayShift: ['', ''],
                        nightShift: ['', '']
                    }))
                };

                // Aggiungi il nuovo mese al calendario
                state.calendar.push(newMonth);

                console.log('from Form -> createMonth(): ', state.calendar);
            }
            else {
                alert('month: ', this.month_select, ' already exists!');
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
        <div class="d-flex justify-content-center">
            <button class="btn btn-primary" @click="formSubmit()">submit</button>
        </div>
        <!-- <p>{{ combinedValues }}</p> -->
    </div>

    <!-- input table -->
    <div v-if="!this.monthInfoContainer"
        v-for="(day, index) in state.calendar.find(month => month.month === month_select)?.schedule || []" :key="index"
        class="container">
        <div class="col-12 d-flex">
            <div class="col-6 d-flex flex-column justify-content-center p-1">
                <div class="day b-rad-shared">
                    <p>Day {{ index + 1 }}</p>
                    <input type="text"
                        v-model="state.calendar.find(month => month.month === month_select).schedule[index].dayShift[0]">
                    <small>Name 1</small>
                    <input type="text"
                        v-model="state.calendar.find(month => month.month === month_select).schedule[index].dayShift[1]">
                    <small>Name 2</small>
                </div>
            </div>
            <div class="col-6 d-flex flex-column justify-content-center p-1">
                <div class="night b-rad-shared">
                    <p>Night {{ index + 1 }}</p>
                    <input type="text"
                        v-model="state.calendar.find(month => month.month === month_select).schedule[index].nightShift[0]">
                    <small>Name 1</small>
                    <input type="text"
                        v-model="state.calendar.find(month => month.month === month_select).schedule[index].nightShift[1]">
                    <small>Name 2</small>
                </div>
            </div>
        </div>
        <hr>
        <hr>
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

.day {
    background-color: #53852C;
}

.night {
    background-color: #E57D36;
}

.b-rad-shared {
    border-radius: 6px;
}

div.day input,
div.night input {
    width: 100%;
}
</style>