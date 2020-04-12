import React,{useState} from 'react'
import PropTypes from 'prop-types'
import './start.css'
import { Container, Row, Col, ListGroup, ListGroupItem, Card, CardBody, CardImg, CardTitle, CardSubtitle, ButtonGroup, Button ,Navbar,
    NavbarBrand,
    
    NavbarText} from 'reactstrap';
function Starting(props) {
    const [AorU, setAorU] = useState()


     const clickHandler = () =>{
         if(AorU === 'Admin'){
             window.location = '/loginAdmin'
         }
         else if(AorU === 'User'){
             window.location = '/loginUser'
         }
     }
  return (
    <div className ={'start-Page start-Page-BG'}>
        <Container>        <Row>
            <Col md='3' lg='3'>

            </Col>

            <Col md='7' lg='7'>
            <Container>
            <Card > 
                <Row className={'cd-content'}>
                    <Col md='4'>
                        <p>Please select</p>
                        <p className={'login-Type'}>login Type</p>
                    </Col>
                    <Col md='8'>
                        <Row>
                            <Col md='3'>
                            <Button outline onClick={()=> setAorU('Admin')}>
                                Admin
                            </Button>
                          
                            </Col>
                            <Col md='3'>
                            <Button  outline onClick={()=> setAorU('User')}>
                                User
                            </Button>
                                </Col>
                        </Row>
                        <Row className={'confirm-Btn-cont'}>
                            
                            <Col md='3'></Col>
                            <Col md='3'></Col><Col md='3'>
                            <Button className='confirmBtn' onClick={clickHandler}>confirm</Button>
                            </Col>
                            <Col md='3'>
                              
                            </Col>
                            
                        </Row>
                    </Col>
                </Row>
            </Card>
</Container>
            </Col>
        </Row>
        </Container>

    </div>
  )
}


export default Starting

