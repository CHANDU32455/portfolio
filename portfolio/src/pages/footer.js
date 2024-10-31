import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing Font Awesome icons

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#343a40', // Dark background
        color: '#ffffff', // White text
        padding: '40px 20px', // Padding
        textAlign: 'center' // Centered text
    };

    const iconStyle = {
        margin: '0 10px', // Margin around icons
        color: '#ffffff', // Icon color
        fontSize: '24px' // Icon size
    };

    const copyStyle = {
        marginTop: '20px', // Margin above copyright text
    };

    return (
        <footer style={footerStyle}>
            <h5 className="footer__title mb-3">Chandu Chitteti</h5>
            <div className="footer__social mb-3">
                <a
                    href="https://github.com/CHANDU32455"
                    style={iconStyle}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
                <a
                    href="#"
                    style={iconStyle}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://www.linkedin.com/in/chandu-chitteti-081116270/"
                    style={iconStyle}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
            </div>
            <p style={copyStyle} className="footer__copy mb-0">&copy; 2024. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
