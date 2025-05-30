import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './i18n/index.ts'
import './styles/globals.scss'

// 获取basename，在GitHub Pages上是 /guide-cursor，本地开发是 /
const basename = window.location.hostname === 'wukong94.github.io' ? '/guide-cursor' : '/'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
) 