import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { CountryProvider } from './CountryProvider.tsx';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <CountryProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </CountryProvider>
  </BrowserRouter>,
)
