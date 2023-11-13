import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home';
import Contacts from './views/Contacts';
import NotFound from './views/NotFound';
import News from './views/News';
import NewsDetails from './components/NewsDetails/NewsDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/news/:id' element={<NewsDetails />} />
        <Route path='/news' element={<News />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
