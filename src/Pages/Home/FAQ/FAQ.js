import React from 'react';
import { Accordion } from 'react-bootstrap';
const FAQ = () => {
    return (
        <div className="container-fluid p-0 border-top">
            <div className="row container-fluid">
                <div className="col-lg-6 col-md-12 m-0">
                    <div className="faq-image">
                        <img className="w-100" src="https://image.freepik.com/free-vector/online-app-tourism-traveler-with-mobile-phone-passport-booking-buying-plane-ticket_74855-10966.jpg" alt="" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-5 ps-0">
                    <p>Frequently Asked Question</p>
                    <h2 className="ps-2">Get Every Single Answers Here That You Want</h2>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><strong>I have never stayed at a campsite before - how does it work?</strong></Accordion.Header>
                        <Accordion.Body>
                        All adults should have a primary care doctor. These are usually internal medicine (internists) or family medicine doctors. Getting an annual checkup can help your doctor spot health issues early on. Untreated conditions, such as high blood pressure, can lead to serious problems that are harder to treat.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><strong>Which season is best for camping?</strong></Accordion.Header>
                        <Accordion.Body>
                        A faculty position is one in which an individual is hired by a school to help educate students. At the university or college level, you may be brought on to conduct research as well. ... Faculty members also include other education professionals like guidance counselors and librarians.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><strong>Can I get a little extra help with parking if necessary? </strong></Accordion.Header>
                        <Accordion.Body>
                        An academic medical center is a hospital that partners with teaching institutions to provide clinical care, education, and research. AMCs also: Are medical facilities with Joint Commission accreditation and a commitment to training future health care providers.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><strong>Do you offer discount ? </strong></Accordion.Header>
                        <Accordion.Body>
                        Medical Students are students training to become physicians. In the United States, undergraduate medical education consists of four years of study in an allopathic (MD degree) or osteopathic (DO degree) school of medicine.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
            </div>
        </div>
    );
};

export default FAQ;