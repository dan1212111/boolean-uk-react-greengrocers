import React from 'react'
import { Inventory } from './Inventory'
import { useState } from 'react'

export function Store(props) {
  const [vegFilter, setVegFilter] = useState(false)
  const [fruitFilter, setFruitFilter] = useState(false)
  const [array, setArray] = useState(props.itemsList)

  function filterVeg() {
    if (vegFilter === false) {
      setVegFilter(true)
      filter('v')
    }
    if (vegFilter === true) {
      setVegFilter(false)
      setArray(props.itemsList)
    }
  }

  function filterFruit() {
    if (fruitFilter === false) {
      setFruitFilter(true)
      filter('f')
    }
    if (fruitFilter === true) {
      setFruitFilter(false)
      setArray(props.itemsList)
    }
  }

  function filter(type) {
    const vegArr = props.itemsList.filter(item => item.type === 'veg')
    const fruitArr = props.itemsList.filter(item => item.type === 'fruit')
    if (type === 'v') {
      setArray(vegArr)
    }
    if (type === 'f') {
      setArray(fruitArr)
    }
  }

  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <ul className="item-list store--item-list">
        <Inventory
          itemsList={array}
          addToCart={props.addToCart}
          filterVeg={filterVeg}
          filterFruit={filterFruit}
        />
      </ul>
    </header>
  )
}
