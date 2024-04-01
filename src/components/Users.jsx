import React, { useEffect,useState, } from 'react'
import {Container,Col,Row, Table} from "react-bootstrap";
import axios from "axios"

function Users() {

  const[users, setUsers]= useState([]);
    useEffect(()=>{
      const getAllusers = async()=>{
        try {
          const res = await axios.get("http://localhost:8080/api/v1/users");
          setUsers(res.data.users);
        } catch (error) {
          
        }
      }
      getAllusers();

      
    },[]);
    console.log(users);
  return (
    <Container>
    
  <Row>
      <Col  className='mt-3'>
          <h2>Users</h2>

      </Col>
  </Row>
  <Row>
  <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>FullName</th>
          <th>email</th>
          
        </tr>
      </thead>
      <tbody>
        {users && users.map((user,index)=>(
          <tr key={index}>
          <td>{index+1}</td>
          <td>{user.FullName}</td>
          <td>{user.email}</td>
          
        </tr>
       
        ))}
      </tbody>
    </Table>
  </Row>
    </Container>
  )
}

export default Users