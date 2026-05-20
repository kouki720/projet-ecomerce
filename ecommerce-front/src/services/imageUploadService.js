// Service pour gérer l'upload des images
export const uploadImage = async (file) => {
  console.log('=== UPLOAD IMAGE ===');
  console.log('Fichier reçu:', file.name, 'Type:', file.type, 'Taille:', file.size);
  
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = () => {
      // Générer un nom unique pour l'image
      const fileName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
      const imageUrl = `/uploads/${fileName}`;
      
      // Sauvegarder dans localStorage pour simulation
      const storedImages = JSON.parse(localStorage.getItem('storedImages') || '{}');
      storedImages[fileName] = reader.result;
      localStorage.setItem('storedImages', JSON.stringify(storedImages));
      
      console.log('Image stockée dans localStorage avec le nom:', fileName);
      console.log('URL générée:', imageUrl);
      console.log('=== FIN UPLOAD ===');
      
      resolve(imageUrl);
    };
    
    reader.onerror = (error) => {
      console.error('Erreur lors de la lecture du fichier:', error);
      reject(error);
    };
    
    reader.readAsDataURL(file);
  });
};

export const getImageUrl = (imagePath) => {
  if (!imagePath) return null;
  
  // Si l'URL est déjà une URL complète (http/https ou data:image)
  if (imagePath.startsWith('http') || imagePath.startsWith('data:image')) {
    return imagePath;
  }
  
  const fileName = imagePath.split('/').pop();
  const storedImages = JSON.parse(localStorage.getItem('storedImages') || '{}');
  const imageData = storedImages[fileName];
  
  if (imageData) {
    return imageData;
  }
  
  // Image par défaut
  return 'https://placehold.co/400x400/e0e0e0/999?text=Image';
};

export const deleteImage = (imagePath) => {
  if (!imagePath) return;
  
  const fileName = imagePath.split('/').pop();
  const storedImages = JSON.parse(localStorage.getItem('storedImages') || '{}');
  delete storedImages[fileName];
  localStorage.setItem('storedImages', JSON.stringify(storedImages));
  console.log('Image supprimée du localStorage:', fileName);
};