//import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link,  } from 'react-router-dom'



function Restaurents({detail}) {

   return (
    <Card >
    <Card.Img variant="top" src={detail.photograph } />
    <Card.Body>
      <Card.Title>{detail.name}</Card.Title>
    <Card.Text>
         {detail.address}
        </Card.Text>
        <Button as={Link} to={`/details/$details.id}`} variant="dark">More Details</Button>
    </Card.Body>
    </Card>
  );
}

export default Restaurents;



