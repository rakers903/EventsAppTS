import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './presentation/Home/HomeView';
import AboutView from './presentation/About/AboutView';
import MainLayout from './layout/MainLayout';
import ApiProvider from './context/ApiContext';
import "./reset.css";
import "./index.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApiProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path = "/" element={<HomeView />} />
            <Route path = "/about" element={<AboutView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApiProvider>
  </StrictMode>,
)




