import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex w-full h-[100vh] justify-center items-center">
        <h1>
          <Link href="/FormAction">Form Action</Link>
        </h1>
      </div>
    </>
  );
}
