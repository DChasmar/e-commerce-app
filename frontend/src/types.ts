export interface WebsiteConfig {
    id?: number;
    slider_images?: []; // replace 'any' with the actual type of your slider_images data
    hero_title?: string;
    hero_subtitle?: string;
    hero_image?: string;
    about_text?: string;
}

export interface Product {
    id: number;
    name: string;
    price: string;
    description: string;
    image: string;
    created_at?: string;
    updated_at?: string;
}

export interface DataContextType {
    content?: WebsiteConfig[];
    products?: Product[];
    cart?: CartItem[];
    setCart?: (cart: CartItem[]) => void;
}

export type CartItem = {
    product: Product;
    quantity: number;
};