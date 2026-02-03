interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const UserModalPage = async ({ params }: Props) => {
  const { slug } = await params;

  const id = slug;
  console.log("id", id);
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const user = await res.json();

  return (
    <div className="bg-white p-8 rounded shadow">
      <h1 className="text-xl font-bold">User ID: {user.id}</h1>
      <p>
        {user.firstName} {user.lastName}
      </p>
    </div>
  );
};

export default UserModalPage;
