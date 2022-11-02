import React from "react";
import useSound from "use-sound";

const PlayerItems = (props) => {

    const [play] = useSound('/sounds/blip.mp3', {volume: 0.5})
    
    return (
    <>
        <div onMouseEnter={()=>{
            props.setHoverPotion({desc: 'Heals 20 HP', index: 0})
            props.setShowPotion(true)
        }} 
        onMouseLeave={()=>{
            props.setShowPotion(false)
        }} value="20" onClick={(event)=>{
            if (props.potions[0] == 1) {
                props.potionSequence(event)
                props.setPotions([0, props.potions[1], props.potions[2]])
                props.setShowPotion(false)
            } else {
                play()
                props.setStatusText('You are out of potions!')
                props.resetReveal()
            }
        }} className="option water">Potion</div>

        <div onMouseEnter={()=>{
            props.setHoverPotion({desc: 'Heals 50 HP', index: 1})
            props.setShowPotion(true)
        }} 
        onMouseLeave={()=>{
            props.setShowPotion(false)
        }} value="50" onClick={(event)=>{
            if (props.potions[1] == 1) {
                props.potionSequence(event)
                props.setPotions([props.potions[0], 0, props.potions[2]])
                props.setShowPotion(false)
            } else {
                play()
                props.setStatusText('You are out of super potions!')
                props.resetReveal()
            }
        }} className="option grass">Super Potion</div>

        <div onMouseEnter={()=>{
            props.setHoverPotion({desc: 'Heals 100 HP', index: 2})
            props.setShowPotion(true)
        }} 
        onMouseLeave={()=>{
            props.setShowPotion(false)
        }} value="100" onClick={(event)=>{
            if (props.potions[2] == 1) {
                props.potionSequence(event)
                props.setPotions([props.potions[0], props.potions[1], 0])
                props.setShowPotion(false)
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