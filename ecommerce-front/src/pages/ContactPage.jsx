import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Container className="py-5 my-4">
      <Row>
        <Col lg={8} className="mx-auto">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-3" style={{ color: 'var(--teal)', fontFamily: 'Playfair Display' }}>
              Contactez-nous
            </h1>
            <p className="lead" style={{ color: 'var(--sepia)' }}>
              Une question ? Une suggestion ? Notre équipe est à votre écoute.
            </p>
            <div className="mx-auto" style={{ width: '80px', height: '2px', backgroundColor: 'var(--sage)' }}></div>
          </div>
          
          {submitted && (
            <Alert variant="success" className="text-center" style={{ borderRadius: '40px', backgroundColor: 'var(--sage)', border: 'none', color: 'white' }}>
              Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
            </Alert>
          )}

          <div className="row g-4">
            <Col md={5}>
              <div className="p-4 rounded-4" style={{ backgroundColor: 'var(--beige)', height: '100%' }}>
                <h4 className="fw-bold mb-4" style={{ color: 'var(--teal)', fontFamily: 'Playfair Display' }}>
                  Nos coordonnées
                </h4>
                
                <div className="mb-4">
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--sage)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round"/>
                      <circle cx="12" cy="10" r="3" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="mb-0" style={{ color: 'var(--teal)' }}>Adresse</p>
                  <small style={{ color: 'var(--sepia)' }}>123 Rue du Commerce, 75001 Paris</small>
                </div>

                <div className="mb-4">
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--sage)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                      <rect x="2" y="2" width="20" height="20" rx="4" strokeLinecap="round"/>
                      <path d="M22 6L12 13 2 6" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="mb-0" style={{ color: 'var(--teal)' }}>Email</p>
                  <small style={{ color: 'var(--sepia)' }}>contact@shopease.com</small>
                </div>

                <div className="mb-4">
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--sage)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="mb-0" style={{ color: 'var(--teal)' }}>Téléphone</p>
                  <small style={{ color: 'var(--sepia)' }}>+33 1 23 45 67 89</small>
                </div>

                <hr className="my-4" style={{ borderColor: 'var(--sage)' }} />

                <div>
                  <p className="mb-2" style={{ color: 'var(--teal)', fontWeight: '500' }}>Horaires d'ouverture</p>
                  <small style={{ color: 'var(--sepia)' }}>Lundi - Vendredi: 9h - 18h</small><br />
                  <small style={{ color: 'var(--sepia)' }}>Samedi: 10h - 16h</small>
                </div>
              </div>
            </Col>

            <Col md={7}>
              <div className="p-4 rounded-4" style={{ backgroundColor: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid rgba(139, 115, 85, 0.1)' }}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ color: 'var(--teal)' }}>Nom complet</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom"
                      style={{ borderRadius: '40px', borderColor: 'var(--sage)', padding: '12px 20px' }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label style={{ color: 'var(--teal)' }}>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.com"
                      style={{ borderRadius: '40px', borderColor: 'var(--sage)', padding: '12px 20px' }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label style={{ color: 'var(--teal)' }}>Sujet</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Sujet de votre message"
                      style={{ borderRadius: '40px', borderColor: 'var(--sage)', padding: '12px 20px' }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label style={{ color: 'var(--teal)' }}>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Votre message..."
                      style={{ borderRadius: '20px', borderColor: 'var(--sage)', padding: '12px 20px' }}
                    />
                  </Form.Group>

                  <Button 
                    type="submit" 
                    className="btn-teal w-100 py-3"
                    style={{ fontSize: '1rem' }}
                  >
                    Envoyer le message
                  </Button>
                </Form>
              </div>
            </Col>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;