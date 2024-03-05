import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { Aoi } from './types/types'


const init = (aoi: Aoi) => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App {...aoi} />
    </React.StrictMode>,
  )
}

const aoi = localStorage.getItem('aoi')
if (!aoi) {
  import('./testData.json').then((aoi) => {
    console.log('using test data', aoi.default)
    return init(aoi.default)
  })
} else {
  init(JSON.parse(aoi))
}