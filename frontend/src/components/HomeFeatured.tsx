import { useEffect, useState, useContext } from 'react';
import { DataContext } from './DataContext';

function HomeFeatured() {
  const data = useContext(DataContext);
  const [homeFeatured, setHomeFeatured] = useState([
    {
      id: 1,
      image: 'https://via.placeholder.com/200', // replace with your placeholder image path
      name: 'Loading...',
      description: 'Loading...',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/200', // replace with your placeholder image path
      name: 'Loading...',
      description: 'Loading...',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/200', // replace with your placeholder image path
      name: 'Loading...',
      description: 'Loading...',
    },
  ]);

  useEffect(() => {
    if (data.products && data.products.length > 0) {
      setHomeFeatured(data.products.slice(0, 3));
    }
  }, [data]);

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
                          <a href="#" className="btn btn-primary">Add to Cart</a>
                      </div>
                  </div>
              </div>
          ))}
      </div>
    </div>
  )
}

export default HomeFeatured