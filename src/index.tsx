import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import ErrorBoundary from './pages/error/ErrorBoundary'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)
