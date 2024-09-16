<script>
import { state } from '/state.js';
//import * from '';

export default {
    name: 'appMain',
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
        return //example this.value1 + this.value2;

    },
    mounted() { //Run code after DOM's initial rendering
        console.log(state.calendar);
    },
    watch: { //triggers a function whenever a reactive property changes

    },
}
</script>

<template>
    <h1>hi guys!</h1>
</template>

<style scoped>
/*
    npm install bootstrap
    npm install jquery popper.js
    import 'bootstrap/dist/css/bootstrap.css
    import 'jquery'
    import 'popper.js'/main.js   import 'bootstrap'
    */
</style>