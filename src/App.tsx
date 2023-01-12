import type { Component } from 'solid-js';
import Navbar from './components/Navbar';
import { Route, Routes } from '@solidjs/router';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';

const App: Component = () => {
    return (
        <>
            <Navbar />
            <div class="fixed z-[45] flex h-8 w-full items-center justify-center bg-yellow-400 text-center text-xl">
                Website is currently in Beta!
            </div>
            <Routes>
                <Route path="/" component={Home} />
                <Route path="/portfolio" component={Portfolio} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
