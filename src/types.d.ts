export type MenuItemType = {
  id: string;
  title: string;
  description: { description: string };
  iamge: { fixed: { src: string } };
  price: number;
  catecory: string;
};

export type ProductType = {
  id: string;
  title: string;
  price: number;
  image: FluidImg;
};

export type FluidImg = {
  src: string;
};
