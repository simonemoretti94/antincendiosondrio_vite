<script>
import { state } from '/state.js';
//import * from '';

export default {
  name: 'appHeader',
  //emits: [''],
  components: { //imported components 
    //*,

  },
  data() { //variables, bool, array, objects and so on

    return {}
  },
  methods: { //functions; all kind of manipulations
    updateDateTime() {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0'); // I mesi in JavaScript sono indicizzati da 0 (gennaio) a 11 (dicembre)
      const year = now.getFullYear();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      const dateString = `${day}/${month}/${year}`;
      const timeString = `${hours}:${minutes}:${seconds}`;

      document.getElementById('currentDateTime').innerHTML = dateString + '<br>' + timeString;

    }
  },
  mounted() {
    // Aggiorna la data e l'ora ogni secondo
    setInterval(this.updateDateTime, 1000);

    // Aggiorna la data e l'ora immediatamente quando la pagina viene caricata
    this.updateDateTime();
  },
}
</script>

<template>
  <header>
    <div class="w-75 ms-2">
      <img id="logo" src="/icons/logo.jpg" alt="logo">
      <span>antincendio sondrio<small><sup>&copy;</sup></small></span>
    </div>
    <p id="currentDateTime">ciao</p>
  </header>
</template>

<style scoped>
header {
  height: 60px;
  background: linear-gradient(-45deg, grey, white, white);
  border-bottom: .3px solid rgb(183, 183, 183);
  display: flex;
  align-items: center;

  >div {
    position: relative;

    & img#logo {
      width: 30px;
      height: 30px;

    }

    & span {
      color: #043b66;
      font-size: x-large;
      font-weight: 600;

      @media screen and (max-width: 450px) {
        font-size: medium;
      }
    }
  }

  p#currentDateTime {
    position: absolute;
    top: 20px;
    right: 10px;

    text-align: center;
    font-size: small;

    @media screen and (max-width: 350px) {
      font-size: x-small;
    }
  }
}
</style>