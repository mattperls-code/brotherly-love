import React, { useRef, useEffect, useState } from "react"

import Page from "../components/Page"
import FrontSection from "../components/FrontSection"
import Section from "../components/Section"
import BottomBar from "../components/BottomBar"

import Fade from "../components/Fade"

import { Canvas, useFrame } from "@react-three/fiber"

import WireframeImage from "../assets/images/wireframe.png"
import CityImage from "../assets/images/wideframe-city-image1.png"

const LoveStatue = () => {
    const ref = useRef()

    const [rotation, setRotation] = useState(0)
    useFrame(() => {
        setRotation(rotation + 0.015)
        ref.current.rotation.y = Math.sin(rotation) / 2
    })

    // TODO: obj loader use love statue

    return (
        <mesh ref={ref} position={[ 0, -0.25, 0 ]} rotation={[ 20 * Math.PI / 180, 0, 0 ]}>
            <boxGeometry args={[ 2.5, 2.5, 2.5 ]} />
            <meshStandardMaterial color={"red"} />
        </mesh>
    )
}

const HomePage = () => {
    return (
        <Page title={"Home"}>
            <FrontSection currentPage={"Home"}>
                <Canvas>
                    <ambientLight intensity={0.3} />
                    <spotLight position={[0, 10, 10]} angle={0.2} penumbra={1} />
                    <LoveStatue />
                </Canvas>
                <h1>Brotherly Love</h1>
            </FrontSection>
            <Section>
                <img className={"wideframe-image"} src={CityImage} />
                <div style={{ position: "absolute", bottom: 60 }}>
                    <Fade verticalFocus={0.8 * window.innerHeight} verticalBoundPadding={0.15 * window.innerHeight} direction={"left"}>
                        <div style={{ textAlign: "center" }}>
                            <div className={"quote"}>I'd like to see Paris before I die…<br />Philadelphia will do</div>
                        </div>
                    </Fade>
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