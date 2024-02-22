import Header from "@/components/linkpage/Header";
import ExternalLink from "@/components/linkpage/ExternalLink";
import { links } from "@/data";

export default function MePage() {
  return (
    <main
      id="link-page"
      className="w-full pt-8 sm:pt-4 sm:max-w-[460px] bg-white p-4 md:rounded-lg flex flex-col gap-4"
    >
      <Header />
      <ul id="external-links" className="flex flex-col gap-4">
        {links.map((link: ExternalLink, index: number) => (
          <li key={index}>
            <ExternalLink link={link} />
          </li>
        ))}
      </ul>
    </main>
  );
}
