import React, { useRef, useState, useEffect } from "react"

const AutoCarousel = ({ itemData, render, width, focusTime }) => {
    const ref = useRef()

    const [items] = useState([...itemData, itemData[0]])
    const [index, setIndex] = useState(0)

    useEffect(() => {
        window.setTimeout(() => {
            if(index == 0){
                ref.current.scrollTo({ left: 0 })
            }
            setIndex((index + 1) % (items.length - 1))
            ref.current.scrollTo({ left: (index + 1) * width, behavior: "smooth" })
        }, focusTime)
    }, [index])

    const itemRenders = []
    items.forEach((item, index) => {
        itemRenders.push(render(item, index))
    })
    
    return (
        <div ref={ref} className={"carousel"}>
            {
                itemRenders
            }
        </div>
    )
}

export { AutoCarousel }