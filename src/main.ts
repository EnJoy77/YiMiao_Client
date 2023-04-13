import Vue from 'vue'
import App from './App.vue'
import './uni.promisify.adaptor'
import Docker from './components/Docker.vue' 
//import { createApp } from 'vue'
const app:any = new (typeof App === 'function' ? App : Vue.extend(Object.assign({ mpType: 'app' }, App)))
//const app=createApp(App)

Vue.component('Docker',Docker)
app.$mount();
