// IMPORTS

import React, { useRef, useState } from "react"

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"
import { useFrame, useLoader } from "@react-three/fiber"

// COMPONENTS

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

// EXPORTS

export default LoveStatue