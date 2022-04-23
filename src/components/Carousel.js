import React, { useRef, useState, useEffect } from "react"

const AutoCarousel = ({ itemData, render, width, focusTime }) => {
    const ref = useRef()

    const items = [...itemData, itemData[0]]
    const [index, setIndex] = useState(0)

    useEffect(() => {
        let isMounted = true

        window.setTimeout(() => {
            if(isMounted){
                if(index == 0){
                    ref.current.scrollTo({ left: 0 })
                }
                setIndex((index + 1) % (items.length - 1))
                ref.current.scrollTo({ left: (index + 1) * width, behavior: "smooth" })
            }
        }, focusTime)

        return () => { isMounted = false }
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

const ManualCarousel = ({ itemData, render }) => {
    const ref = useRef()

    const [index, setIndex] = useState(0)

    const slides = []
    itemData.forEach((item, index) => {
        slides.push(
            render(item, index)
        )
    })

    const dots = []
    for(let i = 0;i<itemData.length;i++){
        dots.push(
            <div key={i} className={index == i ? "dot-active" : "dot-inactive"} onClick={() => {
                setIndex(i)
            }} />
        )
    }

    let timer = null

    const scrollHandler = (event) => {
        if(timer !== null){
            window.clearTimeout(timer)
        }
        timer = window.setTimeout(() => {
            const scrolledIndex = Math.round(event.target.scrollLeft / window.innerWidth)
            if(scrolledIndex == index){
                ref.current.scrollTo({ left: index * window.innerWidth, behavior: "smooth" })
            } else {
                setIndex(Math.round(event.target.scrollLeft / window.innerWidth))
            }
        }, 250)
    }

    const keyHandler = (event)  => {
        if(event.key == "ArrowLeft"){
            event.preventDefault()
        } else if(event.key == "ArrowRight"){
            event.preventDefault()
        }
    }

    useEffect(() => {
        let isMounted = true

        window.addEventListener("keydown", (event) => {
            if(isMounted){
                keyHandler(event)
            }
        })

        return () => { isMounted = false }
    }, [])

    useEffect(() => {
        let isMounted = true

        ref.current.scrollTo({ left: index * window.innerWidth, behavior: "smooth" })

        ref.current.addEventListener("scroll", (event) => {
            if(isMounted){
                scrollHandler(event)
            }
        })

        return () => { isMounted = false }
    }, [index])

    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <div ref={ref} style={{ height: "calc(100vh - 80px)" }} className={"carousel"}>
                {
                    slides
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

export { AutoCarousel, ManualCarousel }