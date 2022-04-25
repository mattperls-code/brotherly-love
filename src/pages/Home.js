import React, { useRef, useState, Suspense } from "react"

import Page from "../components/Page"
import FrontSection from "../components/FrontSection"
import BottomBar from "../components/BottomBar"

import FilteredImage from "../components/FilteredImage"
import Particles from "../components/Particles"
import Responsive from "../components/Responsive"

import { HorizontalFade, VerticalFade } from "../components/Fade"
import { AutoCarousel } from "../components/Carousel"
import { HorizontalRevolver } from "../components/Revolver"

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"

import Tilty from "react-tilty"

import CityImage1 from "../assets/images/places/home/image1.png"
import CityImage2 from "../assets/images/places/home/image2.png"
import CityImage3 from "../assets/images/places/home/image3.png"

import KobeBryantImage from "../assets/images/people/home/kobe-bryant.png"
import WillSmithImage from "../assets/images/people/home/will-smith.png"
import KevinHartImage from "../assets/images/people/home/kevin-hart.png"

import EaglesImage from "../assets/images/sports/home/eagles.png"
import SixersImage from "../assets/images/sports/home/sixers.png"
import UnionImage from "../assets/images/sports/home/union.png"
import PhilliesImage from "../assets/images/sports/home/phillies.png"
import FlyersImage from "../assets/images/sports/home/flyers.png"

const LoveStatue = () => {
    const ref = useRef()

    const [rotation, setRotation] = useState(0)
    useFrame(() => {
        setRotation(rotation + 0.015)
        ref.current.rotation.z = 0.35 * Math.sin(rotation)
    })

    const material = useLoader(MTLLoader, "/LoveStatue/obj.mtl")
    const obj = useLoader(OBJLoader, "/LoveStatue/tinker.obj", (loader) => {
        material.preload()
        loader.setMaterials(material)
    })

    return (
        <primitive ref={ref} object={obj} position={[ -0.5, -1.5, 0 ]} scale={[ 0.08, 0.08, 0.08 ]} rotation={[ 280 * Math.PI / 180, 0, 0 ]} />
    )
}

