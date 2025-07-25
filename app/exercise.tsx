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

// use Pick utility type to create a new type that only includes the id, name, and price properties
const productPreview = (product) => {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
  };
};

// use Partial utility type to create a new type that only includes the id, name, and price properties
const productPatch = (product) => {
  return { ...product, price: product.price * 1.1 };
};

// use Omit utility type to create a new type that only includes the id, name, and price properties
const getProductWithoutStock = (product) => {
  const { stock, ...rest } = product;
  return rest;
};

export default function Exercise() {
  return <div>Exercise</div>;
}
