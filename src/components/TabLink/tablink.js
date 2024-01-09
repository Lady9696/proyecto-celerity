import { useState } from 'react'
import './tablink.css'
import { FLECHA } from '../config/list'
const TabLink = () => {
  // Inicializa activeArrow como false
  const [activeArrow, setActiveArrow] = useState(false)

  // Esta función cambiará el estado de activeArrow entre true y false
  const handleSelectClick = () => {
    setActiveArrow(!activeArrow)
  }

  return (
      <div className='select-container' onClick={handleSelectClick}>
        <select className='select-component'>
          <option value="someOption">Metros</option>
          <option value="otherOption">70m2</option>
          <option value="otherOption">150m2</option>
          <option value="otherOption">200m2</option>
        </select>
        <img
          className={`arrow-icon ${activeArrow ? 'rotate' : ''}`}
          src={FLECHA}
          alt="Arrow Icon"
        />
      </div>
  )
}
export default TabLink
