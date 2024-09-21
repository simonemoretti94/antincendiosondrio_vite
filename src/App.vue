<script>
import { state } from '/state.js';
import appHeader from './components/Header.vue';
import offcanvas from './components/subcomponents/offcanvas.vue';
import appFooter from './components/Footer.vue';
import appMainIndex from './components/MainIndex.vue';
import appMainDocuments from './components/MainDocuments.vue';
import appMainAdminDocuments from './components/MainAdminDocuments.vue';

export default {
  name: '*',
  //emits: [''],
  components: { //imported components 
    appHeader,
    offcanvas,
    appMainIndex,
    appMainDocuments,
    appMainAdminDocuments,
    appFooter,

  },
  data() { //variables, bool, array, objects and so on

    return {
      state,
    }
  },
}
</script>

<template>
  <appHeader></appHeader>
  <offcanvas v-if="state.found"></offcanvas>
  <appMainIndex v-if="state.mainIndex && !state.mainDocuments"></appMainIndex>
  <appMainDocuments v-if="state.mainDocuments && !state.mainIndex"></appMainDocuments>
  <appMainAdminDocuments v-if="!state.mainIndex && !state.mainDocuments && state.isAdmin"></appMainAdminDocuments>
  <appFooter></appFooter>
</template>

<style scoped>
/*
hi guys!
*/
</style>