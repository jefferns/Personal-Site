import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './views/HomePage.tsx'
import Discovery from './views/Discovery.tsx'
import NotFound from './views/NotFound.tsx'

const router = createBrowserRouter([
  {path: "/", element: <HomePage />},
  {path: "/discovery", element: <Discovery/>},
  { path: '*', element: <NotFound/>}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
