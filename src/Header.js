import React, {Component} from 'react';
import './Header.css';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

// import ReactBootstrap, {Jumbotron, Button, Col, Grid, Panel, FormGroup} from 'react-bootstrap';
import ReactBootstrap from 'react-bootstrap';
// import Form from 'react-boostrap/Form';
// import Button from 'react-bootstrap/Button';
// import FormControl from 'react-bootstrap/FormControl';

class Header extends Component {
    render() {
        return (
            <div>
                 <StickyHeader
                        style={{backgroundColor: "white"}}
                        header={
                            <div className="Header_root">
                                <div style={{backgroundColor: 'black'}}>
                                    <br/>
                                </div>
                                <div className="menu-header">
                                    <div className="menu"><img src="https://cdn.iconscout.com/icon/free/png-256/menu-bar-lines-option-list-hamburger-web-6-3228.png" 
                                    style={{width:50, height:50, marginTop: 14}}></img></div>
                                    <div className="Header_title">THE WALL STREET JOURNAL.</div>
                                    <h1 className="alt-header">WSJ</h1>
                                </div>
                                
                                <div className="options">
                                    Edition | Date | Print Edition | Video | Latest Headlines
                                </div>
                                <div className="nav">
                                    <div className="category">
                                        Home
                                    </div>
                                    <div className="category">
                                        World
                                    </div>
                                    <div className="category">
                                        U.S.
                                    </div>
                                    <div className="category">
                                        Politics
                                    </div>
                                    <div className="category">
                                        Economy
                                    </div>
                                    <div className="category">
                                        Business
                                    </div>
                                    <div className="category">
                                        Tech
                                    </div>
                                    <div className="category">
                                        Markets
                                    </div>
                                    <div className="category">
                                        Opinion
                                    </div>
                                    <div className="category">
                                        Life & Arts
                                    </div>
                                    <div className="category">
                                        Real Estate
                                    </div>
                                    <div className="category">
                                        WSJ. Magazine
                                    </div>
                                </div>
                            </div>
                            
                        }
                        className="sticky"
                    >
                        <section>
                            <div className="stocks">
                                {/* stocks */}
                                <br/>
                            </div>
                            {/* <div className="options">
                                Edition | Date | Print Edition | Video | Latest Headlines
                            </div> */}
                        </section>
                </StickyHeader>
                
                
            </div>
        );
    }
}

export default Header;

{/* <Nav className="justify-content-center" activeKey="/home">
                                    <Nav.Item>
                                    <Nav.Link eventKey="disabled" disabled>
                                            Home
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="disabled" disabled>
                                            World
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="disabled" disabled>
                                            U.S.
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="disabled" disabled>
                                            Politics
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="disabled" disabled>
                                            Economy
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="disabled" disabled>
                                            Business
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="disabled" disabled>
                                            Tech
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="disabled" disabled>
                                            Markets
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="disabled" disabled>
                                            Opinion
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="disabled" disabled>
                                            Life & Arts
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="disabled" disabled>
                                            Real Estate
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="disabled" disabled>
                                            WSJ.Magazine
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav> */}