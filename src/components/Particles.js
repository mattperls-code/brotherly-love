import React, { useState } from "react"

import useAnimationFrame from "use-animation-frame"

const generateInstances = (count, height) => {
    const tempInstances = []
    for(let i = 0;i<count;i++){
        tempInstances.push({
            x: window.innerWidth * Math.random(),
            y: height * Math.random(),
            radius: 0.012 * window.innerHeight * (0.5 + 0.5 * Math.random()),
            color: `rgb(255, 0, 0, ${0.5 + 0.25 * Math.random()})`,
            direction: 2 * Math.PI * Math.random(),
            speed: 0.035 + Math.random() * 0.02
        })
    }
    return tempInstances
}

const Particles = ({ count, height }) => {
    const [instances, setInstances] = useState(generateInstances(count, height))

    useAnimationFrame((e) => {
        instances.forEach(instance => {
            instance.x += instance.speed * window.innerHeight * Math.cos(instance.direction) * e.delta
            instance.y += instance.speed * window.innerHeight * Math.sin(instance.direction) * e.delta

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
        setInstances([...instances])
    })

    const particleRenders = []
    instances.forEach((instance, index) => {
        particleRenders.push(
            <circle cx={instance.x} cy={instance.y} r={instance.radius} fill={instance.color} key={index} />
        )
    })

    return (
        <div className={"particles"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}>
                {
                    particleRenders
                }
            </svg>
        </div>
    )
}

export default Particles