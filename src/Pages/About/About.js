import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import profile from '../../images/profile/profile.jpg';
const About = () => {
    return (
        <div className='p-5'>
            <div className="card">
            <img src={profile} className=" w-25 d-flex justify-content-center align-Item-center" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center fs-2 fw-bold">Emrul Hasan Emon</h5>
                    <p className="card-text">A student of American Internation University. Currently studying BSc. in Computer Science and Engineering. With only one semester remaining I want to finish my Bachelors with my heads high. I have enrolled in Programming Hero's Web Development Course to learn web Development and feed my eager for knowledge. I want learn everything about web development and for that I am willing to give as much as needed. I believe I am a very hardworking and passionate person and I think if I put my mind and soul into this I will be able achieve what I dream of.</p>
                </div>
                
            </div>
            <CardGroup className='m-5'>
                <Card className=''>
                    <Card.Body>
                        <Card.Title>Aims</Card.Title>
                        <Card.Text>
                            I aim to be a better muslim, better person, better citizen, better child, better student. I want to make my parents proud.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className=''>
                    <Card.Body>
                        <Card.Title>Mission</Card.Title>
                        <Card.Text>My mission is to complete this course with good grades. Achieve my goals to the fullest.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className=''>
                    <Card.Body>
                        <Card.Title>Goals</Card.Title>
                        <Card.Text>My goals are simple, I want to earn enough to lead a happy life with my loved ones in the Halal way.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default About;