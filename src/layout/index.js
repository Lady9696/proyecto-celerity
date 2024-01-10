import { ICONS, ICONS_MEDIA } from '../components/config/list'
import '../index.css'
import Button from '../components/button/button'
import Calculator from '../components/Calculator/calculator'
import TabLink from '../components/TabLink/tablink'
import TabLinkSpace from '../components/TablinkSpace/tablinkSpace'
import CounterButton from '../components/CounterButton/counterButton'
import SubmitButton from '../components/SubmitButton/submitButton'
const Layout = () => {
  return <div className='general'>
    <h2 className='container-primary-title'>ENCUENTRA TU PLAN IDEAL</h2>
  <div className='container'>

  <div className='primary-section'>
 <div className='button-container'>
 <Button text='Casa o Depart'/>
<span></span>

 <Button text='Oficina'/>
<span></span>
 <Button text='Partner'/>

 </div>
 <div className='container-title'><span className='subtitle'>¿Cuántos dispositivos tienes en casa?</span></div>
 <div className='primary-calculatro-container'>
{ICONS.map((icon) => <Calculator image= {icon.img} key= {icon.id} />)}
</div>
</div>

<div className='second-section-container'>
<div className='container-title-meter'><span className='subtitle'>¿En qué utilizas más el internet?</span></div>
<div className='icon-container'>
{ICONS_MEDIA.map((icon) => <img className='icon-device' src={icon.img} key= {icon.id} />)}
</div>
<div className='container-metros'>
  <div className='container-select'>
  <TabLink />
  <TabLinkSpace />
  </div>
  <CounterButton label='Personas' />
<CounterButton label='Pisos' />
</div>

</div>
<div className='third-section-container'>
<SubmitButton />
</div>
 </div>
 </div>
}
export default Layout
/* <div className='container-primary-title'><h2>ENCUENTRA TU PLAN IDEAL</h2></div> */
