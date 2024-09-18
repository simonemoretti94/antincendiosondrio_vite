<script>
import { state } from '/state.js';

export default {
    name: 'shiftsimage',
    data() {
        return {
            state,
        }
    },
    methods: {
        makeImg() {
            const divs = document.getElementById('imgs');

            const tempImg = `
        <img src="/months/${state.month_image}" alt="${state.month_image}">
        `;

            console.log(divs);

            divs.innerHTML = tempImg;
        },
    },
    mounted() {
        makeImg();
    },
}

</script>

<template>
    <div id="imgs">

    </div>
</template>