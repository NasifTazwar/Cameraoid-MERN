import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="d-flex flex-column h-100 bg-dark">
                <footer className="w-100 py-4 flex-shrink-0">
                    <div className="container py-4">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <h5 className="h1 text-white">Paradise Tourism</h5>
                                <p className="small text-muted">Paradise Tourism L.L.C is a multinational company incorporated in winter 2009, under commercial registry No. 864372, in Dubai, UAE, by Mr. ARASH GHAHRAMANI.</p>
                                <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved.</p>
                            </div>
                            <div className="col-lg-4 col-md-3">
                                <h5 className="text-white mb-3">Quick links</h5>
                                <ul className="list-unstyled text-muted">
                                    <li>Home</li>
                                    <li>Services</li>
                                    <li>Get started</li>
                                    <li>FAQ</li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-3">
                                <h5 className="text-white mb-3">Search More</h5>
                                <ul className="list-unstyled text-muted">
                                    <li>Home</li>
                                    <li>Services</li>
                                    <li>Blogs</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;