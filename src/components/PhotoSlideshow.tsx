import React, { useState, useEffect } from 'react';
import './PhotoSlideshow.css';

interface PhotoSlideshowProps {
  category: string;
}

const PhotoSlideshow: React.FC<PhotoSlideshowProps> = ({ category }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Image collections for each category
  const photoCollections = {
    nature: [
    `/nature1.jpg?height=1024&width=1636&text=${category}+1`,
    `/nature2.jpg?height=683&width=1024&text=${category}+2`,
    `/nature3.jpg?height=683&width=1024&text=${category}+3`,
    ],
    portrait: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04',
      'https://images.unsplash.com/photo-1552058544-f2b08422138a',
    ],
    culture: [
    `/culture1.jpg?height=600&width=1200&text=${category}+1`,
    `/culture3.jpg?height=600&width=1200&text=${category}+2`,
    `/culture4.jpg?height=600&width=1200&text=${category}+3`,
    `/japan3.jpg?height=600&width=1200&text=${category}+4`,
    `/japan5.jpg?height=600&width=1200&text=${category}+5`,
    ],
    events: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3',
    ],
  };

  // Get the current category's photos
  const currentPhotos = photoCollections[category as keyof typeof photoCollections] || [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % currentPhotos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentPhotos.length]);

  // Reset index when category changes
  useEffect(() => {
    setCurrentPhotoIndex(0);
  }, [category]);

  // Preload images for smooth transitions
  useEffect(() => {
    currentPhotos.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, [category, currentPhotos]);

  if (currentPhotos.length === 0) {
    return <div className="photo-slideshow">No photos available</div>;
  }

  return (
    <div className="photo-slideshow">
      <img
        src={currentPhotos[currentPhotoIndex]}
        alt={`${category} photograph ${currentPhotoIndex + 1}`}
        crossOrigin="anonymous"
      />
      <div className="photo-indicators">
        {currentPhotos.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentPhotoIndex ? 'active' : ''}`}
            onClick={() => setCurrentPhotoIndex(index)}
            aria-label={`Go to photo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoSlideshow;

