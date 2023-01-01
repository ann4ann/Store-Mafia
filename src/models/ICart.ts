export interface productItem {
  productId: number;
  quantity: number;
  price: number
}

export interface ICart {
  id: number;
  userId: number;
  items: productItem[];
}


