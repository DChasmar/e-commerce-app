// DataContext.tsx
import { createContext, useState, useEffect, ReactNode } from 'react';
import { WebsiteConfig, Product, DataContextType, CartItem } from '../types';
import axios from 'axios';

export const DataContext = createContext<DataContextType>({});

export const DataProvider = ({ children }: { children: ReactNode })  => {
    const [products, setProducts] = useState<Product[]>([]);
    const [content, setContent] = useState<WebsiteConfig[]>([]);
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        const fetchContent = async () => {
            try {
            const response = await axios.get('http://52.23.229.23/api/config/');
            setContent(response.data);
            } catch (error) {
            console.error('Failed to fetch About page content:', error);
            }
        };

        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://52.23.229.23/api/products/');
                setProducts(response.data);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };
        fetchContent();
        fetchProducts();
    }, []);

    return (
        <DataContext.Provider value={{ content, products, cart, setCart }}>
            {children}
        </DataContext.Provider>
    );
};