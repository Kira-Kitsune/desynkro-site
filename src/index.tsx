/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';
import { Router, Route } from '@solidjs/router';

import App from './App';
import { lazy, type Component } from 'solid-js';

const PortfolioSection = lazy(() => import('./pages/PortfolioSection'));
const Album = lazy(() => import('./pages/Album'));

import { PixelExpo2023 } from './utils/albums';
import {
    AnimalPortfolio,
    CosplayPortfolio,
    ModelPortfolio,
    OtherPortfolio,
    StreetPortfolio,
    VehiclePortfolio,
} from './utils/portfolios';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import _404 from './pages/_404';

const WrappedApp: Component = () => {
    return (
        <Router root={App}>
            <Route path="/" component={Home} />
            <Route path="/portfolio">
                <Route path="/" component={Portfolio} />
                <Route
                    path="/animals"
                    component={() => (
                        <PortfolioSection
                            folder={AnimalPortfolio}
                            title="Pets & Animals"
                        />
                    )}
                />
                <Route
                    path="/cosplays"
                    component={() => (
                        <PortfolioSection
                            folder={CosplayPortfolio}
                            title="Cosplays"
                        />
                    )}
                />
                <Route
                    path="/models"
                    component={() => (
                        <PortfolioSection
                            folder={ModelPortfolio}
                            title="Models"
                        />
                    )}
                />
                <Route
                    path="/vehicles"
                    component={() => (
                        <PortfolioSection
                            folder={VehiclePortfolio}
                            title="Vehicles"
                        />
                    )}
                />
                <Route
                    path="/street"
                    component={() => (
                        <PortfolioSection
                            folder={StreetPortfolio}
                            title="Street Photography"
                        />
                    )}
                />
                <Route
                    path="/other"
                    component={() => (
                        <PortfolioSection
                            folder={OtherPortfolio}
                            title="Other Photos"
                        />
                    )}
                />
                <Route path="/album">
                    <Route
                        path="/pixel_expo_2023"
                        component={() => (
                            <Album
                                folder={PixelExpo2023}
                                title="Pixel Expo 2023"
                            />
                        )}
                    />
                </Route>
            </Route>
            <Route path="*" component={_404} />
        </Router>
    );
};

render(() => <WrappedApp />, document.getElementById('root') as HTMLElement);
