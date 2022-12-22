export interface IProduct {
  id: number;
  img: string[];
  name: string;
  desc: string;
  price: number;
  type: string;
  rate: { rate: number; count: number };
  category: { category: string; name: string };
}
