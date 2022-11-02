import React from "react";
import useSound from "use-sound";

const PlayerItems = (props) => {

    const [play] = useSound('/sounds/blip.mp3', {volume: 0.5})
    
    return (
    <>
        <div value="20" onClick={(event)=>{
            if (props.potions[0] == 1) {
                props.potionSequence(event)
                props.setPotions([0, props.potions[1], props.potions[2]])
            } else {
                play()
                props.setStatusText('You are out of potions!')
                props.resetReveal()
            }
        }} className="option water">Potion</div>

        <div value="50" onClick={(event)=>{
            if (props.potions[1] == 1) {
                props.potionSequence(event)
                props.setPotions([props.potions[0], 0, props.potions[2]])
            } else {
                play()
                props.setStatusText('You are out of super potions!')
                props.resetReveal()
            }
        }} className="option grass">Super Potion</div>

        <div value="100" onClick={(event)=>{
            if (props.potions[2] == 1) {
                props.potionSequence(event)
                props.setPotions([props.potions[0], props.potions[1], 0])
            } else {
                play()
                props.setStatusText('You are out of hyper potions!')
                props.resetReveal()
            }
        }} className="option electric"> Hyper Potion</div>

        <div onClick={()=>{
            props.changeView('menu')
            props.setStatusText('Blastoise is waiting for your orders!')
            props.resetReveal()
        }} className="option fire">Back</div>
    </>
    )
}

export default PlayerItems