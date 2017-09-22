'use strict'
import '../css/main.scss'
import '../../../node_modules/toastr/build/toastr.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import View from './components/View.js'
import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.render(
  <Provider store={store}>
    <View />
  </Provider>,
  document.getElementById('react')
)
