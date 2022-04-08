import React from "react"

import { HashRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/Home"
import PlacesPage from "./pages/Places"
import PeoplePage from "./pages/People"
import HistoryPage from "./pages/History"
import SportsPage from "./pages/Sports"
import AboutPage from "./pages/About"

import "./styles/theme.scss"
import "./styles/components.scss"
import "./styles/pages.scss"

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
                <Route exact path={"/history"} element={
                    <HistoryPage />
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

export default App