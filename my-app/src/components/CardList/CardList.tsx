import React, { FormEventHandler, useEffect, useState } from "react";
import {json as CardsMock} from "../../mockCards"
import Card from "../Card/Card";
import "./CardList.css"
function CardList () {
    interface Card{
        id: number;
        title: string;
        word: string;
        paragraph: string;
        translate: string;
    }
     const [cards, setCards] = useState<Card[]>([])
    useEffect(()=>{
        setCards(CardsMock.all_data)
    }, [cards])
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 list">
        {cards.map((el) => <Card key={el.id} title={el.title} word={el.word} paragraph={el.paragraph} translate={el.translate}/>)}
        
    </div>
  );
}

export default CardList;
