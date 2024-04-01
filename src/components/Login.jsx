import React,{useState} from 'react'
import {Button,Col,Container,Form,Row  } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { navigate,setTimout,promise } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { userAuthSuccess } from '../redux/userAuth';


  function Login() {
    const[validated,setValidate]=useState(false);
    const[userEmail,setuserEmail]=useState("");
    const[userPassword,setUserPassword]=useState("");
 
  const dispatch = useDispatch()

    const handleSubmit= async(event)=>{
        event.preventDefault();
        const form = event.currentTarget;

        if(form.checkValidity() === false) {
            event.stopPropagation();
            setValidate(true)
          }else{
            setValidate(true)
          }
          try {

            let res=await axios.post("http://localhost:8080/api/v1/login",{
           
            email:userEmail,
            password:userPassword
          }); 
          if(res.data.success){

            if(res.data.isAuthenticated){

              dispatch(userAuthSuccess({user:res.data.user, isAuthenticated:res.data.isAuthenticated}))
              toast.success(res.data.message)
            await new promise((resolve)=> setTimout(resolve, 2000))
            navigate("/")
           }else{
             toast.error(res.data.message)
          } 
          }else{
            toast.error(res.data.message)
          };
            
          } catch (error) {
            toast.error(error.message)
            
           
          }
        

    }
    const handleUserEmail=(e)=>{
      setuserEmail(e.target.value )
    }
    const handlepassword=(e)=>{
      setUserPassword(e.target.value )
    }




  return (
    <Container>
    <ToastContainer position="top-center"/>
  <Row>
      <Col  className='mt-3'>
          <h2>Login</h2>

      </Col>
  </Row>
  <Row>
      <Col>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label>Email:</Form.Label>
      <Form.Control type="text" placeholder="Enter Email" required onKeyUp={handleUserEmail} />
      <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">please entre your full name!</Form.Control.Feedback>
    </Form.Group>
   
    <Form.Group className="mb-3" controlId="formGroupPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Enter password" required onKeyUp={handlepassword} />
      <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">please entre your password!</Form.Control.Feedback>
    </Form.Group>
    <Button  className="mb-3 border-0" variant='success' type="submit">Login</Button>
  </Form>
      </Col>
  </Row>
 </Container>
  )
}

export default Login