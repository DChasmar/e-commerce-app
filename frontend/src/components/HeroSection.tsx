import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const HeroSection = () => {
  const [images, setImages] = useState<string[]>([
    "https://via.placeholder.com/720x480", 
    "https://via.placeholder.com/721x481", 
    "https://via.placeholder.com/722x482"
  ]);

  const [currentImage, setCurrentImage] = useState(images[0]);

  const intervalId = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://52.23.229.23/api/config/');
        const imageUrls = response.data[0].slider_images.map((img: { image: string }) => img.image);
        setImages(imageUrls);
        setCurrentImage(imageUrls[0]);
      } catch (error) {
        console.error('Failed to fetch images:', error);
      }
    };
  
    fetchImages();
  }, []);

  const startInterval = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
    intervalId.current = setInterval(() => {
      setCurrentImage(oldImage => {
        const currentIndex = images.indexOf(oldImage);
        return images[(currentIndex + 1) % images.length];
      });
    }, 5000);
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [images]);

  const handleCarouselClick = (direction: 'left' | 'right'): React.MouseEventHandler<HTMLButtonElement> => (event) => {
    event.preventDefault();
    setCurrentImage(oldImage => {
      const currentIndex = images.indexOf(oldImage);
      let newIndex: number;
      if (direction === 'left') {
        newIndex = (currentIndex - 1 + images.length) % images.length;
      } else {
        newIndex = (currentIndex + 1) % images.length;
      }
      return images[newIndex];
    });
    startInterval(); // Reset the interval
  };

  return (
    <div className="jumbotron fade-in" style={{ backgroundImage: `url(${currentImage})`, backgroundSize: 'cover', height: '500px' }}>
      <button className='hs-carousel' style={{ left: '2%' }} onClick={handleCarouselClick('left')}>
        {'<'}
      </button>
      <button className='hs-carousel' style={{ right: '2%' }} onClick={handleCarouselClick('right')}>
        {'>'}
      </button>
    </div>
  );
}

export default HeroSection;