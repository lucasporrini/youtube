type User = { id: string; name: string; email: string };
type PublicUser = Pick<User, "id" | "name">;
type PrivateUser = Omit<User, "email">;

const updateUser = (id: User["id"], patch: Partial<User>) => {
  return { id, ...patch };
};

const makeUserPublic = (user: User): PublicUser => {
  return { id: user.id, name: user.name };
};

const makeUserPrivate = (user: User): PrivateUser => {
  return { id: user.id, name: user.name };
};

const makeSafePatch = <T extends object>(
  entity: T,
  patch: Partial<T>
): Partial<T> => {
  return { ...entity, ...patch };
};

export default function UtilityType() {
  const user: User = { id: "1", name: "John", email: "john@example.com" };
  console.log("user", user);

  const publicUser: PublicUser = makeUserPublic(user);
  console.log("publicUser", publicUser);

  const updatedUser = updateUser(user.id, {
    name: "Jane",
    email: "jane@example.com",
  });
  console.log("updatedUser", updatedUser);

  const privateUser: PrivateUser = makeUserPrivate(user);
  console.log("privateUser", privateUser);

  return <div>UtilityType</div>;
}
