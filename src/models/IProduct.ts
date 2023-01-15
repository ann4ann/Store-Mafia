export interface IProduct {
  id: string;
  img: string[];
  name: string;
  desc: string;
  price: number;
  type: string;
  aviableNum: number
  rate: { rate: number; count: number };
  category: { category: string; name: string };
}
