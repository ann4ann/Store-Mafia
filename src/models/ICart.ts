interface productItem {
  productId: number;
  quantity: number;
}

export interface ICart {
  id: number;
  userId: number;
  items?: productItem[];
}
