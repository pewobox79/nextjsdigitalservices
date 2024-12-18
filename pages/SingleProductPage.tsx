'use client'
import {useState} from "react";
import Heading from "@/components/globals/Heading";

const SingleProductPage =({product})=>{
console.log("product single data",product)

    const [color, setColor] = useState(false)

    function changeColor(){
        setColor(!color)
    }
    return <div>
        <h1 style={{color: color ? "red": "black"}}>{ product.title }</h1>
        <button onClick={changeColor}>change color</button>

        <Heading/>
    </div>
}

export default SingleProductPage;