import React from 'react'

export function Inventory(props) {
  return props.itemsList.map(item => (
    <li key={item.id}>
      <img src={`assets/icons/${item.id}.svg`} alt={item.name} />
      <button onClick={() => props.addToCart(item)}>Add to Cart</button>
      <button onClick={props.filterVeg}>Veg</button>
      <button onClick={props.filterFruit}>Fruit</button>
    </li>
  ))
}
