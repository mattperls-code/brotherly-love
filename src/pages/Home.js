import React, { useRef, useEffect, useState, Suspense } from "react"

import Page from "../components/Page"
import FrontSection from "../components/FrontSection"
import Section from "../components/Section"
import BottomBar from "../components/BottomBar"

import Particles from "../components/Particles"
import { HorizontalFade, VerticalFade } from "../components/Fade"
import { AutoCarousel } from "../components/Carousel"
import Revolver from "../components/Revolver"

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
            <FrontSection current={"Home"}>
                <Canvas style={{ backgroundColor: "rgb(243, 165, 165)" }}>
                    <ambientLight intensity={0.2} />
                    <spotLight position={[0, 10, 7.5]} angle={0.25} penumbra={1} />
                    <Suspense fallback={null}>
                        <LoveStatue />
                    </Suspense>
                </Canvas>
                <Particles count={30} height={window.innerHeight - 80} />
            </FrontSection>
            <Section>
                <div className={"wideframe-image-container"}>
                    <AutoCarousel itemData={[ CityImage1, CityImage2, CityImage3 ]} render={(item, index) => {
                        return (
                            <img className={"wideframe-image city"} src={item} alt={"Philadelphia Skyline"} key={index} />
                        )
                    }} width={window.innerWidth} focusTime={3000} />
                </div>
                <div style={{ position: "absolute", bottom: 60 }}>
                    <VerticalFade verticalFocus={window.innerHeight}>
                        <div style={{ textAlign: "center" }}>
                            <div className={"action"}>Take a tour of Philadelphia's beautiful scenery</div>
                        </div>
                    </VerticalFade>
                </div>
            </Section>
            <Section>
                <Particles count={30} height={window.innerHeight} />
                <VerticalFade verticalFocus={window.innerHeight}>
                    <div style={{ textAlign: "center", paddingTop: 50, paddingBottom: 50 }}>
                        <div className={"action"}>Learn about famous Philadelphians</div>
                    </div>
                </VerticalFade>
                <div className={"people-content-container"}>
                    <HorizontalFade verticalFocus={1.3 * window.innerHeight} direction={"left"}>
                        <Tilty max={10} className={"content-box pictures-container"}>
                            <Revolver itemData={[ { src: KobeBryantImage, name: "Kobe Bryant" }, { src: WillSmithImage, name: "Will Smith" }, { src: KevinHartImage, name: "Kevin Hart" } ]} render={({ src, name }) => {
                                return (
                                    <img className={"picture"} src={src} alt={name} />
                                )
                            }} direction={"left"} focusTime={4000} />
                        </Tilty>
                    </HorizontalFade>
                    <HorizontalFade verticalFocus={1.3 * window.innerHeight} direction={"right"}>
                        <Tilty max={10} className={"content-box info-container"}>
                            <Revolver itemData={[ "Kobe Bryant", "Will Smith", "Kevin Hart" ]} render={(item) => {
                                return (
                                    <div className={"info"}>
                                        <h3>
                                            {
                                                item
                                            }
                                        </h3>
                                    </div>
                                )
                            }} direction={"right"} focusTime={4000} />
                        </Tilty>
                    </HorizontalFade>
                </div>
            </Section>
            <Section>
                <div>History</div>
            </Section>
            <Section>
                <div className={"wideframe-image-container"}>
                    <AutoCarousel itemData={[ EaglesImage, SixersImage, UnionImage, PhilliesImage, FlyersImage ]} render={(item, index) => {
                        return (
                            <img className={"wideframe-image sports"} src={item} alt={"Philadelphia Sports Team"} key={index} />
                        )
                    }} width={window.innerWidth} focusTime={3000} />
                </div>
                <div style={{ position: "absolute", bottom: 60 }}>
                    <VerticalFade verticalFocus={window.innerHeight}>
                        <div style={{ textAlign: "center" }}>
                            <div className={"action"}>Meet the incredible sports teams of Philadelphia</div>
                        </div>
                    </VerticalFade>
                </div>
            </Section>
            <BottomBar />
        </Page>
    )
}

export default HomePage