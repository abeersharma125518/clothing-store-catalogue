import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App'
import { LanguageProvider } from './context/LanguageContext'
import './index.css'

// GitHub Pages project sites serve the app under /<repo-name>/, which cannot
// use clean BrowserRouter paths on refresh. HashRouter keeps every route live.
const isGitHubPagesProjectSite = window.location.pathname.startsWith('/clothing-store-catalogue')
const Router = isGitHubPagesProjectSite ? HashRouter : BrowserRouter

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </Router>
  </React.StrictMode>,
)
