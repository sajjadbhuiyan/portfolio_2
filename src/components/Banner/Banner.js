import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import sajjad from '../../images/Md Sajjad Bhuiyan Taki.svg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='overlay'>
            <Container>
            <div className='banner'>
            <div className="roundshape">

            </div>
            <div className="textContent">
                <Row>
                    <Col className='text' md={6}>
                        <h1>
                        I’m 
                        </h1>
                        <strong className='name'>
                            Sajjad Bhuiyan
                        </strong>
                        <p className='mt-5'>A freelancer who provides <br/> services for digital programming <br/> and design content needs,for <br/>  all businesses with more than <br/> 10 years of experience</p>
                    </Col>
                    <Col  md={2}></Col>
                    <Col className='text-right' md={4}>
                        <span>Services</span>
                        <p>Let's build quality products in <br/> programming and design <br/>
                            with my services</p>
                        <span className='ban-more'>Show More <span>&#8594;</span> </span>
                        <br/>
                        <div className='socilaUl'>
                            <ul>
                                <li><a href=""><i class="fab fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href=""><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href=""><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href=""><i class="fab fa-pinterest-p"></i></a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="image">
                <Image fluid src={sajjad}></Image>
            </div>
        </div>
        </Container>
        </div>
    );
};

export default Banner;