import { createApp } from 'vue'
import './assets/scss/main.scss';
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faX } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faX)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
