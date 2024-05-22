import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Signup.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import download from './../../assets/images/Group 1.svg'
const Signup = () => {
  return (
    <div>
        <Navbar link='سجل دخول'/>
        <div className='signup-hero'>
            <div className='signup-form'>
            <h2 style={{color:'#0A0E3F',textAlign:'center',paddingTop:'10%'}}> انشاء حساب</h2>
                <div style={{display:'flex',flexDirection:'row-reverse', justifyContent:'space-around'}}>
                <div style={{width:'50%'}}>
                <Form>
      
      <Form.Group className="mb-3" controlId="formBasicEmail" style={{display:'flex',
                flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        
                        <Form.Control type="text" placeholder=" لايميل او رقم الهاتف" style={{borderRadius:'20px',height:'2.4em',width:'80%',marginTop:'5%'}}/>
                        
                    </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicEmail" style={{display:'flex',
                flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        
                        <Form.Control type="text" placeholder=" لايميل او رقم الهاتف" style={{borderRadius:'20px',height:'2.4em',width:'80%',marginTop:'5%'}}/>
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{display:'flex',
                flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        
                        <Form.Control type="text" placeholder=" لايميل او رقم الهاتف" style={{borderRadius:'20px',height:'2.4em',width:'80%',marginTop:'5%'}}/>
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{display:'flex',
                flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        
                        <Form.Control type="text" placeholder=" لايميل او رقم الهاتف" style={{borderRadius:'20px',height:'2.4em',width:'80%',marginTop:'5%'}}/>
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{display:'flex',
                flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        
                        <Form.Control type="text" placeholder=" لايميل او رقم الهاتف" style={{borderRadius:'20px',height:'2.4em',width:'80%',marginTop:'5%'}}/>
                        
                    </Form.Group>
      
    </Form>
                </div>

                <div className='data-photos' style={{width:'50%'}}>
                {/* <Form.Group className="mb-3" controlId="formBasicEmail" style={{display:'flex',
                flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        
                        <Form.Control type="image" placeholder=" لايميل او رقم الهاتف" style={{borderRadius:'20px',
                        backgroundColor:'#E1DAFF',height:'6.4em',width:'100%',marginTop:'5%',borderStyle:'dashed',
                        borderColor:'#161D6F'}}/>
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{display:'flex',
                flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        
                        <Form.Control type="text" value='اسحب و افلت الصورة هنا او قم برفعها من الملفات'
                         placeholder=" لايميل او رقم الهاتف" style={{borderRadius:'20px',backgroundColor:'#E1DAFF',
                        height:'6.4em',width:'100%',marginTop:'5%',borderStyle:'dashed',
                        borderColor:'#161D6F'}}/>
                        
                    </Form.Group> */}
                        <div style={{borderRadius:'20px',
                        backgroundColor:'#E1DAFF',height:'6.4em',width:'100%',marginTop:'5%',borderStyle:'dashed',
                        borderColor:'#161D6F' ,display:'flex',alignItems:'center',flexDirection:'row-reverse',cursor:'pointer',justifyContent:'space-around'}}>
                            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',justifyContent:'space-evenly'}}>
                            <span style={{marginBottom:'4%'}}>الصورة الشخصية</span>
                            <span style={{marginBottom:'4%'}}>اسحب و افلت الصورة هنا او قم برفعها من الملفات</span>
                            <span style={{color:'#5F5F5F'}}>الحجم الاقصى: 1MB</span>
                            </div>
                            <div>
                            <img src={download}/>
                            </div>
                        </div>
                        <div style={{borderRadius:'20px',
                        backgroundColor:'#E1DAFF',height:'6.4em',width:'100%',marginTop:'5%',borderStyle:'dashed',
                        borderColor:'#161D6F' ,display:'flex',alignItems:'center',flexDirection:'row-reverse',cursor:'pointer',justifyContent:'space-around'}}>

                            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',justifyContent:'space-evenly'}}>
                            <p style={{marginBottom:'4%'}}>اثبات شخصية</p>
                            <p style={{marginBottom:'4%'}}>اسحب و افلت الصورة هنا او قم برفعها من الملفات</p>
                            <p style={{color:'#5F5F5F'}}>الحجم الاقصى: 1MB</p>
                            </div>
                            <div>
                            
                            <img src={download}/>
                            </div>
                            
                        </div>
                    <a href='/verify' style={{width:'100%'}}>
                    <Form.Control type="text" value="انشاء حساب" style={{borderRadius:'20px',height:'2.4em',width:'100%',
                        marginTop:'3%',fontSize:'1rem',textAlign:'center',backgroundColor:'#1EE3CF',
                        border:'none',cursor:'pointer'
                        }}/>
                    </a>
                        <p style={{marginTop:'3%'}}>لديك حساب؟ <a href='/loginpage'>تسجيل دخول</a></p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup