import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import profile from '../../images/profile/profile.jpg';
const About = () => {
    return (
        <div className='p-5'>
            <div className="card">
            <div className='d-flex justify-content-center'>
                    <img src={profile} className=" w-25 rounded-circle" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center fs-2 fw-bold">Emrul Hasan Emon</h5>
                    <p className="card-text">A student of American Internation University. Currently studying BSc. in Computer Science and Engineering.I am extremely motivated, goal-oriented, self-driven, hardworking, and a quick learner who is always looking to enhance my abilities and is well-versed in the most recent Front-end Development Tools.</p>
                </div>
                
            </div>
            <CardGroup className='mt-5'>
                <Card className=''>
                    <Card.Body>
                        
                        <Card.Text>
                        I am the master of HTML, CSS,Javascript,Raect. I know everything needed to make a website function, efficient. I didn't stop with the web. I went beyond with most popular Javascript framework called Vue JS. I even know the deployment, server and security. I will give you 100% web solution.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className=''>
                    <Card.Body>
                       
                        <Card.Text>They didn't offer me a job. But I made myself as a remove web developer. I made their website and showed it to them. They liked it. And uploaded the content. It was fun working at Programming Hero.My mission is to complete this course with good grades.
                        </Card.Text>
                    </Card.Body>
                </Card>
               
            </CardGroup>
        </div>
    );
};

export default About;