/*
Figma Design for app
https://www.figma.com/file/lz9lLpFHMxHm2odnwM3R0z/gpt3?node-id=0%3A1&t=CT7Mb2xBuV6JTIYS-0
*/
import React from 'react';

import { Footer, Blog, Possibility, WhatGPT3, Features, Header } from './containers';
import { CTA, Brand, NavBar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
          <NavBar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App;