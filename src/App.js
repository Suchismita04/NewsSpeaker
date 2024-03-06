
import './App.css';
import { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import React from "react";
import { Routes, Route } from "react-router-dom";

const App =()=> {

  const pageSize=15;
    return (

      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News pageSize={pageSize} key="general" country="in" category="general" />} />
          <Route exact path="/business" element={<News pageSize={pageSize} key="business" country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News pageSize={pageSize} key="entertainment" country="in" category="entertainment" />} />
          <Route exact path="/health" element={<News pageSize={pageSize} country="in" key="health" category="health" />} />
          <Route exact path="/science" element={<News pageSize={pageSize} country="in" key="science" category="science" />} />
          <Route exact path="/sports" element={<News pageSize={pageSize} country="in" key="sports" category="sports" />} />
          <Route exact path="/technology" element={<News pageSize={pageSize} country="in" key="technology" category="technology" />} />

        </Routes>





      </>
    );
  
}

export default App;
