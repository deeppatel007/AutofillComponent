import {Navbar, Nav, Button, Dropdown, Row, Col, Container} from 'react-bootstrap';
import { useContext, useState } from 'react';
import {GiMedicines} from 'react-icons/gi';
import {Link} from 'react-router-dom'

import './custom.css';

const Header = () => {


    const [expanded, setExpanded] = useState(false);
    
    return (
        <Container>
            <Navbar expanded={expanded} style={{height: 50, background: 'black', marginTop: 15}} sticky="top" expand="lg">  
                <Nav className="col-2">
                    <Navbar.Brand href="/" >
                        <div className="mx-auto">
                            <GiMedicines className="mb-2" style={{color: '#5cb85c'}}/>
                            <span style={{color:'#ffffff', fontWeight: 600}}>Pharma</span>
                            <span style={{color:'#5cb85c', fontWeight: 600}}>Tracker</span>
                        </div>
                    </Navbar.Brand>
                </Nav>         
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} style={{background: '#3F7F3F'}} />
            </Navbar>
        </Container>
    )
}

export default Header;


