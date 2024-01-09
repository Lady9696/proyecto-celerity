import { useState } from 'react'
import { FLECHA } from '../config/list'
const TabLinkSpace = () => {
  // Inicializa activeArrow como false
  const [activeArrow, setActiveArrow] = useState(false)

  // Esta función cambiará el estado de activeArrow entre true y false
  const handleSelectClick = () => {
    setActiveArrow(!activeArrow)
  }

  return (
      <div className='select-container' onClick={handleSelectClick}>
        <select className='select-component'>
          <option value="someOption">Espacio</option>
          <option value="otherOption">Dormitorio</option>
          <option value="otherOption">Estudio</option>
          <option value="otherOption">Sala</option>
          <option value="otherOption">Comedor</option>
        </select>
        <img
          className={`arrow-icon ${activeArrow ? 'rotate' : ''}`}
          src={FLECHA}
          alt="Arrow Icon"
        />
      </div>
  )
}
export default TabLinkSpace
