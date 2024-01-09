//Limeneer Website VR Hand Controller

import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen bg-soft-white text-limeneer-blue text-3xl">
      <div className="border-2 shadow-xl">
        <Image
          src="/hero.png"
          width={1000}
          height={100}
          //   fill={true}
          alt="hero"
          quality={100}
        />
      </div>
      <h1>VR Hand Controller</h1>
    </div>
  );
}
