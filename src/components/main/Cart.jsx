import React from 'react'
import { ShoppingList } from './ShoppingList'

export function Cart(props) {
  return (
    <>
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          <ShoppingList
            selectedItem={props.selectedItem}
            addToQuantity={props.addToQuantity}
            removeFromQuantity={props.removeFromQuantity}
          />
        </ul>
      </div>
    </>
  )
}
