import Image from "next/image";
import memoji from "@/public/img/memoji2.png";

export default function Header() {
  return (
    <header className="py-6 px-16 flex gap-6 items-center justify-center bg-blush-gray rounded-xl">
      <Image src={memoji} alt="Jason Zubiate" className="w-[80px] h-[80px]" />
      <div className="flex flex-col gap-2">
        <h1 className="text-xl text-demo-smoke">
          <span className="block">I&apos;m Jason Zubiate,</span>
          <span>a creative developer.</span>
        </h1>
        <p className="text-[#626262]">
          I began my journey as a front-end developer back in 2022 and have
          since expanded my expertise to encompass full-stack development,
          interactive web design, and UX design.
        </p>
      </div>
    </header>
  );
}
