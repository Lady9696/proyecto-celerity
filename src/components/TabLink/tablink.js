import './tablink.css'
const TabLink = () => {
  // Inicializa activeArrow como false

  return (
      <div className='select'>
        <select className='select-component' id="standard-select">
          <option className='options' value="someOption">Metros</option>
          <option className='options' value="otherOption">70m2</option>
          <option className='options' value="otherOption">150m2</option>
          <option className='options' value="otherOption">200m2</option>
        </select>

      </div>
  )
}
export default TabLink
