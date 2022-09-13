import React from "react";

const TypedText = ({updateReveal, revealedLetters, children, delay=110}) => {
    
    // const [revealedLetters, setRevealedLetters] = React.useState(0)
    const interval = setInterval(()=> updateReveal(),delay)

    React.useEffect(()=>{
        if (revealedLetters >= children.length) clearInterval(interval)
    },[children,interval,revealedLetters])

    React.useEffect(()=>{
        return () => {
            clearInterval(interval)
        }
    },[interval])

    return ( 
    <>
        <p className="status-text">{children.substring(0, revealedLetters)}</p>
    </>
    )
}

export default TypedText