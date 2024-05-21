
import './Navbar.css';
import navicon from './../../assets/images/menu-bars.svg'
import logoicon from './../../assets/images/Group.png'
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';




const Navbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };
  // const [modalOpen, setModalOpen] = useState(false);
  // const [message, setMessage] = useState(" ")

  // const handleButtonClick = (value) => {
  //   setModalOpen(false);
  //   setMessage(value);}
  return (
   
   <div className='navbar'>
    <nav className={`zh-nav ${menuOpen ? 'active' : ''}`}>
    
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'5px'}}>
           <Button className='start-button'  style={{backgroundColor:'#161D6F',padding:' 5px 20px'}}>
             <a
               href='#'
               target='_b_blank'
              //  rel='noopener noreferrer'
               style={{  textDecoration: 'none', color: '#1EE3CF' }}
             >
                 ابدأ
             </a>
           </Button> 
         
           <Button className='login-button'  style={{padding:' 5px 20px'}}>
                 <a href={props.address} style={{textDecoration:'none', color: '#161D6F',
           backgroundColor:'transparent',cursor:'pointer'}}>
                     {props.link}
                 </a>
           </Button> 
           {/* <Button className='login-button'  style={{padding:' 5px 20px'}}>
                 <a href='/loginpage' style={{textDecoration:'none', color: '#161D6F',
           backgroundColor:'transparent',cursor:'pointer'}}>
                     {props.link2}
                 </a>
           </Button>  */}
           
         </div>
    
         <input type='checkbox' id='check' checked={menuOpen} onChange={handleMenuToggle} />
    <label htmlFor='check' className='checkbtn'>
        <img src={navicon} style={{width:'30px',height:'30px'}}/>
      </label>
      
      {/* <div className='div-ul' style={{display:'flex'}}> */}
      <ul className='zh-nav-elements'>
         <li><a href='/' onClick={handleMenuItemClick}> المزيد</a></li>
         <li><a href='/' onClick={handleMenuItemClick}>البيع</a></li>
         <li><a href='/' onClick={handleMenuItemClick}> برامج الجنسية لدى اسيستفاي</a></li>
         <li><a href='/' onClick={handleMenuItemClick}> حول</a></li>
         <li><a href='/' onClick={handleMenuItemClick}> العقارات</a></li>
       </ul>
       <label className='logo'><a href='/'><img src={logoicon}/></a></label>
      {/* </div> */}
      
    </nav>
   </div>
  );
};

export default Navbar;