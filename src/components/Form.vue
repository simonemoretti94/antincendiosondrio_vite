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
        }
    },
}
</script>

<template>
    <h1>hi from form component!</h1>
</template>

<style scoped></style>