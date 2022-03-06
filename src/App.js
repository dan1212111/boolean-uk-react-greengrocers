import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
import { Store } from './components/header/Store'
import { Cart } from './components/main/Cart'
import { Total } from './components/main/Total'
import { Footer } from './components/Footer/Footer'

import initialStoreItems from './store-items'

export default function App() {
  const [items, setItems] = useState(initialStoreItems)
  const [selectedItem, setSelectedItem] = useState([])
  const [totalSum, setTotalSum] = useState(0)

  function addToCart(item) {
    const findItem = selectedItem.find(itemS => itemS === item)
    if (findItem !== item) {
      const selectedItemsList = [...selectedItem, item]
      item.quantity = 1
      setSelectedItem(selectedItemsList)
      totalCount(item)
    }
    addToQuantity(item)
    totalCount(item)
  }

  function addToQuantity(item) {
    const itemArray = [...selectedItem]
    const itemQuantity = itemArray.find(itemQ => itemQ === item)
    itemQuantity.quantity++
    setSelectedItem(itemArray)
    totalCount(item)
  }

  function removeFromQuantity(item) {
    const itemArray = [...selectedItem]
    const itemQuantity = itemArray.find(itemQ => itemQ === item)
    if (item.quantity < 2) {
      for (let i = 0; i < itemArray.length; i++) {
        if (itemArray[i] === item) {
          itemArray.splice(i, 1)
        }
      }
    } else {
      itemQuantity.quantity--
    }
    setSelectedItem(itemArray)
    totalCount(item)
  }

  function totalCount(item) {
    let totalPrice = 0
    const itemArray = [...selectedItem]
    for (const items of itemArray) {
      if (items !== item) {
        totalPrice += item.price
        setTotalSum(totalPrice.toFixed(2))
      }
      totalPrice = items.price * items.quantity + totalPrice
      setTotalSum(totalPrice.toFixed(2))
    }
  }

  return (
    <>
      <Store itemsList={items} addToCart={addToCart} />
      <main id="cart">
        <Cart
          selectedItem={selectedItem}
          addToQuantity={addToQuantity}
          removeFromQuantity={removeFromQuantity}
        />
        <Total totalSum={totalSum} />
      </main>
      <Footer />
    </>
  )
}
