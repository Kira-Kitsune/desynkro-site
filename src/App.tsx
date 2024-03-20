import type { RouteSectionProps } from '@solidjs/router';
import type { Component } from 'solid-js';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App: Component<RouteSectionProps<unknown>> = (props) => {
    return (
        <>
            <Navbar />
            <div class="fixed z-[45] flex h-8 w-full items-center justify-center bg-yellow-400 text-center text-xl">
                Website is currently in Beta!
            </div>
            {props.children}
            <Footer />
        </>
    );
};

export default App;
