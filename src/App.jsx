import React from 'react';
import { useEffect } from 'react';
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
import Class12Neet from '../components/Pages/Neet/Pages/Class12neet';
import Class11Jee from '../components/Pages/Jee/Pages/class11jee';
import Class12Jee from '../components/Pages/Jee/Pages/Class12jee';
import Class6 from '../components/Pages/Class6-10/Pages/Class6';
import Class10 from '../components/Pages/Class6-10/Class6_10';
import Adsat from '../components/Pages/Adasat/Adsat';


function RedirectToUrl({ url }) {
  useEffect(() => {
    // Redirect to the external URL
    window.open(url, '_blank');
  }, [url]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='Neet' element={<Neet />} />
            <Route path='Class-11-Neet' element={<Class11Neet />} />
            <Route path='Class-12-Neet' element={<Class12Neet title="NEET programs for Class 12th"/>} />
            <Route path='Class-12-Dropers-Neet' element={<Class12Neet title="NEET programs for Class 12th Plus" />} />
          <Route path='Jee' element={<Jee />} />
            <Route path='Class-11-Jee' element={<Class11Jee title="Jee programs for Class 11th"/>} />
            <Route path='Class-12-Jee' element={<Class12Jee title="Jee programs for Class 12th"/>} />
            <Route path='Class-12-Dropers-Jee' element={<Class12Jee title="Jee programs for Class 12th Plus" />} />
          <Route path='Class10' element={<Class10 />} />
            <Route path='Class-6' element={<Class6 title="Program for Class 6th"/>} />
            <Route path='Class-7' element={<Class6 title="Program for Class 7th"/>} />
            <Route path='Class-8' element={<Class6 title="Program for Class 8th" />} />
          <Route path='OnlineProgram' element={<OnlineProgram />} />
          <Route path='ClasroomProgram' element={<RedirectToUrl url="https://www.allen.ac.in/" />} />
          <Route path='Adsat' element={<Adsat />} />
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