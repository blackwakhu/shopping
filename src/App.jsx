import React from "react";
import { useState } from "react";

export default function App () {
  const [price, setPrice] = useState(0)
  const [item, setItem] = useState("")
  const [shopList, setShopList] = useState([])
  const handleInput = (e) =>  {
    e.preventDefault()
    setShopList(shopList.push({"item": item, "price": price}))
  }
  return (
    <div>
      <h1>Hello world</h1>
      <form onSubmit={handleInput}>
        <input 
          type="text" 
          name="item"
           id="" 
           placeholder="Enter the item name"
           onChange={(e) => setItem(e.target.value)}/>
        <input 
          type="number" 
          name="price" 
          id="price"
          placeholder="Enter the price" 
          onChange={(e) => setPrice(e.target.value)}/>
        <input type="submit" value="add" />
      </form>
      <ul>
        <p>{shopList}</p>
      </ul>
    </div>
  )
}