export interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
    bio?: string;
    joinedDate: string;
}

export interface Product {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    gallery?: string[];
    condition: 'Nuevo' | 'Como Nuevo' | 'Usado' | 'Para Reparar';
    ownerId: string;
    ownerName: string;
    ownerAvatar: string;
    postedDate: string;
    lookingFor?: string;
}

export interface Trade {
    id: string;
    status: 'Pendiente' | 'Completado' | 'Cancelado';
    offeredItem: Product;
    requestedItem: Product;
    date: string;
    partnerName: string;
}

export type Category = 'Electrónica' | 'Hogar' | 'Ropa' | 'Deportes' | 'Libros' | 'Otros' | 'Todas';