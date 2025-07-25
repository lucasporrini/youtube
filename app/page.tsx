import UtilityType from "./utility-type";

function identity<T>(value: T): T {
  return value;
}

identity<number>(42); // T = number
identity<string>("hello"); // T = string

function logLength<T extends { length: number }>(value: T): T {
  console.log(value.length);
  return value;
}

logLength<Array<number>>([1, 2, 3]); // OK, length = 3
logLength("Salut"); // OK, length = 5

export default function Home() {
  return <UtilityType />;
}
