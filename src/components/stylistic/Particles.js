// IMPORTS

import React, { useRef, useState } from "react"

import useAnimationFrame from "use-animation-frame"

// COMPONENTS

const generateInstances = (count, height) => {
    // Generate any number of particles within a certain heigh limit
    const instances = []
    for(let i = 0;i<count;i++){
        instances.push({
            x: window.innerWidth * Math.random(),
            y: height * Math.random(),
            radius: 0.012 * window.innerHeight * (0.5 + 0.5 * Math.random()),
            color: `rgb(255, 0, 0, ${0.25 + 0.25 * Math.random()})`,
            direction: 2 * Math.PI * Math.random(),
            speed: 0.035 + Math.random() * 0.02
        })
    }
    return instances
}

// This component is NOT responsively rerendered
// Trying to wrap this component in a responsive render leads to unexpected behavior in the animation frame
const Particles = ({ count, height }) => {
    // Reference to the particle container so it can be used to track mouse movement
    const ref = useRef()

    const [mouse, setMouse] = useState(null)
    const [instances, setInstances] = useState(generateInstances(count, height))

    const mouseMoveHandler = (event) => {
        setMouse({
            x: event.clientX - ref.current.getBoundingClientRect().x,
            y: event.clientY - ref.current.getBoundingClientRect().y
        })
    }

    const mouseLeaveHandler = () => {
        setMouse(null)
    }

    useAnimationFrame((e) => {
        // Positionally update each particle based on its velocity and the change in time since last render
        // If a particle touches one of the outer walls, make it bounce off in the appropriate direction
        instances.forEach(instance => {
            if(mouse != null){
                // Normalize the step taken by the mouse offset
                const mouseAdditiveMagnitude = Math.max(Math.abs((mouse.x - instance.x) * (mouse.x - instance.x) + (mouse.y - instance.y) * (mouse.y - instance.y)), 1500)

                instance.x += (instance.speed * window.innerHeight * Math.cos(instance.direction) + 1.8 * window.innerHeight * (mouse.x - instance.x) / mouseAdditiveMagnitude) * e.delta
                instance.y += (instance.speed * window.innerHeight * Math.sin(instance.direction) + 1.8 * window.innerHeight * (mouse.y - instance.y) / mouseAdditiveMagnitude) * e.delta
            } else {
                instance.x += instance.speed * window.innerHeight * Math.cos(instance.direction) * e.delta
                instance.y += instance.speed * window.innerHeight * Math.sin(instance.direction) * e.delta
            }

            if(instance.x < instance.radius){
                instance.x = instance.radius
                instance.direction = Math.PI - instance.direction
            } else if(instance.x > window.innerWidth - instance.radius){
                instance.x = window.innerWidth - instance.radius
                instance.direction = Math.PI - instance.direction
            }
            if(instance.y < instance.radius){
                instance.y = instance.radius
                instance.direction *= -1
            } else if(instance.y > height - instance.radius){
                instance.y = height - instance.radius
                instance.direction *= -1
            }
        })
        // State must be dereferenced or else it will not trigger a rerender
        setInstances([...instances])
    })

    const particleRenders = []
    instances.forEach((instance, index) => {
        particleRenders.push(
            <circle cx={instance.x} cy={instance.y} r={instance.radius} fill={instance.color} key={index} />
        )
    })

    return (
        <div ref={ref} className={"particles"} onMouseMove={mouseMoveHandler} onMouseLeave={mouseLeaveHandler}>
            <svg xmlns={"http://www.w3.org/2000/svg"} viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}>
                {
                    particleRenders
                }
            </svg>
        </div>
    )
}

// EXPORTS

export default Particles