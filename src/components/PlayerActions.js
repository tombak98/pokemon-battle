import React from "react";

const PlayerActions = (props) => {
  return (
    <>
      <div onClick={props.changeView} className="option fire">Fight</div>
      <div className="option electric">Bag</div>
      <div className="option grass">Pokemon</div>
      <div className="option water">Run</div>
    </>
  );
};

export default PlayerActions
