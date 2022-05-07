import React from 'react';
import './ContactSection.css'
import man from '../../../images/services/man.jpg'

const ContactSection = () => {
    const handleSubmit = event => {
        event.preventDefault();
    }
    return (

        <div className='container'>
            <div className="card my-3 py-3  " style={{ border: 'none' }} >
                <h2 className='text-center pb-3'>Who am I?</h2>
                <div className="row g-0">
                    <div className="col-md-6  d-flex justify-content-center align-items-center">
                        <img src={man} className="img-fluid " alt="..." />
                    </div>

                    <div className="col-md-6 d-flex align-items-center" >

                        <div className="card-body  mx-2">
                            <h2>Hi, I’m <strong>Emrul Hasan</strong></h2>

                            <h3> Let Me Fight
                                For Your Right</h3>
                            <p style={{textAlign:'justify'}}>I am Advocate Emrul Hasan LLB (Hons), LLM (EU) I have been in the legal profession for the last 10 years. I have worked on more than 400 cases where the success rate was more than 80 percent. Later I started my journey as the head of law firm SNS Associates</p>

                        </div>

                    </div>

                </div>
            </div>
        </div>

    
    );
};

export default ContactSection;