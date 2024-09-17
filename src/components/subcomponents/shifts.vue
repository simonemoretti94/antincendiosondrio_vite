<script>
import { state } from '/state.js';

export default {
    name: 'shifts',
    data() {
        return {
            state,
        }
    },
    mounted() {
        setTimeout(() => {
            document.getElementById('h4_greetings').remove();
        }, 3000);

    },
}
</script>

<template>
    <div class="ms-1">
        <h4 id="h4_greetings">Ciao {{ state.userData[2] }}!</h4>
        <div>
            <select name="shifts" id="shifts_select" class="p-1 rounded-2">
                <option selected disabled>2024</option>
                <option value="october_2024">Ottobre</option>
                <option value="september_2024">Settembre</option>
                <option value="august_2024">Agosto</option>
                <option disabled>old 2024...</option>
            </select>
            <br>
            <small class="ps-1">Seleziona un mese</small>
        </div>
    </div>
    <div id="month_image" class="container my-2">
    </div>
</template>