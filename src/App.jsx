import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from "../components/home";
import Exam from "./Exams";
import OnlineProgram from "../components/Pages/OnlineCourse/OnlineProgram";
import Scholarships from "./Scholarship";
import Neet from '../components/Pages/Neet/Neet';
import Jee from "../components/Pages/Jee/Jee"
import Class11Neet from '../components/Pages/Neet/Pages/class11neet';
import './App.css';
import Class10 from '../components/Pages/Class6-10/Class6_10';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='Neet' element={<Neet />} />
            <Route path='Class-11-Neet' element={<Class11Neet />} />
          <Route path='Jee' element={<Jee />} />
          <Route path='Class10' element={<Class10 />} />
          <Route path='OnlineProgram' element={<OnlineProgram />} />
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