import React from 'react'

export function ShoppingList(props) {
  return props.selectedItem.map((item, index) => (
    <li key={index}>
      <img src={`assets/icons/${item.id}.svg`} alt={item.name} />
      <p>{item.name}</p>
      <button
        className="quantity-btn remove-btn center"
        onClick={() => props.removeFromQuantity(item)}
      >
        -
      </button>
      <span className="quantity-text center">{item.quantity} </span>
      <button
        className="quantity-btn add-btn center"
        onClick={() => props.addToQuantity(item)}
      >
        {' '}
        +{' '}
      </button>
    </li>
  ))
}
