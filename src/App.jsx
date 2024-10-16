import React from "react";

export default function App () {
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
    </div>
  )
}