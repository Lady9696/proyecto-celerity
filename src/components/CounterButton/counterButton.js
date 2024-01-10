import { useState } from 'react'
import './counterButton.css'

const CounterButton = ({ label }) => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1)
  }

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div className="counter-container">
       <button className="increment-button" onClick={handleIncrement}>+</button>
      <span>{label}</span>
      <span className="count-display">{count}</span>
      <button className="decrement-button" onClick={handleDecrement}>-</button>
    </div>
  )
}

export default CounterButton
