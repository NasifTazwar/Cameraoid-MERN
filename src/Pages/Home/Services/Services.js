import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://nameless-cliffs-17759.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="services-container py-5">
            <div id="services">
            <h2 className="py-5">Most Popular Adventures We Have To Offer</h2>
            <Container>
                <Row className="row-cols-lg-4 row-cols-md-3 row-cols-sm-1 row-cols-1 row-services justify-content-center">
                        {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                        }
                </Row>
            </Container>
        </div>
        </div>
    );
};

export default Services;