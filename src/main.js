import Vue from 'nativescript-vue';

Vue.registerElement('StarRating', ()=> require('nativescript-star-ratings').StarRating);

const axios = require("axios");



import router from './router';

import './styles.scss';


// Uncomment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

new Vue({

  router,


}).$start();
