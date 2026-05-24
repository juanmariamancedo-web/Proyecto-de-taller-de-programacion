import { User } from "./Auth"

export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    low_stock: number;
    image: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface ItemOrder {
    id: number
    amount: number
    unit_price: number
    product_id: number
    order_id: number
    product: Product
    created_at: string
    updated_at: string
}

export interface Order {
    id: number
    state: string
    user_id: number
    payment_id: string
    created_at: string
    updated_at: string
    item_orders: ItemOrder[],
    user: User
}