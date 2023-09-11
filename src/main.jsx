import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import PersonalInfo from './components/PersonalInfo.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <MainContent />
  </React.StrictMode>,
)
