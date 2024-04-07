import { useContext } from 'react';
import { CartItem } from '../types'; // import the CartItem type
import { DataContext } from './DataContext';
import { Trash3 } from 'react-bootstrap-icons';

function Cart() {
    const data = useContext(DataContext);

    // Calculate the subtotal
    const subtotal = data.cart 
    ? data.cart.reduce((total, item) => total + (parseFloat(item.product.price) * item.quantity), 0) 
    : 0;

    const handleQuantityChange = (index: number, newQuantity: number) => {
        if (data.setCart && data.cart) {
            const newCart = [...data.cart];
            newCart[index].quantity = newQuantity;
            data.setCart(newCart);
        }
    };

    const handleDelete = (index: number) => {
        if (data.setCart && data.cart) {
            const newCart = [...data.cart];
            newCart.splice(index, 1);
            data.setCart(newCart);
        }
    }
  
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h2 className="text-center my-5">My Bag</h2>
                    {(data.cart && data.cart.length > 0) ? (data.cart.map((item: CartItem, index: number) => (
                        <div key={index} className="row border m-2 p-2">
                            <div className="col">
                                <img src={item.product.image} alt={item.product.name} style={{width: '100px'}}/>
                            </div>
                            <div className="col">
                                <h4>{item.product.name}</h4>
                                <p style={{fontSize: '0.8rem'}}>{item.product.description.split('.')[0]}.</p>
                            </div>
                            <div className="col">
                                <p>Item Price: ${parseFloat(item.product.price).toFixed(2)}</p>
                            </div>
                            <div className="col">
                                <p>
                                    Quantity: 
                                    <select value={item.quantity} onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}>
                                        {[...Array(8).keys()].map(i => <option key={i+1} value={i+1}>{i+1}</option>)}
                                    </select>
                                </p>
                            </div>
                            <div className="col">
                                <p>Subtotal: ${(parseFloat(item.product.price) * item.quantity).toFixed(2)}</p>
                                <button title='Delete Item' style={{background: 'none', border: 'none'}} onClick={() => handleDelete(index)}>
                                    <Trash3 />
                                </button>
                            </div>
                        </div>
                    ))) : (<h4>Your bag is empty.</h4>)}
                </div>
                {data.cart && data.cart.length > 0 && (
                <div className="col-md-4">
                    <h2 className="text-center my-5">Order Summary</h2>
                    <p><strong>Subtotal:</strong> ${subtotal.toFixed(2)}</p>
                    <p><strong>Shipping:</strong> {subtotal < 100 ? '$10.00' : 'FREE'}</p>
                    <p><strong>Tax:</strong> Calculated at checkout</p>
                    <p><strong>Estimated Total:</strong> ${(subtotal < 100 ? subtotal + 10 : subtotal).toFixed(2)}</p>
                    <button type="button" className="btn btn-primary">Checkout</button>
                </div>
                )}
            </div>
        </div>
    );
}

export default Cart;