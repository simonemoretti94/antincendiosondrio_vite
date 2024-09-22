<script>
import { state } from '/state.js';

export default {
    name: 'offcanvas',
    data() {
        return {
            state,
        }
    },
    methods: {
        // offCanvasHide(){
        //     let offcanvasElement = this.$refs.offcanvas;
        //     let bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
        //     bsOffcanvas.hide();
        // },
        handleDocuments() {
            state.mainDocuments = true;
            state.mainIndex = false;
            let offcanvasElement = this.$refs.offcanvas;
            let bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
            bsOffcanvas.hide();
        },
        handleShifts() {
            state.mainDocuments = false;
            state.mainIndex = true;
            let offcanvasElement = this.$refs.offcanvas;
            let bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
            bsOffcanvas.hide();
        },
        handleShiftsAdmin() {
            state.mainDocuments = false;
            state.mainIndex = false;
            let offcanvasElement = this.$refs.offcanvas;
            let bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
            bsOffcanvas.hide();
        }
    }
}

</script>

<template>
    <div>
        <small type="button" data-bs-toggle="offcanvas" data-bs-target="#Id1" aria-controls="Id1">
            Fogli ore
        </small>

        <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="Id1"
            aria-labelledby="Enable both scrolling & backdrop" ref="offcanvas">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="Enable both scrolling & backdrop">
                    Azioni consigliate
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div v-if="!state.mainDocuments">
                    <p @click="handleDocuments">Documenti autocompilati</p>
                    <hr>
                </div>
                <div class="d-none">
                    <p>Ore lavorate</p>
                    <hr>
                </div>
                <div v-if="!state.mainIndex">
                    <p @click="handleShifts" style="color: red;">Pagina principale</p>
                    <hr>
                </div>
                <div v-if="state.isAdmin">
                    <p @click="handleShiftsAdmin" style="color: red;">Fogli ore operatori</p>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
p:hover {
    cursor: pointer;
}

small {
    color: red;
    text-decoration: underline;
}
</style>