import React from "react";
import { useState } from "react";

export default function App () {
  const [price, setPrice] = useState(0)
  const [item, setItem] = useState("")
  const [shopList, setShopList] = useState([])
  return (
    <div>
      <h1>Hello world</h1>
      <form action="">
        <input 
          type="text" 
          name="item"
           id="" 
           placeholder="Enter the item name"/>
        <input 
          type="number" 
          name="price" 
          id="price"
          placeholder="Enter the price" />
        <input type="submit" value="add" />
      </form>
      <ul>
        <p>{shopList}</p>
      </ul>
    </div>
  )
}