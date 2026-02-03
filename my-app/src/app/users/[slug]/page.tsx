import { User } from "../components/UserListServer";

type Props = {
  params: Promise<{ slug: number }>;
};

const page = async ({ params }: Props) => {
  const { slug } = await params;
  let user: User;

  try {
    const res = await fetch(`https://dummyjson.com/users/${slug}`);
    const data = await res.json();
    user = data;
  } catch (err) {
    console.log(err);
    throw new Error("Unable to show post");
  }

  return (
    <div>
      <h1 className="font-bold text-2xl">
        {user.id} : {user.lastName} {user.firstName}
      </h1>
    </div>
  );
};
export default page;
