import { useEffect, useState, useContext } from 'react';
import { DataContext } from './DataContext';
import { Product } from '../types';
import { updateCart } from '../utils';

function HomeFeatured() {
  const data = useContext(DataContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [homeFeatured, setHomeFeatured] = useState([
    {
      id: 1,
      image: 'https://via.placeholder.com/200', // replace with your placeholder image path
      name: 'Loading...',
      description: 'Loading...',
      price: '...',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/200', // replace with your placeholder image path
      name: 'Loading...',
      description: 'Loading...',
      price: '...',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/200', // replace with your placeholder image path
      name: 'Loading...',
      description: 'Loading...',
      price: '...',
    },
  ]);

  useEffect(() => {
    if (data.products && data.products.length > 0) {
      setHomeFeatured(data.products.slice(0, 3));
    }
  }, [data]);

  const handleAddToCart = (productToAdd: Product): void => {
    if (data.cart && data.setCart) {
        updateCart(productToAdd, data.cart, data.setCart);
        setShowDropdown(true);
        setTimeout(() => setShowDropdown(false), 2000); // hide the dropdown after 2 seconds
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-5">Featured Products</h1>
      <div className="row">
          {homeFeatured.map(product => (
              <div className="col-4" key={product.id}>
                  <div className="card">
                      <img src={product.image} className="card-img-top" alt="Product" />
                      <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text">{product.description}</p>
                          <a href="#" className="btn btn-primary" onClick={(event) => {event.preventDefault(); handleAddToCart(product);}}>Add to Cart</a>
                          {showDropdown && <div className="dropdown">Item added to cart</div>}
                      </div>
                  </div>
              </div>
          ))}
      </div>
    </div>
  )
}

export default HomeFeatured