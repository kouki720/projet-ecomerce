// Sauvegarder l'image localement et retourner le chemin
export const saveImage = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const fileName = `${Date.now()}_${file.name}`;
      const imagePath = `/uploads/${fileName}`;
      
      // Sauvegarder dans localStorage pour simulation
      const images = JSON.parse(localStorage.getItem('uploadedImages') || '{}');
      images[fileName] = reader.result;
      localStorage.setItem('uploadedImages', JSON.stringify(images));
      
      resolve(imagePath);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

// Récupérer l'image
export const getImage = (imagePath) => {
  if (!imagePath) return null;
  const fileName = imagePath.split('/').pop();
  const images = JSON.parse(localStorage.getItem('uploadedImages') || '{}');
  return images[fileName] || null;
};