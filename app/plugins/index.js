require('./fonticon')
require('./navigator')

import Vue from 'nativescript-vue'

Vue.registerElement('CardView',() => require('@nstudio/nativescript-cardview').CardView)
Vue.registerElement('CheckBox',() => require('@nstudio/nativescript-checkbox').CheckBox,
  {
    model: {
      prop: 'checked',
      event: 'checkedChange'
    }
  }
)
Vue.registerElement('Fab',() => require('@nstudio/nativescript-floatingactionbutton').Fab)
Vue.registerElement('Carousel', () => require('nativescript-carousel').Carousel)
Vue.registerElement('Gradient', () => require('nativescript-gradient').Gradient)
Vue.registerElement("ImageSwipe", () => require("nativescript-image-swipe/image-swipe").ImageSwipe)
Vue.registerElement("Ripple",() => require("nativescript-ripple").Ripple)
Vue.registerElement("NSSegmentView", () => require("nativescript-segment-view").NSSegmentView)
Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)

import TextViewPlugin from 'nativescript-material-textview/vue'
Vue.use(TextViewPlugin)

import Pager from 'nativescript-pager/vue'
Vue.use(Pager)

import RadListView from "nativescript-ui-listview/vue"
Vue.use(RadListView)

import NSVueShadow from 'nativescript-vue-shadow'
Vue.use(NSVueShadow)