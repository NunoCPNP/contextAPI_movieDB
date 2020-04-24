import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { StateProvider } from './store/store'

import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider>
        <App />
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)

serviceWorker.register()
