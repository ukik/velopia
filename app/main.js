require('./plugins')
require('./mixins')

import Vue from 'nativescript-vue'
import App from './components/App'
import store from './store'

// import { setCssFileName } from "tns-core-modules/application";
// setCssFileName("app.scss");

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

import _ from "lodash"
Vue.prototype._ = _

import FontIcon from './components/FontIcon.vue'
Vue.component(FontIcon.name, FontIcon)


Vue.component("RippleCard", () => import(/* webpackChunkName: "dashboard" */ '@/components/RippleCard'))

new Vue({
	name:"52",
	store,
	render: h => h('frame', [h(App)])
}).$start()
