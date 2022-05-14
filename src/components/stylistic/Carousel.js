// IMPORTS

import React, { useRef, useState, useEffect } from "react"

// COMPONENTS

const AutoCarousel = ({ itemData, render, width, focusTime }) => {
    // Reference to the carousel so it can be scrolled programmatically
    const ref = useRef()

    // Include the first element twice so automatic animation is seamless
    const items = [...itemData, itemData[0]]

    // Keep track of the current focused item index
    const [index, setIndex] = useState(0)

    useEffect(() => {
        let isMounted = true

        window.setTimeout(() => {
            if(isMounted){
                if(index == 0){
                    // Instant scroll to beginning to make infinite scroll transition look instantaneous
                    ref.current.scrollTo({ left: 0 })
                }
                // Modulo keeps index within accessible range for the array
                setIndex((index + 1) % (items.length - 1))

                ref.current.scrollTo({ left: (index + 1) * width, behavior: "smooth" })
            }
        }, focusTime)

        // Prevent memory leak from state change to unmounted component
        return () => { isMounted = false }
    }, [index])

    // Generates an array of components created with the provided render function
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

const ManualCarousel = ({ itemData, render, width, borderRadius }) => {
    // Reference to the carousel so it can be scrolled programmatically
    const ref = useRef()

    // Keep track of the current focused item index
    const [index, setIndex] = useState(0)

    // Generates an array of components created with the provided render function
    const itemRenders = []
    itemData.forEach((item, index) => {
        itemRenders.push(
            render(item, index)
        )
    })

    // Generates an array of navigation dots users use to control the carousel
    const dots = []
    for(let i = 0;i<itemData.length;i++){
        dots.push(
            <div key={i} className={index == i ? "dot-active" : "dot-inactive"} onClick={() => {
                setIndex(i)
            }} />
        )
    }

    // No horizontal scroll through arrow keys
    const keyHandler = (event)  => {
        if(event.key == "ArrowLeft"){
            event.preventDefault()
        } else if(event.key == "ArrowRight"){
            event.preventDefault()
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", keyHandler)

        // Prevent memory leak from unclosed listener
        return () => { window.removeEventListener("keydown", keyHandler) }
    }, [])

    // Auto correct scroll position when the user stops scrolling
    let timer = null

    const scrollHandler = (event) => {
        if(timer !== null){
            window.clearTimeout(timer)
        }
        // On scroll end, find closest index based on current scroll position then smooth scroll to fix position difference
        timer = window.setTimeout(() => {
            const scrolledIndex = Math.round(event.target.scrollLeft / width)
            if(scrolledIndex == index){
                ref.current.scrollTo({ left: index * width, behavior: "smooth" })
            } else {
                setIndex(Math.round(event.target.scrollLeft / width))
            }
        }, 250)
    }

    useEffect(() => {
        let isMounted = true

        // On index change, smooth scroll to new position
        ref.current.scrollTo({ left: index * width, behavior: "smooth" })

        ref.current.addEventListener("scroll", (event) => {
            if(isMounted){
                scrollHandler(event)
            }
        })

        // Prevent memory leak from state change to unmounted component
        return () => { isMounted = false }
    }, [index])

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div ref={ref} style={{ height: "calc(100% - 80px)", borderRadius: borderRadius ? 20 : 0 }} className={"carousel"}>
                {
                    itemRenders
                }
            </div>
            <div style={{ height: 80 }} className={"dot-controller"}>
                {
                    dots
                }
            </div>
        </div>
    )
}

// EXPORTS

export { AutoCarousel, ManualCarousel }