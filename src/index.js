import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'normalize.css'
import './theme/main.scss'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
