import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from "../components/home";
import Exam from "./Exams";
import Programs from "./Programs";
import Scholarships from "./Scholarship";
import Neet from '../components/Pages/Neet/Neet';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='Exams' element={<Exam />} />
          <Route path='Neet' element={<Neet />} />
          <Route path='Programs' element={<Programs />} />
          <Route path='Scholarship' element={<Scholarships />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <>
    // <HeaderTop/>
    // <Exam/>
    // <Footer/>
    // </>

  );
}

export default App;