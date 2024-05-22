import React from 'react'
import img from './../../assets/images/signuphero.png'
import Navbar from './../../components/Navbar/Navbar'
import Hero from './../../components/Hero/Hero'
import { Form } from 'react-bootstrap'
const Verify = () => {
  return (
    <div>
        <div className='loginpage' style={{ position: 'relative' }}>
            {/* <img src={img} style={{ position: 'absolute', width: '100%', height: '100%', zIndex: '2'}} /> */}
            <div>
                <Navbar link='سجل دخول'/>
                <Hero />
                <div className='form-div' style={{position:'absolute',height:'40%',width:'40vw',top:'26%',left:'30%',zIndex:'5',borderRadius:'19px' ,
                display:'flex',
                flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <Form style={{width:'70%',height:'100%',backgroundColor:'#FFFFFF',marginLeft:'50%',borderRadius:'19px'}}>
                        <h2 style={{color:'#0A0E3F',textAlign:'center',paddingTop:'10%'}}>   <span style={{color:'#50008073'}}>RED</span>  مرحبا بك</h2>

                        <h5 style={{textAlign:'center'}}>  (red1234@gmail.com): لقد تم ارسال رمز التأكيد الى</h5>
                            <div style={{display:'flex',alignItems:'center',marginTop:'3%'}}>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{display:'flex',
                flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

                        <Form.Control type="text"  style={{borderRadius:'10px',height:'2.4em',width:'70%',
                        marginTop:'10%',fontSize:'1rem',textAlign:'center',backgroundColor:'#ACACAC',
                        border:'none',cursor:'pointer'
                        }}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{display:'flex',
                flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

                        <Form.Control type="text"  style={{borderRadius:'10px',height:'2.4em',width:'70%',
                        marginTop:'10%',fontSize:'1rem',textAlign:'center',backgroundColor:'#ACACAC',
                        border:'none',cursor:'pointer'
                        }}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{display:'flex',
                flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

                        <Form.Control type="text"  style={{borderRadius:'10px',height:'2.4em',width:'70%',
                        marginTop:'10%',fontSize:'1rem',textAlign:'center',backgroundColor:'#ACACAC',
                        border:'none',cursor:'pointer'
                        }}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{display:'flex',
                flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

                        <Form.Control type="text"  style={{borderRadius:'10px',height:'2.4em',width:'70%',
                        marginTop:'10%',fontSize:'1rem',textAlign:'center',backgroundColor:'#ACACAC',
                        border:'none',cursor:'pointer'
                        }}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{display:'flex',
                flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

                        <Form.Control type="text"  style={{borderRadius:'10px',height:'2.4em',width:'70%',
                        marginTop:'10%',fontSize:'1rem',textAlign:'center',backgroundColor:'#ACACAC',
                        border:'none',cursor:'pointer'
                        }}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{display:'flex',
                flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

                        <Form.Control type="text" value='_'  style={{borderRadius:'10px',height:'2.4em',width:'70%',
                        marginTop:'10%',fontSize:'1rem',textAlign:'center',backgroundColor:'#fff',
                        border:'none',cursor:'pointer',boxShadow:'1px 1px 4px 1px rgba(0, 0, 0, 0.506)'
                        }}/>
                    </Form.Group>
                            </div>

                    <a href='/welcome' style={{textDecoration:'none'}}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{display:'flex',
                flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

                        <Form.Control type="text" value=" تأكيد" style={{borderRadius:'20px',height:'2.4em',width:'70%',
                        marginTop:'3%',fontSize:'1rem',textAlign:'center',backgroundColor:'#1EE3CF',
                        border:'none',cursor:'pointer'
                        }}/>
                    </Form.Group>
                    </a>
                    <h5 style={{textAlign:'center',marginTop:'2%'}}>اذا لم يصلك الرمز يمكنك اعادة المحاولة بعد 4:20د</h5>
                    <a href='/verify' style={{textDecoration:'none'}}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{display:'flex',
                flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

                        <Form.Control type="text" value=" إعادة الإرسال" style={{borderRadius:'20px',height:'2.4em',width:'70%',
                        marginTop:'3%',fontSize:'1rem',textAlign:'center',backgroundColor:'#fff',boxShadow:'1px 1px 4px 1px rgba(0, 0, 0, 0.506)',
                        border:'none',cursor:'pointer'
                        }}/>
                    </Form.Group>
                    </a>
                    
                </Form>
                
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Verify