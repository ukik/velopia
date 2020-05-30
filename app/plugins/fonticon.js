import Vue from 'nativescript-vue'

const { TNSFontIcon, fonticon } = require("nativescript-fonticon");

//TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  'fa': './assets/css/all.min.css',
  'fal': './assets/css/all.min.css',
  'far': './assets/css/all.min.css',
  'fas': './assets/css/all.min.css',
  'fab': './assets/css/all.min.css',

  'ion': './assets/css/ionicons.css',
  'mdi': './assets/css/material-design-icons.css',
};

// //TNSFontIcon.loadCss("./assets/app.css");
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon);