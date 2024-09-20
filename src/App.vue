<script>
import { state } from '/state.js';
import appHeader from './components/Header.vue';
import offcanvas from './components/subcomponents/offcanvas.vue';
import appFooter from './components/Footer.vue';
import appMainIndex from './components/MainIndex.vue';
import appMainDocuments from './components/MainDocuments.vue';

export default {
  name: '*',
  //emits: [''],
  components: { //imported components 
    appHeader,
    offcanvas,
    appMainIndex,
    appMainDocuments,
    appFooter,

  },
  data() { //variables, bool, array, objects and so on

    return {
      state,
    }
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
  <offcanvas v-if="state.found"></offcanvas>
  <appMainIndex v-if="state.mainIndex && !state.mainDocuments"></appMainIndex>
  <appMainDocuments v-if="state.mainDocuments && !state.mainIndex"></appMainDocuments>
  <appFooter></appFooter>
</template>

<style scoped>
/*
hi guys!
*/
</style>