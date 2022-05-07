import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table'

const Blogs = () => {
    return (
        <div className='px-5 mt-5 fw-bold'>


            <h1 className='p-5 justify-content-center text-center'> Question Part</h1>

            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between authorization and authentication.</Accordion.Header>
                    <Accordion.Body className='mt-3'>
                        <Table striped bordered hover>
                            <thead>
                                <tr>

                                    <th> Authorization</th>
                                    <th>Authentication</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>What resource a user has access to is decided by authorization.</td>
                                    <td>Authentication verifies who the user is.</td>

                                </tr>
                                <tr>

                                    <td>The organization implements and maintains the parameters that govern authorization.</td>
                                    <td>Passwords, one-time pins, biometric information, and other information given or entered by the user are used for authentication.</td>

                                </tr>
                                <tr>

                                    <td>Authorization always takes place after authentication.</td>
                                    <td>Authentication is the first step of a good identity and access management process.</td>

                                </tr>
                                <tr>

                                    <td>The user has no visibility into or control over authorization.</td>
                                    <td>Authentication is visible to and partially changeable by the user.</td>

                                </tr>
                                <tr>

                                    <td></td>
                                    <td></td>

                                </tr>

                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>  What other services does firebase provide other than authentication ?</Accordion.Header>
                    <Accordion.Body>
                        <p>There are many services which Firebase provides, Most useful of them are:</p>
                        <ul>
                            <li> Firebase Realtime Database</li>
                            <li>Cloud Storage</li>
                            <li>Hosting service</li>
                            <li>Dynamic Links</li>
                            <li>Remote Config</li>
                            <li>Cloud Functions</li>
                            <li>Google Analytics</li>
                            <li>Cloud Messaging</li>
                        </ul>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        <p> Google's Firebase may be used for the following:</p>
                        <ul>
                            <li>In the database, Firebase maintains all data in real time. As a result, data transfer to and from the database is simple and speedy. Firebase may therefore be used to construct mobile apps such as live streaming, chat messaging, and so forth.</li>
                            <li> Firebase allows you to sync real-time data across all of your devices, including Android, iOS, and the web, without having to refresh the page.</li>
                            <li>Firebase includes everything from databases to analytics to crashing reports. As a result, app development teams may concentrate on improving user experience.</li>
                        </ul>
                        <p>The other options do you have to implement authentication</p>
                        <ul>
                            <li>Auth0</li>
                            <li> MongoDB</li>
                            <li> Okta</li>


                        </ul>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;