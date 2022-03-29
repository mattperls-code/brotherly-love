import React, { useRef, useEffect, useState, Suspense } from "react"

import Page from "../components/Page"
import FrontSection from "../components/FrontSection"
import Section from "../components/Section"
import BottomBar from "../components/BottomBar"

import { AutoCarousel } from "../components/Carousel"
import { VerticalFade } from "../components/Fade"
import Particles from "../components/Particles"

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"

import CityImage1 from "../assets/images/wideframe-city-image1.png"
import CityImage2 from "../assets/images/wideframe-city-image2.png"
import CityImage3 from "../assets/images/wideframe-city-image3.png"

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
                <Particles count={30} />
            </FrontSection>
            <Section>
                <div className={"wideframe-image-container"}>
                    <AutoCarousel itemData={[ CityImage1, CityImage2, CityImage3 ]} render={(item, index) => {
                        return (
                            <img className={"wideframe-image"} src={item} key={index} />
                        )
                    }} width={window.innerWidth} focusTime={3000} />
                </div>
                <div style={{ position: "absolute", bottom: 50 }}>
                    <VerticalFade verticalFocus={window.innerHeight}>
                        <div style={{ textAlign: "center" }}>
                            <div className={"action"}>Take a tour of Philadelphia's beautiful scenery</div>
                        </div>
                    </VerticalFade>
                </div>
            </Section>
            <Section>
                <div>People</div>
            </Section>
            <Section>
                <div>Culture</div>
            </Section>
            <Section>
                <div>Sports</div>
            </Section>
            <BottomBar />
        </Page>
    )
}

export default HomePage