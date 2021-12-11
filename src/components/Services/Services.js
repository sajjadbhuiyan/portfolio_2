import React from 'react';
import { Col, Container, Image, ListGroup, Row } from 'react-bootstrap';
import bottomGithub from '../../images/bottomgithub.svg';
import bottomGmail from '../../images/bottomGmail.svg';
import bottomLinkedin from '../../images/bottomlinkdin.svg';
import bottomSlack from '../../images/bottomSkack.svg';
import square from '../../images/Mask Group.svg';
import serviceicon1 from '../../images/serviceicon1.svg';
import serviceicon2 from '../../images/serviceicon2.svg';
import serviceicon3 from '../../images/serviceicon3.svg';
import './Services.css';

const Services = () => {
    return (
        <div className='service'>
            <Container>
                <div className='social-box'>
                <Row xs="auto">
                    <Col className='social-statas' md={3}>
                        <span><Image src={bottomLinkedin}></Image></span>
                    </Col>
                    <Col className='social-statas' md={3}>
                        <span><Image src={bottomGithub}></Image></span>
                    </Col>
                    <Col className='social-statas' md={3}>
                        <span><Image src={bottomGmail}></Image></span>
                    </Col>
                    <Col className='social-statas' md={3}>
                        <span><Image src={bottomSlack}></Image></span>
                    </Col>
                </Row>
                </div> 
                <Row>
                    <Col className='rightTopText' md={6}>
                        <h1>What Can I Do For <br/> Your Needs</h1>
                        <p>It is easier to entrust the work to the <br/> experts because they are able to provide <br/>
                         the best results with reliable quality</p>
                         <Row>
                             <Col md={6}>
                                 <h3>45+</h3>
                                 <span>Project Completed</span>
                             </Col>
                             <Col md={6}>
                                <h3>100+</h3>
                                <span>Community Network </span>
                             </Col>
                             <Col md={6}>
                                <h3>05+</h3>
                                <span>Contract Remote</span>
                             </Col>
                             <Col md={6}>
                                <h3>02+</h3>
                                <span>Years Experience</span>
                             </Col>
                         </Row>
                    </Col>
                    <Col md={6}>
                    <ListGroup className='list-group' variant="flush">
                    <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                    >
                        <Image src={square}></Image>
                            <div className="ms-4 pt-3 me-auto">
                            <h4>UI/UX Design</h4>
                            <p>117 Project</p>
                            </div>
                            <span className='pt-4 rignt-arrow'><i class="fas fa-arrow-right"></i></span>
                    </ListGroup.Item>
                    <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                    >
                        <Image src={square}></Image>
                            <div className="ms-4 pt-3 me-auto">
                            <h4>Front End Develop</h4>
                            <p>84 Project</p>
                            </div>
                            <span className='pt-4 rignt-arrow'><i class="fas fa-arrow-right"></i></span>
                    </ListGroup.Item>
                    <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                    >
                        <Image src={square}></Image>
                            <div className="ms-4 pt-3 me-auto">
                            <h4>Mobile App Develop</h4>
                            <p>32 Project</p>
                            </div>
                            <span className='pt-4 rignt-arrow'><i class="fas fa-arrow-right"></i></span>
                    </ListGroup.Item>
                    </ListGroup>
                    </Col>
                </Row>
                <div className="bottom-service">
                <Row>
                    <Col className='service-card' md={4}>
                        <Image className='p-3' fluid src={serviceicon1}></Image>
                        <h3>UI/UX Design</h3>
                        <p>Create a beautiful and usefull <br/> ui display for ease of use of <br/> the application for users</p>
                        <span>Show more <i class="fas fa-arrow-right"></i> </span>
                    </Col>
                    <Col className='service-card' md={4}>
                        <Image className='p-3' fluid src={serviceicon2}></Image>
                        <h3>Web Programming</h3>
                        <p>Build a quality website with the <br/>
                            best technology and optimization <br/>
                            on search engines</p>
                        <span>Show more <i class="fas fa-arrow-right"></i> </span>
                    </Col>
                    <Col className='service-card' md={4}>
                        <Image className='p-3' fluid src={serviceicon3}></Image>
                        <h3>Mobile Development</h3>
                        <p>Create an app from your own <br/>
                            business for a more professional <br/>
                            business performance</p>
                        <span>Show more <i class="fas fa-arrow-right"></i> </span>
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    );
};

export default Services;