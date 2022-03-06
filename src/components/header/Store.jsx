import React from 'react'
import { Inventory } from './Inventory'

export function Store(props) {
  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <ul className="item-list store--item-list">
        <Inventory itemsList={props.itemsList} addToCart={props.addToCart} />
      </ul>
    </header>
  )
}
