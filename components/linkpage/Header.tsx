import Image from "next/image";
import profileImg from "@/public/img/memoji.png";
import ContactButton from "./ContactButton";

export default function Header() {
  return (
    <header
      id="header"
      className="bg-white w-full flex flex-col border-2 border-[#F2F2F2] rounded-md"
    >
      <div className="flex justify-center items-center gap-3 py-6">
        <div className="relative w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-[#F2F2F2]">
          <Image
            src={profileImg}
            alt="Jason Zubiate"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="font-medium">Jason Zubiate</h1>
          <h2 className="text-gray-700">Creative Developer</h2>
        </div>
      </div>
      <div className="flex flex-col gap-6 p-6 border-t-2 border-[#F2F2F2]">
        <p className="text-gray-700">
          Creative Developer Focusing On Building Modern And Interactive Web
          Applications.
        </p>
        <div className="flex flex-col">
          <p className="uppercase font-medium">Now</p>
          <p className="text-gray-700">
            Full-Stack Engineer @{" "}
            <a
              href="https://www.trackstack.app/"
              target="_blank"
              className="text-[#0070f3] hover:underline"
            >
              Trackstack
            </a>
            .
          </p>
          <p className="text-gray-700">
            Freelance Web Developer @{" "}
            <a
              href="https://www.spinnin.studio/"
              target="_blank"
              className="text-[#0070f3] hover:underline"
            >
              Spinnin
            </a>
            .
          </p>
        </div>
        <ContactButton />
      </div>
    </header>
  );
}
