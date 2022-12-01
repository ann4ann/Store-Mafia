// Продукт
export interface rating {
  rate: number;
  count: number;
}
export interface product {
  id?: string;
  img?: string[];
  name: string;
  desc?: string;
  price?: number;
  rate?: rating;
  data?: Date;
}

// Пользователь
export interface adress {
  city?: string;
  street?: string;
  number?: number;
  zipcode?: string;
  geolocation?: {
    lat?: number;
    long?: number;
  };
}

export interface user {
  id?: string;
  email?: string;
  username: string;
  password?: string;
  name?: {
    firstname?: string;
    lastname?: string;
  };
  address?: adress;
  phone?: string;
}

// Корзина
export interface products {
  productId?: string;
  quantity?: number;
}

export interface cart {
  id?: string;
  userId: string;
  date?: Date;
  products?: products[];
}
