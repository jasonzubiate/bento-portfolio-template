import Header from "@/components/linkpage/Header";
import ExternalLink from "@/components/linkpage/ExternalLink";
import { links } from "@/data";

export default function MePage() {
  return (
    <main
      id="link-page"
      className="flex sm:items-center sm:justify-center bg-[#060606] min-h-screen"
    >
      <div className="flex flex-col gap-4 p-4 md:py-8 md:max-w-[460px] bg-white sm:rounded-lg ">
        <Header />
        <ul id="external-links" className="flex flex-col gap-4">
          {links.map((link: ExternalLink, index: number) => (
            <li key={index}>
              <ExternalLink link={link} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
