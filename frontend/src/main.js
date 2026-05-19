import { createApp } from 'vue'
import { setConfig, frappeRequest } from 'frappe-ui'
import App from './App.vue'
import './index.css'

setConfig('resourceFetcher', frappeRequest)

if (window.csrf_token && window.csrf_token !== '{{ csrf_token }}') {
  setConfig('csrfToken', window.csrf_token)
}

createApp(App).mount('#app')
