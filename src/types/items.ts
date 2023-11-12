export type Item = {
  title: string;
  price: number;
  image: string;
  category: 'tacos' | 'salad' | 'coffee' | 'juice';
};

export type CheckItem = {
  image: string;
  title: string;
  price: number;
  count: number;
};
