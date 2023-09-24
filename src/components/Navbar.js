import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import sun from '../images/sun.svg'
import "../css/Navbar.css"

function NavigationBar() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <Navbar className='p-3' id='navmain' expand="lg">
            <Navbar.Brand href="#home">  <img className='sunlogo' src={sun} alt="Brand Logo"  /> </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav"  />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                
                    <Nav.Link href="#aboutus">{t('ab')}</Nav.Link>
                    <Nav.Link href="#services" >{t('s')}</Nav.Link>
                    <Nav.Link href="#contactus" >{t('cu')}</Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
            <div className='clickables'>
            <Button id='brou'  variant="danger" style={{margin:"2px"}} >{t('b')}</Button>
            <button className='c' id="bbtn">📄</button> 

            <DropdownButton className='ml-auto' variant='danger' id="dropdown-basic-button" title="language" >
                <Dropdown.Item onClick={() => {changeLanguage('en')}}>EN</Dropdown.Item>
                <Dropdown.Item onClick={() => {changeLanguage('ja')}}>JA</Dropdown.Item>
                <Dropdown.Item onClick={() => {changeLanguage('ta')}}>TA</Dropdown.Item>
                <Dropdown.Item onClick={() => {changeLanguage('ms')}}>MS</Dropdown.Item>
                <Dropdown.Item onClick={() => {changeLanguage('zh')}}>ZH</Dropdown.Item>
            </DropdownButton>

            <DropdownButton className='c' id='extra' title = "🌐"  class='dropdown-toggle'>
            <Dropdown.Item onClick={() => {changeLanguage('en')}}>EN</Dropdown.Item>
                <Dropdown.Item onClick={() => {changeLanguage('ja')}}>JA</Dropdown.Item>
                <Dropdown.Item onClick={() => {changeLanguage('ta')}}>TA</Dropdown.Item>
                <Dropdown.Item onClick={() => {changeLanguage('ms')}}>MS</Dropdown.Item>
                <Dropdown.Item onClick={() => {changeLanguage('zh')}}>ZH</Dropdown.Item>
            </DropdownButton> 

        </div>
        </Navbar>
    );
}

export default NavigationBar;