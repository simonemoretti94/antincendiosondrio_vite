<script>
import { state } from '/state.js';

export default {
    name: 'offcanvas',
    data() {
        return {
            state,
        }
    },
}

</script>

<template>
    <small type="button" data-bs-toggle="offcanvas" data-bs-target="#Id1" aria-controls="Id1">
        Fogli ore
    </small>

    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="Id1"
        aria-labelledby="Enable both scrolling & backdrop">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="Enable both scrolling & backdrop">
                Azioni consigliate
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <p v-if="!state.mainDocuments" @click="state.mainDocuments = true, state.mainIndex = false">Ore lavorate</p>
            <p>Documenti autocompilati</p>
        </div>
    </div>

</template>

<style scoped>
small {
    color: red;
    text-decoration: underline;
}
</style>