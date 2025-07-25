// Type declaration : Primitive types (alias)
type UserName = string;

const name: UserName = "John";

// Type declaration : Object types (alias)
type User = {
  id: number | string;
  name: string;
  isAdmin?: boolean;
};

// Type declaration : Union types (alias)
type UserId = number | string;

const userId: UserId = 1;

// Type declaration : Intersection types (alias)
const user: User = {
  id: 1,
  name: "John",
  // isAdmin is optional
};

// Interface declaration
interface IUser {
  id: number;
  name: string;
  isAdmin?: boolean;
}

interface IAdmin extends IUser {
  permissions: string[];
}

// Interface extension : Adding new properties to the interface
const admin: IAdmin = {
  id: 1,
  name: "John",
  // isAdmin is optional
  isAdmin: true,
  // permissions is required by interface extension
  permissions: ["read", "write"],
  // isOnline is required by interface redeclaration
  isOnline: true,
};

// Re-declaration of interface : Overriding the interface
interface IUser {
  isOnline: boolean;
}

// Union Types
type Status = "idle" | "loading" | "success" | "error";

const printStatus = (status: Status) => {
  console.log(status);
};

// Intersection Types
type Timestamp = { createdAt: Date };

type UserWithTimestamp = User & Timestamp;

const userWithTimestamp: UserWithTimestamp = {
  id: 1,
  name: "John",
  createdAt: new Date(),
};

export default function Home() {
  return (
    <div>
      <h1 className="text-xl font-bold">Hello {user.name}!</h1>
      <span>
        {typeof user.id === "number" ? user.id : user.id.toUpperCase()}
      </span>
    </div>
  );
}
