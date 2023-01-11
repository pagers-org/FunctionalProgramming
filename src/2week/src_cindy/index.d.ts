declare type CategoryType = "D" | "C";

declare type Item = {
  name: string;
  category: CategoryType;
  price: number;
};

declare type ItemBuyButton = {
  show_free_shopping_icon: () => void;
  hide_free_shopping_icon: () => void;
} & Item;
