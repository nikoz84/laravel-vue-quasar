import './bootstrap';
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/pt-BR'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import { createApp } from 'vue'

import App from './components/Home.vue'

const app = createApp(App)


app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
    lang: quasarLang,
})

app.mount("#app")
