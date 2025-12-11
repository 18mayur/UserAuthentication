import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col h-[100vh] gap-4 justify-center items-center">
        <h1 className="FormAction">
          <Link href="/FormAction">Form Action</Link>
        </h1>
        <h1 className="login">
          <Link href="/login">Login</Link>
        </h1>
      </div>
    </>
  );
}
