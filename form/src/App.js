import {Routes, Route} from 'react-router-dom';
import"./styles/main.scss";
import React from 'react';
import Home from './pages/Home'
import EditForm from './components/EditForm';

function App() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<EditForm/>} />
      </Routes>
  );
}
export default App;
