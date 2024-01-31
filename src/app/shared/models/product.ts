export interface Products {
    id: string;
    name: string;
    price: number;
    img: string[];
    size: SizeEnum;
    stock: number;
    category: string;
    color: string;
}

export enum SizeEnum {
    Small = 'S',
    Medium = 'M',
    Large = 'L',
    ExtraLarge = 'XL'
}

export enum Category {
    jacketsAndCoats = "Jackets and coats",
}

