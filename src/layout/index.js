import { ICONS, ICONS_MEDIA } from '../components/config/list'
import '../index.css'
import Button from '../components/button/button'
import Calculator from '../components/Calculator/calculator'
import TabLink from '../components/TabLink/tablink'
import TabLinkSpace from '../components/TablinkSpace/tablinkSpace'
import CounterButton from '../components/CounterButton/counterButton'
import SubmitButton from '../components/SubmitButton/submitButton'

const Layout = () => {
  return <>
  <div className='container-primary-title'><h2>ENCUENTRA TU PLAN IDEAL</h2></div>
  <div className='container-uno'>
    <div className='first-container' >
 <div className='button-container'>
 <Button text='Casa o Depart'/>
 <Button text='Oficina'/>
 <Button text='Partner'/>
 </div>
 <div className='container-title'><span>¿Cuántos dispositivos tienes en casa?</span></div>
 <div className='primary-calculatro-container'>
{ICONS.map((icon) => <Calculator image= {icon.img} key= {icon.id} />)}
</div>
</div>
<div className='second-section-container'>
<div className='container-title'><span>¿En qué utilizas más el internet?</span></div>
<div className='primary-calculatro-container'>
{ICONS_MEDIA.map((icon) => <img src={icon.img} key= {icon.id} />)}
</div>
<div className='container-metros'>
  <TabLink />
  <TabLinkSpace />
</div>
<div className='container-buttons-count'>
<CounterButton label='Pisos' />
<CounterButton label='Personas' />
</div>
</div>
<div className='third-section-container'>
<SubmitButton />
</div>
    </div>
    </>
}
export default Layout
