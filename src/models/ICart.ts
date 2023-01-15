export interface productItem {
  productId: string;
  quantity: number;
  price: number
}

export interface ICart {
  id: string;
  userId: string;
  items: productItem[];
}

export interface UpdateQuantity{
  userId: string,
  productId: string,
  quantity: number
}
