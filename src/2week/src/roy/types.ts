export type CartItem = {
  name: string;
  category: string;
  price: number;
}
export type Product = CartItem & {
  elem: HTMLElement;
}