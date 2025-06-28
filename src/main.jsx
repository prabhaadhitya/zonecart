import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { PageContainer, PageContextProvider } from './context/PageContextProvider.jsx'
import { DarkModeContextProvider} from './context/DarkModeContextProvider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <DarkModeContextProvider>
        <PageContextProvider>
          <App />
        </PageContextProvider>
      </DarkModeContextProvider>      
    </BrowserRouter>    
  </StrictMode>,
)
