import React,{useEffect, useState} from 'react'
import { Container,Row,Col,Card,Button,} from 'react-bootstrap'
import Restaurents from './Restaurants'
import { Link, } from 'react-router-dom'




function Home() {

  const [menu, setMenu] = useState( 5);
  const [restaurants, setRestaurants] = useState ([]);
  
 
  


  useEffect(()=>{
    fetch("./restaurants.json")
    .then((res)=> res.json())
    .then((data)=> setRestaurants (data.restaurants));

  }, []);  
    
    //const restaurent={
    //name:"japan sushai",
      //location:"banglore",
      //photograph:"https://nbcconferencecentre.com/content/uploads/sites/2/2018/02/2017121400120-RubenMay-_RU18490.jpg",
    //description:"this is the best restaurent in town"
 // }

  const handleMenuincrement = ()=>{
    setMenu (menu + 1)
  }
  const handleMenudecrement = ()=>{
    setMenu (menu - 1)
  }

  return (
    <Container>
      <Row>
      {restaurants &&(
          restaurants.map((restaurant, index)=>(
            <Col className='py-3' md={3} key={index}>
            <Restaurents detail = {restaurant} />
          </Col>
          ))
        )}
        
        
        <Col className='py-3' md={3}>
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://i0.wp.com/www.designlike.com/wp-content/uploads/2018/03/restaurant-1948732_1920.jpg" />
            <Card.Body>
        <Card.Title>Deligon</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button as={Link}to="/details/1" variant="dark">More Details</Button>
    </Card.Body>
    </Card>


        </Col>
        <Col className="py-3" md={3}>
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://www.yonder.fr/sites/default/files/destinations/Pavyllon-web%C2%A9VERONESE-012.jpg" />
            <Card.Body>
        <Card.Title>pams</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button as={Link}to="/details/2" variant="dark">More Details</Button>
    </Card.Body>
    </Card>


        </Col>
        <Col className="py-3" md={3}>
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://wallpapercave.com/wp/wp2038248.jpg" />
            <Card.Body>
        <Card.Title>PK Resto</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark">More Details</Button>
        <br />
        <Button variant="dark" className='ms-1 mt-2' onClick = {handleMenuincrement}>menu +</Button> : {menu}
        <Button variant="dark" className='ms-1 mt-2' onClick = {handleMenudecrement}>menu -</Button>  
        
    </Card.Body>
    </Card>


        </Col>
        <Col className="py-3" md={3}>
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://beige.secure-host.com/austinsrestaurant/media/Photo-Gallery-Restaurant/3.jpg" />
            <Card.Body>
        <Card.Title>Mims Bake</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark">More Details</Button>
    </Card.Body>
    </Card>


        </Col>
        <Col className="py-3" md={3}>
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="http://getwallpapers.com/wallpaper/full/f/f/8/942947-download-free-dinner-wallpapers-1920x1080.jpg" />
            <Card.Body>
        <Card.Title>MRA</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark">More Details</Button>
    </Card.Body>
    </Card>


        </Col>
        <Col className="py-3" md={3}> 
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://www.teahub.io/photos/full/171-1718121_high-resolution-restaurant-images-hd.jpg" />
            <Card.Body>
        <Card.Title>CoCo Cabana</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark">More Details</Button>
    </Card.Body>
    </Card>


        </Col>
        <Col className="py-3" md={3}>
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://beige.secure-host.com/austinsrestaurant/media/Photo-Gallery-Restaurant/1.jpg" />
            <Card.Body>
        <Card.Title>Maroosh</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark">More Details</Button>
    </Card.Body>
    </Card>


        </Col>
        <Col className="py-3" md={3}>
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://beige.secure-host.com/austinsrestaurant/media/Photo-Gallery-Restaurant/1.jpg" />
            <Card.Body>
        <Card.Title>Maroosh</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark">More Details</Button>
    </Card.Body>
    </Card>


        </Col>
        <Col className='py-3' md={3}>
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://i0.wp.com/www.designlike.com/wp-content/uploads/2018/03/restaurant-1948732_1920.jpg" />
            <Card.Body>
        <Card.Title>Deligon</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button as={Link}to="/details/1" variant="dark">More Details</Button>
    </Card.Body>
    </Card>


        </Col>  
    </Row>
    </Container>
  )
}

export default Home