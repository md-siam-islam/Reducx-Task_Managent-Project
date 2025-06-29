import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RouterProvider } from 'react-router'
import router from './Routs/routs.tsx'
import { ThemeProvider } from './Provider/Theme-provider.tsx'
import { Provider } from 'react-redux'
import { Store } from './redux/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={Store}>
      <ThemeProvider defaultTheme='dark' storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
