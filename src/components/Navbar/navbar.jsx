import styled from 'styled-components'

const Nav = styled.nav`
width:100%;
height: 55px;
border-bottom: 2px solid #f1f1f1;
display: flex;
justify-content: space-between;
padding: 20px 0;
.logo{
  padding: 15px 0;
}
ul {
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  
  li{
    
  }

}
`
const Navbar = () => {
  return (
  <Nav>
    <div className="logo">
        logo celerity
    </div>
    <ul>
     <li>Celerity</li>
     <li>Servicios</li>
     <li>Soporte</li>
     <li>Contáctanos</li>
     <li>Club Celerity</li>
    </ul>
  </Nav>
  )
}
export default Navbar
