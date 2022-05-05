// IMPORTS

import React from "react"

import Page from "../components/structural/Page"
import FrontSection from "../components/structural/FrontSection"
import BottomBar from "../components/structural/BottomBar"
import Responsive from "../components/structural/Responsive"

import Particles from "../components/stylistic/Particles"
import { HorizontalFade, VerticalFade } from "../components/stylistic/Fade"
import { AutoCarousel } from "../components/stylistic/Carousel"
import { HorizontalRevolver } from "../components/stylistic/Revolver"

import LoveStatue from "../components/stylistic/LoveStatue"
import { PlaceHomeItem, placesHomeData } from "../components/renders/PlaceHomeItem"
import { PersonHomeImageItem, personHomeImageData, PersonHomeInfoItem, personHomeInfoData } from "../components/renders/PersonHomeItem"
import { SportHomeItem, sportHomeData } from "../components/renders/SportHomeItem"

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
        )} quotee={"Elton John"} focusTime={4500}>
            <FrontSection current={"Home"}>
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
                    <Responsive render={({ width }) => {
                        return (
                            <AutoCarousel itemData={placesHomeData} render={PlaceHomeItem} width={width} focusTime={2500} />
                        )
                    }} />
                </div>
                <div style={{ position: "absolute", width: "100%", bottom: 60 }}>
                    <Responsive render={({ height }) => {
                        return (
                            <VerticalFade verticalFocus={height}>
                                <div style={{ textAlign: "center" }}>
                                    <div className={"action-transparent"}>Take a tour of Philadelphia's beautiful scenery</div>
                                </div>
                            </VerticalFade>
                        )
                    }} />
                </div>
            </section>
            <section>
                <Particles count={30} height={window.innerHeight} />
                <Responsive render={({ height }) => {
                    return (
                        <VerticalFade verticalFocus={height}>
                            <div style={{ textAlign: "center", paddingTop: 50, paddingBottom: 30 }}>
                                <div className={"action-transparent"}>Learn about famous Philadelphians</div>
                            </div>
                        </VerticalFade>
                    )
                }} />
                <div className={"people-content"}>
                    <Responsive render={({ height }) => {
                        return (
                            <React.Fragment>
                                <HorizontalFade verticalFocus={1.3 * height} direction={"left"}>
                                    <Tilty max={10} className={"content-box pictures-container"}>
                                        <HorizontalRevolver itemData={personHomeImageData} render={PersonHomeImageItem} direction={"left"} focusTime={5500} />
                                    </Tilty>
                                </HorizontalFade>
                                <HorizontalFade verticalFocus={1.3 * height} direction={"right"}>
                                    <Tilty max={10} className={"content-box info-wrapper"}>
                                        <HorizontalRevolver itemData={personHomeInfoData} render={PersonHomeInfoItem} direction={"right"} focusTime={5500} />
                                    </Tilty>
                                </HorizontalFade>
                            </React.Fragment>
                        )
                    }} />
                </div>
            </section>
            <section>
                <div className={"wideframe-image-container"}>
                    <Responsive render={({ width }) => {
                        return (
                            <AutoCarousel itemData={sportHomeData} render={SportHomeItem} width={width} focusTime={2500} />
                        )
                    }} />
                </div>
                <div style={{ position: "absolute", width: "100%", bottom: 100 }}>
                    <Responsive render={({ height }) => {
                        return (
                            <VerticalFade verticalFocus={height}>
                                <div style={{ textAlign: "center" }}>
                                    <div className={"action-transparent"}>Meet the incredible sports teams of Philadelphia</div>
                                </div>
                            </VerticalFade>
                        )
                    }} />
                </div>
            </section>
            <BottomBar />
        </Page>
    )
}

// EXPORTS

export default HomePage