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

  },
  computed: { // computed properties are cached based on their reactive dependencies
    //return example this.value1 + this.value2;

  },
  created() { //Run code before DOM's initial rendering
    return //example this.value1 + this.value2;

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
  <header>
    <div class="w-75 ms-2">
      <img id="logo" src="/logo.jpg" alt="logo">
      <span>antincendio sondrio<small><sup>&copy;</sup></small></span>
    </div>
  </header>
</template>

<style scoped>
header {
  height: 60px;
  background: linear-gradient(-45deg, grey, white);
  border-bottom: .3px solid rgb(255, 255, 255);
  display: flex;
  align-items: center;

  >div {
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
}
</style>