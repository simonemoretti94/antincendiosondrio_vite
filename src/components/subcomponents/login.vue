<script>
import { state } from '/state.js';

export default {
    name: 'loginpage',
}
</script>

<template>
    <div class="container-fluid d-flex justify-content-center">
        <div id="div-form">
            <form id="login_form" method="get">
                <p class="text-center text-dark" style="font-weight: 500;">Inserisci le tue credenziali</p>
                <div class="d-flex justify-content-center">
                    <input type="text" name="username" id="username" class="rounded-1 me-1 text-center w-auto" value=""
                        required>
                    <small for="username" class="d-block text-center">Username</small>
                </div>
                <hr>
                <div class="d-flex justify-content-center">
                    <input type="text" name="password" id="password" class="rounded-1 me-1 text-center " value=""
                        required>
                    <small for="password" class="d-block text-center">Password</small>
                </div>
                <hr>
                <div class="mt-1 d-flex justify-content-center">
                    <button id="form_button" type="submit" class="btn btn-primary m-auto">Invia</button>
                </div>
            </form>
            <small class="text-center" style="font-size: 10px;">*ogni dato va inserito in minuscolo senza
                spazi</small>
        </div>
    </div>
</template>

<style scoped>
div#div-form {
    width: 50%;

    border: solid .5px grey;
    border-radius: 10px;

    padding: .5rem .25rem;
    margin: 1rem auto;



    @media screen and (max-width: 700px) {
        width: 75%;
    }

    @media screen and (max-width: 400px) {
        width: 100%;
    }

    >form {
        width: 100%;
    }
}
</style>