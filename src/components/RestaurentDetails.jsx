import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row,Button,ListGroup  } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

function RestaurentDetails() {
  const [restaurants, setRestaurants] = useState([]);
  const {id}= useParams();

  useEffect(()=>{
    fetch("/restaurants.json")
    .then((res)=> res.json())
    .then((data)=> setRestaurants (data.restaurants));
  },[])

  const restaurant= restaurants.find((rest)=> rest.id == id);
  console.log(restaurant);
  
   return (
    <Container>
      {restaurant && (
         <Row>
         <Col >
         <Card md={8}>
         <Card.Img variant="top" style={{height:"30rem"}} src={restaurant.photograph} />
         <Card.Body>
           <Card.Title>{restaurant.name}</Card.Title>
           <Card.Text>
             {restaurant.address}
           </Card.Text>
           <Button variant="primary">Go somewhere</Button>
         </Card.Body>
       </Card>
         </Col>
         <Col md={4}>
           
           <h4>cuisine type:{restaurant.cuisine_type}</h4>
           <h5>operating Hours:</h5>
           <ListGroup variant="flush">
        <ListGroup.Item>Monday : {restaurant.operating_hours.Monday}</ListGroup.Item>
        <ListGroup.Item>Tuesday : {restaurant.operating_hours.Tuesday}</ListGroup.Item>
        <ListGroup.Item>Wednesday : {restaurant.operating_hours.Wednesday}</ListGroup.Item>
        <ListGroup.Item>Thursday : {restaurant.operating_hours.Thursday}</ListGroup.Item>
        <ListGroup.Item>Friday : {restaurant.operating_hours.Friday}</ListGroup.Item>
        <ListGroup.Item>Saturday : {restaurant.operating_hours.Saturday}</ListGroup.Item>
        <ListGroup.Item>Sunday : {restaurant.operating_hours.Sunday}</ListGroup.Item>
        
      </ListGroup>
         </Col>
       </Row>
      )}
  </Container>
  
  )
}

export default RestaurentDetails