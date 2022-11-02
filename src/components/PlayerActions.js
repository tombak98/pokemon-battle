import React from "react";
import useSound from "use-sound";

const PlayerActions = (props) => {

  const [play] = useSound('/sounds/blip.mp3', {volume: 0.25})

  return (
    <>
      <div onClick={()=>{
        props.changeView()
        play()
        }} className="option fire">Fight</div>
      <div onClick={play} className="option electric">Bag</div>
      <div onClick={()=>{
        play()
        props.setStatusText('You have no other pokemon to send out!')
        props.resetReveal()
        }} className="option grass">Pokemon</div>
      <div onClick={()=>{
        play()
        props.setStatusText('Cannot escape!')
        props.resetReveal()
        }} className="option water">Run</div>
    </>
  );
};

export default PlayerActions
