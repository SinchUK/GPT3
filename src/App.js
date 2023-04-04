import React from 'react'

import { Footer, Blog, Possibility, Header, WhatGPT3, Features } from './containers';
import { CTA, Brand, Article, Feature, Navbar } from './components';
import './App.css';


const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
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

export default App