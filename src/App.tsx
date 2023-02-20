import type { Component } from 'solid-js';
import Navbar from './components/Navbar';
import { Route, Routes } from '@solidjs/router';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import _404 from './pages/_404';
import PortfolioSection from './pages/PortfolioSection';
import {
    AnimalPortfolio,
    CosplayPortfolio,
    ModelPortfolio,
    VechilePortfolio as VehiclePortfolio,
    StreetPortfolio,
} from './utils/portfolios';

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
                        <PortfolioSection folder={[]} title="Other Photos" />
                    }
                />
                <Route path="*" component={_404} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
