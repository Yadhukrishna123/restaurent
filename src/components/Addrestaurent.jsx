import React, { useState } from 'react'
import { Col, Container, Row,Form ,Button,} from 'react-bootstrap'

function Addrestaurent() {
    const[RestaurentName,setRestaurentName]=useState("")
    const handleRestaurentName=(e)=>{
        setRestaurentName(e.target.value)
    }
    console.log(RestaurentName)
    let[RestaurentAddress,setRestaurentAddress]=useState("")
    let handleRestaurentAddress=(e)=>{
        setRestaurentAddress(e.target.value)
    }
    console.log(RestaurentAddress)
    let[NeighbourHood,setNeibourHood]=useState("")
    let handleNeibourHood=(e)=>{
        setNeibourHood(e.target.value)
    }
    console.log(NeighbourHood)

    let[cuisine,setcuisine]=useState("")
    let handlecuisine=(e)=>(
        setcuisine(e.target.value)
    )
        console.log(cuisine)
  return (
   <Container>
    <row>
        <Col>
            <h2>Add restaurent details</h2>

        </Col>
    </row>
    <Row>
        <Col>
        <Form>
      <Form.Group className="mb-3" controlId="formGroupn">
        <Form.Label>Restaurent Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Restaurent Name" onKeyUp={handleRestaurentName} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupaddress">
        <Form.Label>Restaurent Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Restaurent Address" onKeyUp={handleRestaurentAddress}  required  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Neighbourhood</Form.Label>
        <Form.Control type="text" placeholder="Enter Neighbourhood  " onKeyUp={handleNeibourHood} required />
      </Form.Group>
      <Form.Group  className="mb-3"controlId="formGridState">
          <Form.Label>cuisine Type</Form.Label>
          <Form.Select defaultValue="Choose..." onKeyUp={handlecuisine} required>
            <option>Indian</option>
            <option>Chinese</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Restaurent photo:</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
      <Button  className="mb-3 border-0" variant='success' type="submit">Add Restaurent</Button>
    </Form>
        </Col>
    </Row>
   </Container>
  )
}

export default Addrestaurent