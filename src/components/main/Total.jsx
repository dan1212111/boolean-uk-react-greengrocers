import React from 'react'

export  function Total(props) {
  return (
    <div className="total-section">
    <div>
      <h3>Total</h3>
    </div>
    <div>
      <span className="total-number">{`£${props.totalSum}`}</span>
    </div>
  </div>
  )
}
