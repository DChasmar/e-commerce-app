import { CartItem, Product } from './types';
// utils.ts
export const updateCart = (productToAdd: Product, cart: CartItem[], setCart: (cart: CartItem[]) => void): void => {
    const newCart = cart ? [...cart] : [];
    const existingProductIndex = newCart.findIndex(item => item.product.id === productToAdd.id);

    if (existingProductIndex !== -1) {
        // Product exists in cart already, increment quantity
        if (newCart[existingProductIndex].quantity < 8) newCart[existingProductIndex].quantity++;
    } else {
        // Product does not exist in cart, add it with quantity 1
        newCart.push({ product: productToAdd, quantity: 1 });
    }

    setCart(newCart);
};