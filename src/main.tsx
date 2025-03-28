
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { ProfileProvider } from './contexts/ProfileContext'

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ProfileProvider>
      <App />
    </ProfileProvider>
  </BrowserRouter>
);
