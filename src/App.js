// IMPORTS

import React from "react"

import { HashRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/Home"
import PlacesPage from "./pages/Places"
import PeoplePage from "./pages/People"
import SportsPage from "./pages/Sports"
import AboutPage from "./pages/About"

import "./styles/theme.scss"
import "./styles/components.scss"
import "./styles/pages.scss"

// COMPONENTS

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route exact path={"/"} element={
                    <HomePage />
                } />
                <Route exact path={"/places"} element={
                    <PlacesPage />
                } />
                <Route exact path={"/people"} element={
                    <PeoplePage />
                } />
                <Route exact path={"/sports"} element={
                    <SportsPage />
                } />
                <Route exact path={"/about"} element={
                    <AboutPage />
                } />
            </Routes>
        </HashRouter>
    )
}

// EXPORTS

export default App