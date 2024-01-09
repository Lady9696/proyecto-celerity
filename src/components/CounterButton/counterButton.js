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
      <span>{label}</span>
      <button className="decrement-button" onClick={handleDecrement}>-</button>
      <span className="count-display">{count}</span>
      <button className="increment-button" onClick={handleIncrement}>+</button>
    </div>
  )
}

export default CounterButton
