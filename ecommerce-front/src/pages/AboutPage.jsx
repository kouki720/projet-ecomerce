import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container className="py-5 my-4">
      <Row>
        <Col lg={8} className="mx-auto">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-3" style={{ color: 'var(--teal)', fontFamily: 'Playfair Display' }}>
              Notre histoire
            </h1>
            <p className="lead" style={{ color: 'var(--sepia)' }}>
              L'art de créer depuis 2024
            </p>
            <div className="mx-auto" style={{ width: '80px', height: '2px', backgroundColor: 'var(--sage)' }}></div>
          </div>
          
          <div className="mb-5 p-4 rounded-4" style={{ backgroundColor: 'var(--beige)' }}>
            <h3 className="fw-bold mb-3" style={{ color: 'var(--teal)', fontFamily: 'Playfair Display' }}>
              L'histoire de ShopEase
            </h3>
            <p style={{ color: 'var(--sepia)', lineHeight: '1.8' }}>
              Fondée en 2024, ShopEase est née d'une passion commune pour l'artisanat 
              et le commerce équitable. Notre aventure a commencé dans un petit atelier, 
              avec la volonté de proposer des produits uniques, fabriqués avec soin et respect.
            </p>
            <p style={{ color: 'var(--sepia)', lineHeight: '1.8' }}>
              Aujourd'hui, ShopEase est devenue une référence pour ceux qui recherchent 
              l'authenticité et la qualité. Chaque pièce de notre collection est sélectionnée 
              avec rigueur auprès d'artisans passionnés qui perpétuent un savoir-faire d'exception.
            </p>
          </div>

          <div className="row g-4 mb-5">
            <Col md={6}>
              <div className="p-4 rounded-4 text-center" style={{ backgroundColor: 'white', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', height: '100%' }}>
                <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--sage)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round"/>
                    <circle cx="12" cy="7" r="4" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4 className="fw-bold mb-2" style={{ color: 'var(--teal)' }}>Notre mission</h4>
                <p style={{ color: 'var(--sepia)', fontSize: '0.95rem' }}>
                  Proposer une expérience d'achat unique avec des produits d'exception, 
                  tout en soutenant les artisans locaux.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="p-4 rounded-4 text-center" style={{ backgroundColor: 'white', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', height: '100%' }}>
                <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--sage)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M12 2L15 9H22L16 14L19 21L12 16.5L5 21L8 14L2 9H9L12 2Z" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4 className="fw-bold mb-2" style={{ color: 'var(--teal)' }}>Nos valeurs</h4>
                <p style={{ color: 'var(--sepia)', fontSize: '0.95rem' }}>
              Qualité irréprochable, service réactif, livraison fiable, 
                  paiement sécurisé et satisfaction garantie.
                </p>
              </div>
            </Col>
          </div>

          <div className="mb-5 p-4 rounded-4" style={{ backgroundColor: 'var(--beige)' }}>
            <h3 className="fw-bold mb-3" style={{ color: 'var(--teal)', fontFamily: 'Playfair Display' }}>
              Notre engagement
            </h3>
            <Row>
              <Col md={6}>
                <div className="d-flex gap-3 mb-3">
                  <div style={{ width: '24px', height: '24px', backgroundColor: 'var(--sage)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span style={{ color: 'var(--sepia)' }}>Qualité irréprochable</span>
                </div>
              </Col>
              <Col md={6}>
                <div className="d-flex gap-3 mb-3">
                  <div style={{ width: '24px', height: '24px', backgroundColor: 'var(--sage)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span style={{ color: 'var(--sepia)' }}>Service client réactif</span>
                </div>
              </Col>
              <Col md={6}>
                <div className="d-flex gap-3 mb-3">
                  <div style={{ width: '24px', height: '24px', backgroundColor: 'var(--sage)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span style={{ color: 'var(--sepia)' }}>Livraison fiable et rapide</span>
                </div>
              </Col>
              <Col md={6}>
                <div className="d-flex gap-3 mb-3">
                  <div style={{ width: '24px', height: '24px', backgroundColor: 'var(--sage)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span style={{ color: 'var(--sepia)' }}>Paiement sécurisé</span>
                </div>
              </Col>
            </Row>
          </div>

          <div className="text-center p-5 rounded-4" style={{ backgroundColor: 'var(--sage)' }}>
            <h4 className="fw-bold mb-3" style={{ color: 'white', fontFamily: 'Playfair Display' }}>
              Pour toute question
            </h4>
            <p className="mb-0" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Notre équipe est disponible 7j/7 pour vous assister
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;