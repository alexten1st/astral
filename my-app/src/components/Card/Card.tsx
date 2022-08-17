import React, { useEffect, useRef, useState } from "react";
import "./Card.css"
type Props = {
    title: string;
    word: string;
    paragraph: string;
    translate: string;
  };
const Card: React.FC<Props> = (props: Props)=>{
    // const [reverse, setReverse] = useState(false)
    const cardRef = useRef<HTMLDivElement | null>(null);
  
    
    const makeReverse=()=>{
      cardRef.current!.classList.toggle("flipCard")
    }
    return (
        <div onClick={makeReverse} className="col card-main">
    <div ref={cardRef} className="card">
      <div className="card-body front">
      <p className="card-text">{props.title}</p>
        <h2 className="card-title">{props.word}</h2>
        <p className="card-text">{props.paragraph}</p>
      </div>
      <div className="card-body back">
      <h2 className="backText">{props.translate}</h2>
      </div>
    </div>
  </div>
      );
}
export default Card;