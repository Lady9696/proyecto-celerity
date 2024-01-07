import { ICONS } from '../components/List/list'
import '../index.css'

import Calculator from '../components/Calculator/calculator'

const Layout = () => {
  return <div className='primary-container'>
 <div className='container-primary-title'><h2>ENCUENTRA TU PLAN IDEAL</h2></div>
 <div className='primary-calculatro-container'>
{ICONS.map((icon) => <Calculator image= {icon.img} key= {icon.id} />)}
</div>

    </div>
}
export default Layout
