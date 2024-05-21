import React from 'react'
// import Loginpage from '../../Loginpage/Loginpage'
// import Navbar from '../../components/Navbar/Navbar'
// import Hero from '../../components/Hero/Hero'
// import img from './../../assets/images/overlay.png'
import img from './../../../assets/images/overlay.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import appleimg from './../../assets/images/path4.svg'
import appleimg from './../../../assets/images/path4.svg'
import facebook from './../../../assets/images/path14.svg'
import google from './../../../assets/images/logo googleg 48dp.svg'
import Navbar from '../../../components/Navbar/Navbar';
import Hero from '../../../components/Hero/Hero';
import './Logoutpage.css'
const Logoutpage = () => {
  return (
    <div>
        <div className='loginpage' style={{ position: 'relative' }}>
            <img src={img} style={{ position: 'absolute', width: '100%', height: '100%', zIndex: '2'}} />
            <div>
                <Navbar link='سجل دخول'/>
                <Hero />
                <div className='form-div' style={{position:'absolute',height:'40%',width:'40vw',top:'26%',left:'30%',zIndex:'5',borderRadius:'19px' ,
                display:'flex',
                flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <Form style={{width:'70%',height:'100%',backgroundColor:'#FFFFFF',marginLeft:'50%',borderRadius:'19px'}}>
                        <h2 style={{color:'#0A0E3F',textAlign:'center',paddingTop:'10%'}}> هل انت متأكد من تسجيل الخروج؟ </h2>
                    {/* <Form.Group className="mb-3" controlId="formBasicEmail" style={{display:'flex',
                flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        
                        <Form.Control type="text" placeholder=" لايميل او رقم الهاتف" style={{borderRadius:'20px',height:'2.4em',width:'70%',marginTop:'5%'}}/>
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" style={{display:'flex',
                flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                       
                        <Form.Control type="text" placeholder=" كلمة المرور" style={{borderRadius:'20px',height:'2.4em',width:'70%',marginTop:'5%'}}/>
                    </Form.Group> */}
                    <a href='/' style={{textDecoration:'none'}}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{display:'flex',
                flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        {/* <Form.Check type="checkbox" label="Check me out" /> */}
                        <Form.Control type="text" value=" تأكيد" style={{borderRadius:'20px',height:'2.4em',width:'70%',
                        marginTop:'10%',fontSize:'1rem',textAlign:'center',backgroundColor:'#1EE3CF',
                        border:'none',cursor:'pointer'
                        }}/>
                    </Form.Group>
                    </a>
                    <a href='/welcome' style={{textDecoration:'none'}}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{display:'flex',
                flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        {/* <Form.Check type="checkbox" label="Check me out" /> */}
                        <Form.Control type="text" value=" تراجع" style={{borderRadius:'20px',height:'2.4em',width:'70%',
                        marginTop:'6%',fontSize:'1rem',textAlign:'center',backgroundColor:'#fff',boxShadow:'1px 1px 4px 1px rgba(0, 0, 0, 0.506)',
                        border:'none',cursor:'pointer'
                        }}/>
                    </Form.Group>
                    </a>
                    {/* <Button variant="primary" type="submit">
                        Submit
                    </Button> */}
                    {/* <div className='form-questions'>
                    <p>ليس لديك حساب؟ <a href='/signup'>انشاء حساب</a></p>
                    <a href='#'>نسيت كلمة المرور؟</a>
                </div> */}
                {/* <p style={{color:'#D9D9D9',textAlign:'center',marginTop:'5%'}}><span>______________________</span>او <span>______________________</span></p>

                <div className='buttons-div'>
                    <Button style={{backgroundColor:'#1877F2',borderRadius:'21px',color:'#fff'}}>
                        <img src={facebook}/>
                        <span>Facebook</span>
                    </Button>
                    <Button style={{backgroundColor:'#000000'}}><img src={appleimg}/>
                        <span>Apple</span>
                        </Button>
                    <Button style={{backgroundColor:'white',color:'#000',boxShadow:'1px 1px 4px 1px rgba(0, 0, 0, 0.506)'}}>
                    <img src={google} />
                        <span>Google</span>
                    </Button>
                </div> */}
                </Form>
                
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Logoutpage