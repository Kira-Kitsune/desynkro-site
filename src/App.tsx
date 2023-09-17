import { lazy, type Component } from 'solid-js';
import Navbar from './components/Navbar';
import { Route, Routes } from '@solidjs/router';
import Home from './pages/Home';
import _404 from './pages/_404';
import Portfolio from './pages/Portfolio';
const PortfolioSection = lazy(() => import('./pages/PortfolioSection'));
const Album = lazy(() => import('./pages/Album'));
import Footer from './components/Footer';
import {
    AnimalPortfolio,
    CosplayPortfolio,
    ModelPortfolio,
    VehiclePortfolio,
    StreetPortfolio,
    OtherPortfolio,
} from './utils/portfolios';
import { PixelExpo2023 } from './utils/albums';

const App: Component = () => {
    return (
        <>
            <Navbar />
            {/* <div class="fixed z-[45] flex h-8 w-full items-center justify-center bg-yellow-400 text-center text-xl">
                Website is currently in Beta!
            </div> */}
            <Routes>
                <Route path="/" component={Home} />
                <Route path="/portfolio" component={Portfolio} />
                <Route
                    path="/portfolio/animals"
                    element={
                        <PortfolioSection
                            folder={AnimalPortfolio}
                            title="Pets/Animals"
                        />
                    }
                />
                <Route
                    path="/portfolio/cosplays"
                    element={
                        <PortfolioSection
                            folder={CosplayPortfolio}
                            title="Cosplays"
                        />
                    }
                />
                <Route
                    path="/portfolio/models"
                    element={
                        <PortfolioSection
                            folder={ModelPortfolio}
                            title="Models"
                        />
                    }
                />
                <Route
                    path="/portfolio/vehicles"
                    element={
                        <PortfolioSection
                            folder={VehiclePortfolio}
                            title="Vehicles"
                        />
                    }
                />
                <Route
                    path="/portfolio/street"
                    element={
                        <PortfolioSection
                            folder={StreetPortfolio}
                            title="Street Photography"
                        />
                    }
                />
                <Route
                    path="/portfolio/other"
                    element={
                        <PortfolioSection
                            folder={OtherPortfolio}
                            title="Other Photos"
                        />
                    }
                />
                <Route
                    path="/portfolio/album/pixel_expo_2023"
                    element={
                        <Album folder={PixelExpo2023} title="Pixel Expo 2023" />
                    }
                />
                <Route path="*" component={_404} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
