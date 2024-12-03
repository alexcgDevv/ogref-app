import React from 'react';

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-item">
                <div className="icon-container email-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" fill="currentColor"/>
                    </svg>
                </div>
                <h3>Email:</h3>
                <p>hello@company.com</p>
                <p>support@company.com</p>
            </div>
            <div className="contact-item">
                <div className="icon-container phone-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.39 2.33.6 3.57.6.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C9.37 21 2 13.63 2 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.21 2.45.6 3.57.12.35.03.75-.24 1.02l-2.24 2.2z" fill="currentColor"/>
                    </svg>
                </div>
                <h3>Call Us:</h3>
                <p>1 (234) 567-891</p>
                <p>1 (234) 987-654</p>
            </div>
        </div>
    );
}

export default Contact;
