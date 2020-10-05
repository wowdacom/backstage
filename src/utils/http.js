import axios from 'axios'

export default {
    install: (app, options) => {
      app.config.globalProperties.$http = axios
      app.provide('http', options)
    }
  }