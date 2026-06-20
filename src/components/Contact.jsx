import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [validated, setValidated] = useState(false);
  const [sending, setSending] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setSending(true);
    setValidated(false);

    // Simulate Server Request Timeout
    setTimeout(() => {
      setSending(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setShowToast(true);
      
      // Auto hide after 4 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    }, 1800);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const fieldMap = {
      contactName: 'name',
      contactEmail: 'email',
      contactSubject: 'subject',
      contactMessage: 'message'
    };
    setFormData(prev => ({ ...prev, [fieldMap[id]]: value }));
  };

  return (
    <section id="contact" className="reveal">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <div className="title-line"></div>
        </div>
        
        <div className="row g-4">
          {/* Contact Cards */}
          <div className="col-lg-5 reveal-left">
            {/* Email Card */}
            <div className="contact-info-card">
              <div className="contact-info-icon-wrap">
                <i className="bi bi-envelope-at"></i>
              </div>
              <div>
                <span className="contact-info-label">Email Me</span>
                <a href="mailto:dheerajjkumawat@gmail.com" className="contact-info-val">dheerajjkumawat@gmail.com</a>
              </div>
            </div>
            
            {/* Phone Card */}
            <div className="contact-info-card">
              <div className="contact-info-icon-wrap">
                <i className="bi bi-telephone-outbound"></i>
              </div>
              <div>
                <span className="contact-info-label">Call Me</span>
                <a href="tel:+917850915862" className="contact-info-val">+91 7850915862</a>
              </div>
            </div>

            {/* Location Card */}
            <div className="contact-info-card">
              <div className="contact-info-icon-wrap">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <span className="contact-info-label">My Location</span>
                <span className="contact-info-val">Gokulpura, Kalwar Road, Jaipur, Rajasthan, India</span>
              </div>
            </div>
          </div>
          
          {/* Contact Form Card */}
          <div className="col-lg-7 reveal-right">
            <div className="glass-card contact-form-card">
              <h3 className="h4 mb-4 text-gradient">Send Me a Message</h3>
              
              <form 
                id="contactForm" 
                className={`contact-form ${validated ? 'was-validated' : ''}`} 
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input 
                        type="text" 
                        className="form-control" 
                        id="contactName" 
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required 
                      />
                      <label htmlFor="contactName">Your Name</label>
                      <div className="invalid-feedback">Please enter your name.</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input 
                        type="email" 
                        className="form-control" 
                        id="contactEmail" 
                        placeholder="Your Email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                      />
                      <label htmlFor="contactEmail">Your Email Address</label>
                      <div className="invalid-feedback">Please enter a valid email address.</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <input 
                        type="text" 
                        className="form-control" 
                        id="contactSubject" 
                        placeholder="Subject" 
                        value={formData.subject}
                        onChange={handleInputChange}
                        required 
                      />
                      <label htmlFor="contactSubject">Subject</label>
                      <div className="invalid-feedback">Please specify a subject.</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating mb-4">
                      <textarea 
                        className="form-control" 
                        id="contactMessage" 
                        placeholder="Leave a message here" 
                        style={{ height: '150px' }} 
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                      <label htmlFor="contactMessage">Your Message</label>
                      <div className="invalid-feedback">Please write your message.</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-grad w-100 py-3" id="submitBtn" disabled={sending}>
                      {sending ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Sending...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-send-fill me-2"></i> Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Custom Success Alert Toast */}
        <div className="toast-container-custom">
          <div id="successToast" className={`toast-custom ${showToast ? 'show' : ''}`} role="alert">
            <i className="bi bi-check-circle-fill toast-custom-icon"></i>
            <div>
              <h4 className="h6 mb-1 fw-bold">Message Sent!</h4>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Thank you, I'll get back to you shortly.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
