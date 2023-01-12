/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';

import App from './App';
import type { Component } from 'solid-js';

const WrappedApp: Component = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};

render(() => <WrappedApp />, document.getElementById('root') as HTMLElement);
