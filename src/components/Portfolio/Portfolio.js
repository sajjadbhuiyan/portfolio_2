import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import portfolio1 from '../../images/portfolio1.svg';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className='colorbox'>
            <Container>
            <div className="portfolio-heading">
            <h1>My Best Selected Portfolio</h1>
            <p>The following are the best portfolios during <br/> the career path as a freelancer</p>
            </div>

            <div className="showupPortfolio">
                <Row>
                    <Col md={6}>
                        <div className=' portfolio-card'>
                            <div className="text-area-box d-flex justify-content-between">
                            <div className="portfolio-text">
                            <p>Mobile App Design</p>
                            <strong>Travel Mobile App</strong>
                            </div>
                            <a className='mt-3' href=""><i class="fas fa-book"> &nbsp;</i>Case Study</a>
                            </div>
                            <Image className='portfloio-img' fluid src={portfolio1}></Image>
                        </div>
                        
                    </Col>
                    <Col md={6}>
                        <div className=' portfolio-card'>
                            <div className="text-area-box d-flex justify-content-between">
                            <div className="portfolio-text">
                            <p>Mobile App Design</p>
                            <strong>Travel Mobile App</strong>
                            </div>
                            <a className='mt-3' href=""><i class="fas fa-book"> &nbsp;</i>Case Study</a>
                            </div>
                            <Image className='portfloio-img' fluid src={portfolio1}></Image>
                        </div>
                        
                    </Col>
                    <Col md={6}>
                        <div className=' portfolio-card'>
                            <div className="text-area-box d-flex justify-content-between">
                            <div className="portfolio-text">
                            <p>Mobile App Design</p>
                            <strong>Travel Mobile App</strong>
                            </div>
                            <a className='mt-3' href=""><i class="fas fa-book"> &nbsp;</i>Case Study</a>
                            </div>
                            <Image className='portfloio-img' fluid src={portfolio1}></Image>
                        </div>
                        
                    </Col>
                    <Col md={6}>
                        <div className=' portfolio-card'>
                            <div className="text-area-box d-flex justify-content-between">
                            <div className="portfolio-text">
                            <p>Mobile App Design</p>
                            <strong>Travel Mobile App</strong>
                            </div>
                            <a className='mt-3' href=""><i class="fas fa-book"> &nbsp;</i>Case Study</a>
                            </div>
                            <Image className='portfloio-img' fluid src={portfolio1}></Image>
                        </div>
                        
                    </Col>
                    <Col md={6}>
                        <div className=' portfolio-card mb-5'>
                            <div className="text-area-box d-flex justify-content-between">
                            <div className="portfolio-text">
                            <p>Mobile App Design</p>
                            <strong>Travel Mobile App</strong>
                            </div>
                            <a className='mt-3' href=""><i class="fas fa-book"> &nbsp;</i>Case Study</a>
                            </div>
                            <Image className='portfloio-img' fluid src={portfolio1}></Image>
                        </div>
                        
                    </Col>
                    <Col md={6}>
                        <div className=' portfolio-card mb-5'>
                            <div className="text-area-box d-flex justify-content-between">
                            <div className="portfolio-text">
                            <p>Mobile App Design</p>
                            <strong>Travel Mobile App</strong>
                            </div>
                            <a className='mt-3' href=""><i class="fas fa-book"> &nbsp;</i>Case Study</a>
                            </div>
                            <Image className='portfloio-img' fluid src={portfolio1}></Image>
                        </div>
                        
                    </Col>
                </Row>
            </div>
            <center><a className='button mt-5' href="">More Portfolio</a></center>
            </Container>
        </div>
    );
};

export default Portfolio;