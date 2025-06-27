import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { PageContainer, PageContextProvider } from './context/PageContextProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PageContextProvider>
        <App />
      </PageContextProvider>
    </BrowserRouter>    
  </StrictMode>,
)
