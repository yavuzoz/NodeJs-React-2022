import "bootstrap/dist/css/bootstrap.css";
import CardComp from "./CardComp"
import {useState} from "react"

export default function MainContainer({list}) {
    
const [cardList]=useState(list);

    return(
        <div>
        {cardList.map(card=> 
        <CardComp cardInfo={card}/>)}
        </div>
    )
}
