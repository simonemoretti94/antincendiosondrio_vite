<script>
import { state } from '/state.js';
import loginpage from './subcomponents/login.vue';
import shifts from './subcomponents/shifts.vue';

export default {
    name: 'appMain',
    //emits: [''],
    components: { //imported components 
        loginpage,
        shifts,

    },
    data() { //variables, bool, array, objects and so on

        return {
            state,
        }
    },
    methods: { //functions; all kind of manipulations

    },
    computed: { // computed properties are cached based on their reactive dependencies
        //return example this.value1 + this.value2;

    },
    mounted() { //Run code after DOM's initial rendering
        //console.log(state.calendar);
    },
    watch: { //triggers a function whenever a reactive property changes

    },
}
</script>

<template>

    <loginpage v-if="!state.found"></loginpage>
    <shifts v-if="state.found"></shifts>

</template>

<style scoped></style>