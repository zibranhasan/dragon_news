import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Button from 'react-bootstrap/Button';

const Header = () => {
  const { user, logOut } = useContext(AuthContext)

   const handleLogOut = () => {
    logOut()
    .then(() => {

    })
    .catch( error => console.error(error))
   }
    return (
        <Navbar className='mb-4' bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link to='/'>Dragon News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">All News</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav>
            <>
              
              {
                user?.uid ?
                <>
                <span>{user?.displayName}</span>
                <Button variant="light" onClick={handleLogOut}>Log out</Button>
                </>
                :
                <>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                </>
              }
            </>


            <Link to='/profile'>
              {user?.photoURL ?
            <Image style={{height:'40px'}} roundedCircle src ={user.photoURL}></Image> 
            :
            <FaUser></FaUser> 
            }
            </Link>



          </Nav>

          <div className='d-lg-none'>

           <LeftSideNav></LeftSideNav>

          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;