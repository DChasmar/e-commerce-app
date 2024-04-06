import { useState, useEffect, useContext } from 'react';
import { DataContext } from './DataContext';

const Products = () => {
    const data = useContext(DataContext);
    const [products, setProducts] = useState([
        { id: 1, image: 'https://via.placeholder.com/200', name: 'Loading...', description: 'Loading...', price: '...' },
        { id: 2, image: 'https://via.placeholder.com/200', name: 'Loading...', description: 'Loading...', price: '...' },
        { id: 3, image: 'https://via.placeholder.com/200', name: 'Loading...', description: 'Loading...', price: '...' },
        { id: 4, image: 'https://via.placeholder.com/200', name: 'Loading...', description: 'Loading...', price: '...' },
        { id: 5, image: 'https://via.placeholder.com/200', name: 'Loading...', description: 'Loading...', price: '...' },
        { id: 6, image: 'https://via.placeholder.com/200', name: 'Loading...', description: 'Loading...', price: '...' },
        { id: 7, image: 'https://via.placeholder.com/200', name: 'Loading...', description: 'Loading...', price: '...' },
        { id: 8, image: 'https://via.placeholder.com/200', name: 'Loading...', description: 'Loading...', price: '...' },
        { id: 9, image: 'https://via.placeholder.com/200', name: 'Loading...', description: 'Loading...', price: '...' },
        { id: 10, image: 'https://via.placeholder.com/200', name: 'Loading...', description: 'Loading...', price: '...' },
        { id: 11, image: 'https://via.placeholder.com/200', name: 'Loading...', description: 'Loading...', price: '...' },
        { id: 12, image: 'https://via.placeholder.com/200', name: 'Loading...', description: 'Loading...', price: '...' },
    ]);

    useEffect(() => {
        if (data.products && data.products.length > 0) {
            setProducts(data.products);
        }
    }, [data]);

    console.log(products);

    return (
        <div className="container">
            <h1 className="text-center my-5">Products</h1>
            <div className="row">
                {products.map(product => (
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
                        <div className="card">
                            <img src={product.image} className="card-image-top" alt="Product" />
                            <div className="card-body">
                                <h5 className="card-name">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="product-price">{`$${product.price}`}</p>
                                <a href="#" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;