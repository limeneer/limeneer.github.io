import Navbar from "@/components/IndexNavbar";
import Hero from "@/components/Hero";
import "@/styles/tailwind.css";

export default function PageLayout() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <div className="flex justify-center items-center h-screen bg-black text-white text-3xl">
        <h1>Page Layout</h1>
      </div> */}
    </>
  );
}
