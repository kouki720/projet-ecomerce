import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8080/api/auth/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify({
          id: data.id,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          role: data.role
        }));
        navigate('/dashboard');
      } else {
        setError(data.error || 'Identifiants administrateur incorrects');
      }
    } catch (err) {
      setError('Erreur de connexion au serveur');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #2c4a5e 0%, #1a6b6b 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Container>
        <Row>
          <Col md={6} lg={5} className="mx-auto">
            <div className="text-center mb-4">
              <div className="mx-auto mb-3" style={{ 
                width: '70px', 
                height: '70px', 
                background: 'linear-gradient(135deg, #2d8c8c, #7d9d8c)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round"/>
                  <circle cx="12" cy="7" r="4" strokeLinecap="round"/>
                </svg>
              </div>
              <h2 style={{ 
                color: 'white', 
                fontFamily: 'Playfair Display', 
                fontWeight: '600',
                marginBottom: '0.5rem'
              }}>
                Espace Administrateur
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>Accès réservé au personnel autorisé</p>
            </div>

            <div style={{
              backgroundColor: 'white',
              borderRadius: '24px',
              padding: '2rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
            }}>
              {error && (
                <Alert variant="danger" style={{ borderRadius: '40px', border: 'none' }}>
                  {error}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Label style={{ color: '#2c4a5e', fontWeight: '500' }}>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="admin@ecommerce.com"
                    className="py-2"
                    style={{ 
                      borderRadius: '40px', 
                      borderColor: '#b8d4d4',
                      padding: '12px 20px'
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label style={{ color: '#2c4a5e', fontWeight: '500' }}>Mot de passe</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="py-2"
                    style={{ 
                      borderRadius: '40px', 
                      borderColor: '#b8d4d4',
                      padding: '12px 20px'
                    }}
                  />
                </Form.Group>

                <Button 
                  type="submit" 
                  disabled={loading}
                  style={{
                    background: 'linear-gradient(135deg, #1a6b6b, #2d8c8c)',
                    border: 'none',
                    borderRadius: '40px',
                    padding: '12px',
                    width: '100%',
                    fontWeight: '500',
                    fontSize: '1rem',
                    marginBottom: '1rem',
                    boxShadow: '0 4px 12px rgba(26,107,107,0.3)'
                  }}
                >
                  {loading ? 'Connexion en cours...' : 'Se connecter'}
                </Button>

                <div className="text-center">
                  <a 
                    href="/login" 
                    style={{ 
                      color: '#2d8c8c', 
                      textDecoration: 'none',
                      fontSize: '0.9rem'
                    }}
                  >
                    Accès espace client
                  </a>
                </div>
              </Form>

              <hr className="my-4" style={{ borderColor: '#b8d4d4' }} />

              <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#4a5a5a' }}>
                <p className="mb-1">Compte de démonstration</p>
                <p>Email: admin@ecommerce.com | Mot de passe: Admin@123</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminLoginPage;