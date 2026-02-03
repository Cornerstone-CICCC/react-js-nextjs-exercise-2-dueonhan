import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | My App",
  description: "This is my home page.",
};

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
