import React from 'react';

// Sample portfolio images data
const portfolioImages = [
  { id: 1, src: '/man.jpg', title: 'Image 1' },
  { id: 2, src: '/man.jpg', title: 'Image 2' },
  { id: 3, src: '/man.jpg', title: 'Image 3' },
  { id: 4, src: '/man.jpg', title: 'Image 4' },
  { id: 5, src: '/man.jpg', title: 'Image 5' },
  { id: 6, src: '/man.jpg', title: 'Image 6' },
  { id: 7, src: '/man.jpg', title: 'Image 7' },
  { id: 8, src: '/man.jpg', title: 'Image 8' },
  
  // Add more images as needed
];

const PortfolioGrid = () => {
  return (
    <div className="grid-container">
      {portfolioImages.map((image) => (
        <div className="grid-item" key={image.id}>
          <img className="image" src={image.src} alt={image.title} />
          <p>{image.title}</p>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;