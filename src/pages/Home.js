import React, { useRef, useEffect, useState } from "react"

import Page from "../components/Page"
import FrontSection from "../components/FrontSection"
import Section from "../components/Section"
import BottomBar from "../components/BottomBar"

import { AutoCarousel } from "../components/Carousel"
import { VerticalFade } from "../components/Fade"
import Particles from "../components/Particles"

import { Canvas, useFrame } from "@react-three/fiber"

import CityImage1 from "../assets/images/wideframe-city-image1.png"
import CityImage2 from "../assets/images/wideframe-city-image2.png"
import CityImage3 from "../assets/images/wideframe-city-image3.png"

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
    // TODO: maybe experiment with this later, not a great fit right now
    // useEffect(() => {
    //     let isScrolling

    //     const handler = (e) => {
    //         window.clearTimeout(isScrolling)
    //         isScrolling = setTimeout(() => {
    //             window.scrollTo({ top: window.innerHeight * Math.round(window.scrollY / window.innerHeight), behavior: "smooth" })
    //         }, 100)
    //     }

    //     window.addEventListener("scroll", handler)

    //     return () => window.removeEventListener("scroll", handler)
    // })

    return (
        <Page title={"Home"}>
            <FrontSection currentPage={"Home"}>
                <Canvas style={{ backgroundColor: "rgb(255, 180, 180)" }}>
                    <ambientLight intensity={0.3} />
                    <spotLight position={[0, 10, 10]} angle={0.2} penumbra={1} />
                    <LoveStatue />
                </Canvas>
                <h1>Brotherly Love</h1>
                <Particles count={20} />
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
                            <div className={"quote"}>I'd like to see Paris before I die… Philadelphia will do<br /><b> - W. C. Fields</b></div>
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