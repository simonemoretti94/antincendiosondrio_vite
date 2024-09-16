<script>
import { state } from '/state.js';
import appHeader from './components/Header.vue';
import appFooter from './components/Footer.vue';
import appMain from './components/Main.vue';

export default {
  name: '*',
  //emits: [''],
  components: { //imported components 
    appHeader,
    appMain,
    appFooter,

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
  <appHeader></appHeader>
  <appMain></appMain>
  <appFooter></appFooter>
</template>

<style scoped>
/*
1. aggiunge file modificati

git add .
git commit -m "Commit message"

2. pusha le modifiche nel branch gh-pages

git subtree push --prefix dist origin gh-pages
*/
</style>