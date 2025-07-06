import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { EuiProvider } from '@elastic/eui'
import { BrowserRouter, Route, Routes } from 'react-router'
import CreateFlashcards from './components/CreateFlashcards.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EuiProvider colorMode="light">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/create" element={<CreateFlashcards />} />
        </Routes>
      </BrowserRouter>
    </EuiProvider>
  </StrictMode>
)
