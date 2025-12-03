import { Product, Trade, User } from "../types";

export const MOCK_USER: User = {
    id: 'u1',
    name: 'Alex Mercado',
    email: 'alex@truequeplus.com',
    avatar: 'https://picsum.photos/id/64/150/150',
    bio: 'Entusiasta de la fotografía y el ciclismo. Siempre buscando renovar mi equipo.',
    joinedDate: '2023-01-15'
};

export const MOCK_PRODUCTS: Product[] = [
    {
        id: 'p1',
        title: 'Cámara Vintage Modelo X',
        category: 'Electrónica',
        description: 'Auténtica cámara de película de 35mm en excelente estado. Lente de 50mm f/1.8 incluido.',
        condition: 'Usado',
        image: 'https://picsum.photos/id/250/600/400',
        gallery: ['https://picsum.photos/id/250/200/200', 'https://picsum.photos/id/251/200/200', 'https://picsum.photos/id/252/200/200'],
        ownerId: 'u2',
        ownerName: 'Carlos Pérez',
        ownerAvatar: 'https://picsum.photos/id/91/100/100',
        postedDate: '2024-05-15',
        lookingFor: 'Bicicleta de montaña'
    },
    {
        id: 'p2',
        title: 'Guitarra Acústica Fender',
        category: 'Instrumentos',
        description: 'Guitarra con poco uso, cuerdas nuevas. Incluye funda.',
        condition: 'Como Nuevo',
        image: 'https://picsum.photos/id/145/600/400',
        ownerId: 'u1', // Owned by current user
        ownerName: 'Alex Mercado',
        ownerAvatar: 'https://picsum.photos/id/64/100/100',
        postedDate: '2024-05-10',
        lookingFor: 'Teclado MIDI'
    },
    {
        id: 'p3',
        title: 'Bicicleta Urbana Retro',
        category: 'Deportes',
        description: 'Bicicleta restaurada color verde. Ideal para la ciudad.',
        condition: 'Usado',
        image: 'https://picsum.photos/id/146/600/400',
        ownerId: 'u3',
        ownerName: 'Maria Silva',
        ownerAvatar: 'https://picsum.photos/id/55/100/100',
        postedDate: '2024-05-18',
        lookingFor: 'Cámara fotográfica'
    },
    {
        id: 'p4',
        title: 'Colección Novelas Sci-Fi',
        category: 'Libros',
        description: 'Lote de 10 libros clásicos de ciencia ficción.',
        condition: 'Usado',
        image: 'https://picsum.photos/id/24/600/400',
        ownerId: 'u4',
        ownerName: 'Juan Do',
        ownerAvatar: 'https://picsum.photos/id/10/100/100',
        postedDate: '2024-05-20',
        lookingFor: 'Juegos de mesa'
    },
    {
        id: 'p5',
        title: 'Auriculares Noise Cancelling',
        category: 'Electrónica',
        description: 'Alta fidelidad, batería de larga duración.',
        condition: 'Nuevo',
        image: 'https://picsum.photos/id/99/600/400',
        ownerId: 'u1', // Owned by current user
        ownerName: 'Alex Mercado',
        ownerAvatar: 'https://picsum.photos/id/64/100/100',
        postedDate: '2024-05-01',
        lookingFor: 'Monitor 27"'
    },
    {
        id: 'p6',
        title: 'Cafetera Italiana',
        category: 'Hogar',
        description: 'Acero inoxidable, 6 tazas.',
        condition: 'Como Nuevo',
        image: 'https://picsum.photos/id/1060/600/400',
        ownerId: 'u5',
        ownerName: 'Laura V.',
        ownerAvatar: 'https://picsum.photos/id/40/100/100',
        postedDate: '2024-05-21',
        lookingFor: 'Molino de café'
    }
];

export const MOCK_TRADES: Trade[] = [
    {
        id: 't1',
        status: 'Completado',
        date: '2024-04-10',
        partnerName: 'Carlos Pérez',
        offeredItem: MOCK_PRODUCTS[1],
        requestedItem: MOCK_PRODUCTS[0]
    },
    {
        id: 't2',
        status: 'Pendiente',
        date: '2024-05-21',
        partnerName: 'Maria Silva',
        offeredItem: MOCK_PRODUCTS[4],
        requestedItem: MOCK_PRODUCTS[2]
    }
];