import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Alert, Form, Image } from 'react-bootstrap';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { getPublicProductById, addToCart, getCart } from '../services/api';
import { getImageUrl } from '../services/imageUploadService';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    loadProduct();
  }, [id]);

  const loadProduct = async () => {
    try {
      const response = await getPublicProductById(id);
      setProduct(response.data);
    } catch (error) {
      console.error('Erreur chargement produit:', error);
      setError('Produit non trouvé');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async () => {
    if (!product) return;
    
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Veuillez vous connecter pour ajouter au panier');
        setTimeout(() => setError(''), 3000);
        return;
      }
      
      await addToCart(product.id, quantity);
      navigate('/cart');
    } catch (error) {
      console.error('Erreur ajout au panier:', error);
      setError(error.response?.data?.error || 'Erreur lors de l\'ajout au panier');
      setTimeout(() => setError(''), 3000);
    }
  };

  const getDisplayImageUrl = (imagePath) => {
    if (!imagePath) return null;
    if (imagePath.startsWith('data:image')) return imagePath;
    if (imagePath.startsWith('http')) return imagePath;
    const storedImage = getImageUrl(imagePath);
    return storedImage || imagePath;
  };

  const imageUrl = getDisplayImageUrl(product?.imageUrl);
  const hasImage = imageUrl && !imageError;

  if (loading) return <LoadingSpinner />;
  if (!product) return (
    <Container className="py-5 text-center">
      <p style={{ color: 'var(--warm-gray)' }}>Produit non trouvé</p>
      <Button className="btn-teal" onClick={() => navigate('/products')}>
        Retour à la boutique
      </Button>
    </Container>
  );

  return (
    <Container className="py-5 my-4">
      {error && (
        <Alert variant="danger" className="position-fixed top-0 end-0 m-3" style={{ zIndex: 1000, borderRadius: '40px' }}>
          {error}
        </Alert>
      )}
      
      <Button 
        variant="link" 
        onClick={() => navigate(-1)} 
        className="mb-4 text-decoration-none"
        style={{ color: 'var(--soft-teal)' }}
      >
        ← Retour
      </Button>

      <Row className="g-5">
        <Col lg={6}>
          <div className="rounded-4 overflow-hidden shadow-sm" style={{ backgroundColor: 'var(--beige)', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {hasImage ? (
              <img 
                src={imageUrl} 
                alt={product.name}
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  minHeight: '400px', 
                  maxHeight: '500px',
                  objectFit: 'contain',
                  backgroundColor: '#faf7f0'
                }}
                onError={() => setImageError(true)}
              />
            ) : (
              <div style={{ 
                textAlign: 'center', 
                padding: '2rem',
                color: 'var(--warm-gray)'
              }}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--soft-teal)" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="2.5"/>
                  <path d="M21 15l-5-5-6 6-3-3-4 4"/>
                </svg>
                <p className="mt-3">Image non disponible</p>
              </div>
            )}
          </div>
        </Col>
        
        <Col lg={6}>
          <div className="mb-3">
            <span className="badge-teal" style={{ fontSize: '0.8rem' }}>Nouvelle collection</span>
          </div>
          
          <h1 className="display-5 fw-bold mb-3" style={{ color: 'var(--navy)', fontFamily: 'Playfair Display' }}>
            {product.name}
          </h1>
          
          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="d-flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={i < 4 ? 'var(--soft-teal)' : 'none'} stroke="var(--soft-teal)" strokeWidth="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span style={{ color: 'var(--warm-gray)' }}>4.8/5 (128 avis)</span>
          </div>
          
          <div className="mb-4">
            <span className="display-4 fw-bold" style={{ color: 'var(--soft-teal)' }}>{product.sellingPrice} €</span>
          </div>
          
          <p style={{ color: 'var(--warm-gray)', lineHeight: '1.8' }}>
            {product.description}
          </p>
          
          <div className="mb-4 p-3 rounded-4" style={{ backgroundColor: 'var(--cream)' }}>
            <div className="d-flex justify-content-between mb-2">
              <span style={{ color: 'var(--navy)' }}>Disponibilité</span>
              <span style={{ color: product.quantity > 0 ? 'var(--sage)' : 'var(--sepia)' }}>
                {product.quantity > 0 ? `En stock (${product.quantity} unités)` : 'Rupture de stock'}
              </span>
            </div>
          </div>
          
          <div className="d-flex align-items-center gap-3 mb-4">
            <Form.Control
              type="number"
              min="1"
              max={product.quantity}
              value={quantity}
              onChange={(e) => setQuantity(Math.min(parseInt(e.target.value) || 1, product.quantity))}
              style={{ width: '100px', borderRadius: '40px', borderColor: 'var(--pale-teal)', textAlign: 'center' }}
              className="py-2"
            />
            <Button 
              className="btn-teal flex-grow-1 py-2"
              onClick={handleAddToCart}
              disabled={product.quantity === 0}
              style={{ fontSize: '1rem' }}
            >
              Ajouter au panier
            </Button>
          </div>
          
          <div className="mt-4 pt-3 border-top" style={{ borderColor: 'var(--pale-teal)' }}>
            <div className="d-flex gap-4 flex-wrap">
              <div className="d-flex align-items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--soft-teal)" strokeWidth="1.5">
                  <rect x="1" y="3" width="22" height="18" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
                <small style={{ color: 'var(--warm-gray)' }}>Livraison offerte</small>
              </div>
              <div className="d-flex align-items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--soft-teal)" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <small style={{ color: 'var(--warm-gray)' }}>Retour 30 jours</small>
              </div>
              <div className="d-flex align-items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--soft-teal)" strokeWidth="1.5">
                  <path d="M12 2v4M12 22v-4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
                <small style={{ color: 'var(--warm-gray)' }}>Paiement sécurisé</small>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      
      <Row className="mt-5 pt-4">
        <Col>
          <h4 className="fw-bold mb-4" style={{ color: 'var(--navy)', fontFamily: 'Playfair Display' }}>Description détaillée</h4>
          <p style={{ color: 'var(--warm-gray)', lineHeight: '1.8' }}>
            {product.description || 'Aucune description détaillée disponible pour ce produit.'}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailPage;