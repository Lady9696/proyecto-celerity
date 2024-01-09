// import Input from '@mui/joy/Input'
import Input from '../Input/input'
import './calculator.css'

const Calculator = ({ image }) => {
  return (
    <div className='calculator-container'>
      <img src={image} alt="Device" />
      <Input />

    </div>
  )
}

export default Calculator
