import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer-custom mt-auto">
      <Container>
        <Row className="g-4">
          <Col md={4}>
            <h5 className="fw-bold mb-3" style={{ fontFamily: 'Playfair Display', letterSpacing: '1px' }}>ShopEase</h5>
            <p style={{ opacity: '0.8', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Votre destination pour des créations authentiques et durables, 
              alliant tradition et modernité.
            </p>
          </Col>
          <Col md={4}>
            <h6 className="fw-bold mb-3" style={{ letterSpacing: '1px' }}>Liens utiles</h6>
            <ul className="list-unstyled" style={{ fontSize: '0.9rem' }}>
              <li className="mb-2"><a href="/about" className="text-decoration-none" style={{ color: 'inherit', opacity: '0.8' }}>Notre histoire</a></li>
              <li className="mb-2"><a href="/products" className="text-decoration-none" style={{ color: 'inherit', opacity: '0.8' }}>La boutique</a></li>
              <li className="mb-2"><a href="/contact" className="text-decoration-none" style={{ color: 'inherit', opacity: '0.8' }}>Contact</a></li>
              <li className="mb-2"><a href="/faq" className="text-decoration-none" style={{ color: 'inherit', opacity: '0.8' }}>FAQ</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h6 className="fw-bold mb-3" style={{ letterSpacing: '1px' }}>Contact</h6>
            <ul className="list-unstyled" style={{ fontSize: '0.9rem' }}>
              <li className="mb-2" style={{ opacity: '0.8' }}>contact@shopease.com</li>
              <li className="mb-2" style={{ opacity: '0.8' }}>+33 1 23 45 67 89</li>
              <li className="mb-2" style={{ opacity: '0.8' }}>123 Rue du Commerce, 75001 Paris</li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4" style={{ opacity: '0.2' }} />
        <div className="text-center" style={{ fontSize: '0.8rem', opacity: '0.7' }}>
          <p className="mb-0">&copy; 2026 ShopEase. Tous droits réservés.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;