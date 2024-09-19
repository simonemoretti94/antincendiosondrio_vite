<script>
import { state } from '/state.js';

export default {
    name: 'loginpage',
    data() {
        return {
            state,
        }
    },

    mounted() {
        //console.log(state.users);

        document.getElementById('login_form').addEventListener('submit', function (event) {
            event.preventDefault(); // Previene l'invio del modulol

            state.userData = [];
            let tempString;

            let username = document.getElementById('username').value;

            let password = document.getElementById('password').value;

            if (username && password) {
                tempString = username + ' ' + password;
                //console.log('user data: ', tempString);
                state.userData.push(username);
                state.userData.push(password);
                //console.log(userData);
            }
            else {
                alert('some record is empty');
            }

            state.users.forEach(element => {
                if (element[0] == username && element[1] == password) {
                    state.found = true;
                    state.shiftsComponent = true;
                    if (username == 'simone_moretti') {
                        state.isAdmin = true;
                    }
                    state.userData.push(element[2]);
                    state.userData.push(element[3]);
                    //console.log(state.userData);
                    //console.log('element: ', element[0], ' user: ', username, ' real name: ', userData[2], ' surname: ', userData[3]);
                }
            });
            if (!state.found) { alert('user not found!'); }
        },
        )
    }
}
</script>

<template>
    <div class="container-fluid d-flex justify-content-center">
        <div id="div-form">
            <form id="login_form" method="get">
                <p class="text-center text-dark" style="font-weight: 500;">Inserisci le tue credenziali</p>
                <div class="d-flex justify-content-center">
                    <input type="text" name="username" id="username" class="rounded-1 me-1 text-center w-auto"
                        value="simone_moretti" required>
                    <small for="username" class="d-block text-center">Username</small>
                </div>
                <hr>
                <div class="d-flex justify-content-center">
                    <input type="text" name="password" id="password" class="rounded-1 me-1 text-center" value="simone94"
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