export interface IProduct {
  img: string[];
  name: string;
  desc: string;
  price: number;
  rate: { rate: number; count: number };
  category: { category: string; name: string };
}
