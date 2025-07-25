type User = {
  id: string;
  name: string;
  email: string;
};

type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
  user: User;
};

// Solution : use Pick to keep only id, name and price
type ProductPreview = Pick<Product, "id" | "name" | "price">;
const productPreview = (product: Product): ProductPreview => {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
  };
};

// Solution : use Partial to make all properties optional
const productPatch = (product: Partial<Product>): Partial<Product> => {
  return { ...product, price: product.price ? product.price * 1.1 : undefined };
};

// Solution : use Omit to create a new type ProductWithoutStock that contains all properties of Product except "stock".
type ProductWithoutStock = Omit<Product, "stock">;

const getProductWithoutStock = (product: Product): ProductWithoutStock => {
  const { stock, ...rest } = product;
  return rest;
};

export default function Solution() {
  return <div>Solution</div>;
}
