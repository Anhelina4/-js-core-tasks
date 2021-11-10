import React, { useState } from "react"
import TextArr from "./TextArr"
import TextItem from "./TextItem"
function TextContainer(props) {
    //отслеживает на какую компоненту было нажато
    const [number, setNumber] = useState()
    console.log(number)

    // const setIsOpen = (index) => {
    //     if(index == number) return true
    //     else return false
    // }

  return (
    <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
      {TextArr.map((item, index) => {
        return <TextItem key={item.id} number={number} text={item.text} id={index+1} setNumber={setNumber}/>
      })}
    </div>
  )
}

export default TextContainer
