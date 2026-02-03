import { Metadata } from "next";
import { Suspense } from "react";
// import TodoListClient from './components/TodoListClient';
//import TodoListServer from "./components/TodoListServer";
import UserListServer from "./components/UserListServer";

export const metadata: Metadata = {
  title: "My To Dos | My App",
  description: "This is the users page.",
};

const page = () => {
  return (
    <div>
      <h1>Users</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <UserListServer />
      </Suspense>
      {/* <TodoListClient /> */}
    </div>
  );
};

export default page;
