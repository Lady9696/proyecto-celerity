import { ICONS } from '../components/List/list'
import '../index.css'
// import Navbar from '../components/Navbar/navbar'
import Calculator from '../components/Calculator/calculator'

const Layout = () => {
  return <div>
{ICONS.map((icon) => <Calculator image= {icon.img} key= {icon.id} />)}

    </div>
}
export default Layout
