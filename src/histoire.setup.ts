import { defineSetupVue3 } from '@histoire/plugin-vue'
import { 
  Quasar,
  Dialog,
  Loading 
} from 'quasar'

// https://quasar.dev/start/vite-plugin#installation
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/mdi-v6/mdi-v6.css'
import '@quasar/extras/eva-icons/eva-icons.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'

// UNCOMENT REQUIRED ICONS
// import '@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css'
// import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
// import '@quasar/extras/material-icons-round/material-icons-round.css'
// import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'
// import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css'
// import '@quasar/extras/material-symbols-rounded/material-symbols-rounded.css'
// import '@quasar/extras/material-symbols-sharp/material-symbols-sharp.css'
// import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
// import '@quasar/extras/ionicons-v4/ionicons-v4.css'
// import '@quasar/extras/themify/themify.css'
// import '@quasar/extras/line-awesome/line-awesome.css'
// import '@quasar/extras/bootstrap-icons/bootstrap-icons.css'


// Import Quasar css
import 'quasar/src/css/index.sass'


export const setupVue3 = defineSetupVue3(({ app }) => {
  app.use(Quasar,{
    plugins: { 
      Dialog,
      Loading
    }
  })
})
