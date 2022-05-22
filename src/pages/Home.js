// IMPORTS

import React from "react"

import Page from "../components/structural/Page"
import FrontSection from "../components/structural/FrontSection"
import Responsive from "../components/structural/Responsive"

import Particles from "../components/stylistic/Particles"
import { HorizontalFade, VerticalFade } from "../components/stylistic/Fade"
import { AutoCarousel } from "../components/stylistic/Carousel"
import { HorizontalRevolver } from "../components/stylistic/Revolver"

import LoveStatue from "../components/stylistic/LoveStatue"
import { PlaceHomeItem, placesHomeData } from "../components/renders/PlaceHomeItem"
import { PersonHomeImageItem, personHomeImageData, PersonHomeInfoItem, personHomeInfoData } from "../components/renders/PersonHomeItem"
import { SportsHomeItem, sportsHomeData } from "../components/renders/SportsHomeItem"

import { Link } from "react-router-dom"
import { Canvas } from "@react-three/fiber"

import Tilty from "react-tilty"

// COMPONENTS

const HomePage = () => {
    return (
        <Page title={"Home"} quote={(
            <React.Fragment>
                Oh Philadelphia freedom, shine on me
                <br />
                <b>I love you</b>
            </React.Fragment>
        )} quotee={"Elton John"} focusTime={2500}>
            <FrontSection current={"Home"}>
                {
                    // 3D jumbotron on first page
                }
                <Canvas style={{ height: "calc(100vh - 80px)", backgroundColor: "rgb(243, 165, 165)" }}>
                    <ambientLight intensity={0.2} />
                    <spotLight position={[0, 10, 7.5]} angle={0.25} penumbra={1} />
                    <React.Suspense fallback={null}>
                        <LoveStatue />
                    </React.Suspense>
                </Canvas>
                <Particles count={30} height={window.innerHeight - 80} />
                <div style={{ position: "absolute", width: "100%", bottom: 40, textAlign: "center" }}>
                    <div className={"action-transparent"}>Keep scrolling to see more about Philadelphia</div>
                </div>
            </FrontSection>
            <section>
                <div className={"wideframe-image-container"}>
                    {
                        // Auto carousel about places in Philadelphia that responds to changes in screen width
                    }
                    <Responsive render={({ width }) => {
                        return (
                            <AutoCarousel itemData={placesHomeData} render={PlaceHomeItem} width={width} focusTime={2500} />
                        )
                    }} />
                </div>
                <div style={{ position: "absolute", width: "100%", bottom: 60 }}>
                    {
                        // Responds to changes in screen height so fade trigger changes dynamically
                    }
                    <Responsive render={({ height }) => {
                        return (
                            <VerticalFade verticalFocus={height}>
                                <Link to={"/places"}>
                                    <div style={{ textAlign: "center" }}>
                                        <div className={"action-transparent action-link"}>Take a tour of Philadelphia's beautiful scenery</div>
                                    </div>
                                </Link>
                            </VerticalFade>
                        )
                    }} />
                </div>
            </section>
            <section>
                <Particles count={30} height={window.innerHeight} />
                {
                    // Responds to changes in screen height so fade trigger changes dynamically
                }
                <Responsive render={({ height }) => {
                    return (
                        <VerticalFade verticalFocus={height}>
                            <Link to={"/people"}>
                                <div style={{ textAlign: "center", paddingTop: 50, paddingBottom: 30 }}>
                                    <div className={"action-transparent action-link"}>Learn about famous Philadelphians</div>
                                </div>
                            </Link>
                        </VerticalFade>
                    )
                }} />
                <div className={"people-content"}>
                    {
                        // Dual horizontal revolvers about famous Philadelphians that fade in and respond to changes in screen height
                    }
                    <Responsive render={({ height }) => {
                        return (
                            <React.Fragment>
                                <HorizontalFade verticalFocus={1.3 * height} direction={"left"}>
                                    <Tilty max={10} className={"content-box pictures-container"}>
                                        <HorizontalRevolver itemData={personHomeImageData} render={PersonHomeImageItem} direction={"left"} focusTime={4500} />
                                    </Tilty>
                                </HorizontalFade>
                                <HorizontalFade verticalFocus={1.3 * height} direction={"right"}>
                                    <Tilty max={10} className={"content-box info-wrapper"}>
                                        <HorizontalRevolver itemData={personHomeInfoData} render={PersonHomeInfoItem} direction={"right"} focusTime={4500} />
                                    </Tilty>
                                </HorizontalFade>
                            </React.Fragment>
                        )
                    }} />
                </div>
            </section>
            <section>
                <div className={"wideframe-image-container"}>
                    {
                        // Auto carousel about Philadelphia sports teams that responds to changes in screen width
                    }
                    <Responsive render={({ width }) => {
                        return (
                            <AutoCarousel itemData={sportsHomeData} render={SportsHomeItem} width={width} focusTime={2500} />
                        )
                    }} />
                </div>
                <div style={{ position: "absolute", width: "100%", bottom: 100 }}>
                    {
                        // Responds to changes in screen height so fade trigger changes dynamically
                    }
                    <Responsive render={({ height }) => {
                        return (
                            <VerticalFade verticalFocus={height}>
                                <Link to={"/sports"}>
                                    <div style={{ textAlign: "center" }}>
                                        <div className={"action-transparent action-link"}>Meet the incredible sports teams of Philadelphia</div>
                                    </div>
                                </Link>
                            </VerticalFade>
                        )
                    }} />
                </div>
            </section>
        </Page>
    )
}

// EXPORTS

export default HomePage