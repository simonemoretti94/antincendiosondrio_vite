<script>
import { state } from '/state.js';

export default {
    name: 'worked',
    //emits: [''],
    components: { //imported components 
        //*,

    },
    data() { //variables, bool, array, objects and so on

        return {}
    },
    methods: { //functions; all kind of manipulations

    },
    computed: { // computed properties are cached based on their reactive dependencies
        //return example this.value1 + this.value2;

    },
    created() { //Run code before DOM's initial rendering
        //return //example this.value1 + this.value2;

    },
    mounted() { //Run code after DOM's initial rendering
        /*axios
        .get('')
        .then((response) => {
           console.log(response);
        } )*/
    },
    watch: { //triggers a function whenever a reactive property changes

    },
}
</script>

<template>
    <h1>hi from worked page!</h1>
</template>

<style scoped></style>