const HomePage = () => {
    return (
        <Page title={"Home"}>
            <FrontSection current={"Home"} clip>
                <Canvas style={{ height: "calc(100vh - 80px)", backgroundColor: "rgb(243, 165, 165)" }}>
                    <ambientLight intensity={0.2} />
                    <spotLight position={[0, 10, 7.5]} angle={0.25} penumbra={1} />
                    <Suspense fallback={null}>
                        <LoveStatue />
                    </Suspense>
                </Canvas>
                <Particles count={30} height={window.innerHeight - 80} />
            </FrontSection>
            <section>
                <div className={"wideframe-image-container"}>
                    <AutoCarousel itemData={[ CityImage1, CityImage2, CityImage3 ]} render={(item, index) => {
                        return (
                            <FilteredImage className={"wideframe-image city"} src={item} alt={"Philadelphia Skyline"} key={index} filters={{
                                brightness: 70,
                                saturate: 150,
                                contrast: 150
                            }} />
                        )
                    }} width={window.innerWidth} focusTime={2500} />
                </div>
                <div style={{ position: "absolute", width: "100%", bottom: 60 }}>
                    <VerticalFade verticalFocus={window.innerHeight}>
                        <div style={{ textAlign: "center" }}>
                            <div className={"action-transparent"}>Take a tour of Philadelphia's beautiful scenery</div>
                        </div>
                    </VerticalFade>
                </div>
            </section>
            <section>
                <Particles count={30} height={window.innerHeight} />
                <VerticalFade verticalFocus={window.innerHeight}>
                    <div style={{ textAlign: "center", paddingTop: 50, paddingBottom: 30 }}>
                        <div className={"action-transparent"}>Learn about famous Philadelphians</div>
                    </div>
                </VerticalFade>
                <div className={"people-content"}>
                    <HorizontalFade verticalFocus={1.3 * window.innerHeight} direction={"left"}>
                        <Tilty max={10} className={"content-box pictures-container"}>
                            <HorizontalRevolver itemData={[ { src: KobeBryantImage, name: "Kobe Bryant" }, { src: WillSmithImage, name: "Will Smith" }, { src: KevinHartImage, name: "Kevin Hart" } ]} render={({ src, name }) => {
                                return (
                                    <FilteredImage className={"picture"} src={src} alt={name} filters={{
                                        brightness: 80,
                                        saturate: 150,
                                        contrast: 120
                                    }} />
                                )
                            }} direction={"left"} focusTime={5500} />
                        </Tilty>
                    </HorizontalFade>
                    <HorizontalFade verticalFocus={1.3 * window.innerHeight} direction={"right"}>
                        <Tilty max={10} className={"content-box info-wrapper"}>
                            <HorizontalRevolver itemData={[
                                {
                                    header: "Kobe Bryant",
                                    info: (
                                        <React.Fragment>
                                            Kobe Bryant is one of the most <b>famous Basketball player</b>s of all time.
                                            <br />
                                            He played in the NBA on the <b>LA Lakers</b> for 20 years.
                                            <br />
                                            He was born in Philadelphia in 1978, and a large portion of his childhood was spent in Philly.
                                            <br />
                                            As a teenager, he went to <b>Lower Merion High School</b>.
                                            <br />
                                            In 2020 at the age of 41, he passed away in a helicopter accident.
                                        </React.Fragment>
                                    ),
                                    abridged: (
                                        <React.Fragment>
                                            Played for the <b>LA Lakers</b>
                                            <br />
                                            Born in <b>Philadelphia 1978</b>
                                            <br />
                                            Attended <b>Lower Merion High School</b> as a teenager
                                        </React.Fragment>
                                    )
                                },
                                {
                                    header: "Will Smith",
                                    info: (
                                        <React.Fragment>
                                            Will Smith is a <b>famous actor</b> born and raised in Philly.
                                            <br />
                                            He's starred in:
                                            <ul>
                                                <li>The Fresh Prince of Bel-Air</li>
                                                <li>Men In Black</li>
                                                <li>I Am Legend</li>
                                                <li>The Pursuit of Happyness</li>
                                                <li>I, Robot</li>
                                            </ul>
                                            <br />
                                            He has been nominated for 5 Golden Globe Awards, 2 Academy Awards, and has won 4 Grammy Awards.
                                            <br />
                                            He is ranked the <b>42nd most popular actor</b> of all time.
                                        </React.Fragment>
                                    ),
                                    abridged: (
                                        <React.Fragment>
                                            He's a <b>famous actor</b> from Philadelphia.
                                            <br />
                                            He starred in many classic movies.
                                            <br />
                                            Nominated for numerous awards and won <b>4 Grammy Awards</b>.
                                        </React.Fragment>
                                    )
                                },
                                {
                                    header: "Kevin Hart",
                                    info: (
                                        <React.Fragment>
                                            Kevin Hart was born in Philly, 1979, and attended <b>George Washington High School</b>.
                                            <br />
                                            He overcame a difficult childhood to become a <b>famous stand-up comedian and actor</b>.
                                            <br />
                                            He has stand-up performances <b>featured on Netflix</b>.
                                            <br />
                                            He starred in several comedies:
                                            <ul>
                                                <li>Jumanji</li>
                                                <li>Night School</li>
                                                <li>Get Hard</li>
                                                <li>Central Intelligence</li>
                                            </ul>
                                        </React.Fragment>
                                    ),
                                    abridged: (
                                        <React.Fragment>
                                            A <b>famous comedian and actor</b> from Philadelphia.
                                            <br />
                                            <b>Featured on Netflix</b> and starred in many comedies.
                                            <br />
                                            Attended <b>George Washington High School</b> as a teenager.
                                        </React.Fragment>
                                    )
                                }
                            ]} render={({ header, info, abridged }) => {
                                return (
                                    <div className={"info-container"}>
                                        <h3>
                                            {
                                                header
                                            }
                                        </h3>
                                        <div className={"info"}>
                                            <Responsive render={({ width }) => {
                                                return (width > 700) ? info : abridged
                                            }} />
                                        </div>
                                    </div>
                                )
                            }} direction={"right"} focusTime={5500} />
                        </Tilty>
                    </HorizontalFade>
                </div>
            </section>
            <section>
                <div className={"wideframe-image-container"}>
                    <AutoCarousel itemData={[ EaglesImage, SixersImage, UnionImage, PhilliesImage, FlyersImage ]} render={(item, index) => {
                        return (
                            <FilteredImage className={"wideframe-image"} src={item} alt={"Philadelphia Sports Team"} key={index} filters={{
                                brightness: 70,
                                saturate: 150,
                                contrast: 130
                            }} />
                        )
                    }} width={window.innerWidth} focusTime={2500} />
                </div>
                <div style={{ position: "absolute", width: "100%", bottom: 100 }}>
                    <VerticalFade verticalFocus={window.innerHeight}>
                        <div style={{ textAlign: "center" }}>
                            <div className={"action-transparent"}>Meet the incredible sports teams of Philadelphia</div>
                        </div>
                    </VerticalFade>
                </div>
            </section>
            <BottomBar />
        </Page>
    )
}

export default HomePage