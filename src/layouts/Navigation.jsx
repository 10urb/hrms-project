import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Container, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

export default function Navigation() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)/*default u seçtik*/
  function handleSignOut() {
    setIsAuthenticated(false)
  }
  function handleSignIn() {
    setIsAuthenticated(true)
  }

  return (
    <div>

      <Menu inverted fixed="top">
        
        <Container>
          <Menu.Item>
            <Button as={NavLink} to="/"  inverted name="HRMS" basic  size="large" color="white">HRMS</Button>
          </Menu.Item>
         
          <Menu.Item as={NavLink} to="/" name='home' />
          <Menu.Item name='messages' />
          <Menu.Menu position='right'>
            {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}

            <Menu.Item>
          <Button as={NavLink} to="/SignUp" inverted name="signUp" basic circular size="large" color="gray">Kaydol</Button>

          </Menu.Item>
          </Menu.Menu>
          
        </Container>

      </Menu>
    </div>
  );

}
