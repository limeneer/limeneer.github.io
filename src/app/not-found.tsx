import Image from "next/image";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen bg-limeneer-blue text-white text-3xl">
      <Image src={"/r-logo.png"} height={100} width={100} alt="logo" />
      <h1>404 Not Found</h1>
      <div className="border-2 border-soft-white rounded-full p-3 text-base bg-limeneer-blue hover:bg-soft-white hover:text-limeneer-blue shadow focus:outline-none cursor-pointer">
        <Link href={"/"}>Go Back to Home</Link>
      </div>
    </div>
  );
}
