import React, { useEffect, useState, useRef } from "react";
import { makeRandomNumber } from "../utils";

function Ticker() {
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("black");
  const prevPrice=useRef(price)

  useEffect(()=>{
    if(prevPrice.current > price){
      setColor("red")
    }else if(prevPrice.current < price){
      setColor("green")
    }else{setColor("black")}

    prevPrice.current=price;
  }, [price])

  useEffect(() => {
    const id = setInterval(() => setPrice(makeRandomNumber), 1000);
    return function () {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h1>TickerMaster</h1>
      <h2 style={{ color: color }}>Price: {price}</h2>
    </div>
  );
}

export default Ticker;
