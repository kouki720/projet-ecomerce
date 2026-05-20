import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-75 py-5">
            <Col lg={7} className="animate-fadeInUp">
              <div className="mb-4">
                <span className="badge" style={{ backgroundColor: 'var(--sage)', color: 'white', padding: '8px 16px', borderRadius: '40px' }}>
                  Nouvelle collection
                </span>
              </div>
              <h1 className="display-2 fw-bold mb-4" style={{ color: 'var(--teal)', fontFamily: 'Playfair Display' }}>
                L'élégance à portée de main
              </h1>
              <p className="lead mb-4" style={{ color: 'var(--sepia)', fontSize: '1.2rem' }}>
                Découvrez une sélection unique de produits artisanaux, alliant qualité et authenticité. 
                Chaque pièce raconte une histoire.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Button 
                  className="btn-teal px-5 py-3"
                  onClick={() => navigate('/products')}
                >
                  Explorer la collection
                </Button>
                <Button 
                  className="btn-outline-teal px-5 py-3"
                  onClick={() => navigate('/about')}
                >
                  Notre histoire
                </Button>
              </div>
            </Col>
            <Col lg={5} className="text-center mt-5 mt-lg-0 animate-fadeInUp">
              <div 
                className="rounded-4 p-4"
                style={{ 
                  background: 'linear-gradient(135deg, var(--beige) 0%, #e8e0d0 100%)',
                  borderRadius: '60px'
                }}
              >
                <div 
                  className="rounded-4"
                  style={{
                    background: 'url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=500&fit=crop") center/cover',
                    height: '400px',
                    borderRadius: '40px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Values Section */}
      <Container className="py-5 my-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ color: 'var(--teal)', fontFamily: 'Playfair Display' }}>
            Notre philosophie
          </h2>
          <p className="lead" style={{ color: 'var(--sepia)' }}>
            Des valeurs qui guident chacune de nos créations
          </p>
          <div className="mx-auto" style={{ width: '80px', height: '2px', backgroundColor: 'var(--sage)' }}></div>
        </div>
        
        <Row className="g-4">
          <Col md={4}>
            <div className="feature-card animate-fadeInUp">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 12V8H4V12M20 12L12 18L4 12M20 12H4M12 18V9" stroke="white" strokeLinecap="round"/>
                </svg>
              </div>
              <h4 className="fw-bold mb-3" style={{ color: 'var(--teal)' }}>Savoir-faire artisanal</h4>
              <p style={{ color: 'var(--sepia)' }}>
                Chaque pièce est confectionnée avec soin par des artisans passionnés, 
                perpétuant des traditions séculaires.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="feature-card animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" stroke="white"/>
                  <path d="M12 6v6l4 2" stroke="white" strokeLinecap="round"/>
                </svg>
              </div>
              <h4 className="fw-bold mb-3" style={{ color: 'var(--teal)' }}>Durabilité</h4>
              <p style={{ color: 'var(--sepia)' }}>
                Nous privilégions les matériaux nobles et durables pour des créations 
                qui traversent le temps.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="feature-card animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 9V7a5 5 0 0 0-10 0v2" stroke="white" strokeLinecap="round"/>
                  <rect x="4" y="9" width="16" height="12" rx="2" stroke="white"/>
                  <path d="M8 13h8" stroke="white" strokeLinecap="round"/>
                </svg>
              </div>
              <h4 className="fw-bold mb-3" style={{ color: 'var(--teal)' }}>Engagement éthique</h4>
              <p style={{ color: 'var(--sepia)' }}>
                Une production responsable et transparente, respectueuse des hommes 
                et de l'environnement.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Call to Action */}
      <div className="py-5 my-5" style={{ backgroundColor: 'var(--sage)' }}>
        <Container className="text-center py-5">
          <h2 className="display-4 fw-bold mb-4" style={{ color: 'white', fontFamily: 'Playfair Display' }}>
            Une création qui vous ressemble
          </h2>
          <p className="lead mb-4" style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto' }}>
            Parcourez notre collection et laissez-vous séduire par des pièces d'exception
          </p>
          <Button 
            className="px-5 py-3 mt-3"
            style={{ backgroundColor: 'white', color: 'var(--sage)', borderRadius: '40px', fontWeight: '600', border: 'none' }}
            onClick={() => navigate('/products')}
          >
            Découvrir la collection
          </Button>
        </Container>
      </div>
    </>
  );
};

export default HomePage;