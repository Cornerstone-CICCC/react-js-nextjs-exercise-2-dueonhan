import Link from "next/link";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
}

const TodoListServer = async () => {
  const res = await fetch("https://dummyjson.com/users");
  console.log("res", res);
  const data = await res.json();
  const users: User[] = data.users;

  return (
    <div>
      <ul>
        {users.map((t) => (
          <li key={t.id}>
            <Link href={`/users/${t.id}`}>
              {t.lastName} {t.firstName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListServer;
