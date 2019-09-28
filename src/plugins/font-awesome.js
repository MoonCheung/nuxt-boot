import Vue from 'vue'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faRss,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedinIn,
  faFacebookF,
  faTwitter,
  faDribbble
} from '@fortawesome/free-brands-svg-icons'
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

library.add(
  faRss,
  faSearch,
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faDribbble
)

// 全局注册组件
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
