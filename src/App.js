import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
import { Inventory } from './components/Inventory'
import { ShoppingList } from './components/ShoppingList'

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
      totalCount()
      setSelectedItem(selectedItemsList)
      console.log(selectedItem)
    }
    totalCount()
    addToQuantity(item)
  }

  function addToQuantity(item) {
    const itemArray = [...selectedItem]
    const itemQuantity = itemArray.find(itemQ => itemQ === item)
    itemQuantity.quantity++
    totalCount()
    setSelectedItem(itemArray)
  }

  function removeFromQuantity(item) {
    const itemArray = [...selectedItem]
    const itemQuantity = itemArray.find(itemQ => itemQ === item)
    if (item.quantity < 2) {
      itemArray.splice(itemQuantity, 1)
    }
    itemQuantity.quantity--
    totalCount()
    setSelectedItem(itemArray)
  }

  let totalPrice = 0
  
  function totalCount() {
    let itemQuantity = 0
    for (const itemP of selectedItem) {
      itemQuantity = itemP.quantity + itemQuantity
      totalPrice = itemP.price * itemQuantity + totalPrice
      console.log(selectedItem)
    }
    setTotalSum(totalPrice.toFixed(2))
  
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          <Inventory itemsList={items} addToCart={addToCart} />
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            <ShoppingList
              selectedItem={selectedItem}
              addToQuantity={addToQuantity}
              removeFromQuantity={removeFromQuantity}
            />
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">{`£${totalSum}`}</span>
          </div>
        </div>
      </main>
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}
