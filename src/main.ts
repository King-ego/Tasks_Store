import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import { store, key } from './store'

// const app = createApp({ ... })

// // pass the injection key
// app.use(store, key)

createApp(App).use(store, key).use(router).mount('#app')
