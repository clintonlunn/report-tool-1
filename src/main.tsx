import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { Aoi } from './types/types.js'

const init = (aoi: Aoi) => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

const aoi = localStorage.getItem('aoi')
if (!aoi) {
  import('./testData.json').then((aoi) => {
    console.log(aoi);

    return init(aoi.default)
  })
} else {
  init(JSON.parse(aoi))
}