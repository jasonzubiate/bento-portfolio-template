import CareerCard from "@/components/website/CareerCard";
import ConnectCard from "@/components/website/ConnectCard";
import Header from "@/components/website/Header";
import LargeLinkCard from "@/components/website/LargeLinkCard";
import SmallLinkCard from "@/components/website/SmallLinkCard";
import SpinninCard from "@/components/website/SpinninCard";
import WidgetContainer from "@/components/website/WidgetContainer";
import { projects, websites } from "@/data";
import { socialLinks } from "@/data";
import { redirect } from "next/navigation";

export default function Home() {
  const largeLinks = socialLinks.filter((link) => link.size === "large");
  const smallLinks = socialLinks.filter((link) => link.size === "small");
  redirect("/me");

  return (
    <main
      id="home"
      className="flex justify-center gap-6 max-w-screen-2xl mx-auto p-16"
    >
      <div className="w-2/3 flex flex-col gap-6">
        <Header />
        <div className="flex gap-6">
          {websites.map((site) => (
            <WidgetContainer
              icon={site.icon}
              title={site.title}
              url={site.url}
              description={site.description}
              techStack={site.techStack}
              width="half"
              img={site.img}
            />
          ))}
        </div>
        <div className="flex gap-6">
          {projects.map((project) => (
            <WidgetContainer
              icon={project.icon}
              title={project.title}
              url={project.url}
              description={project.description}
              techStack={project.techStack}
              width="half"
              img={project.img}
            />
          ))}
        </div>
        <ConnectCard />
      </div>
      <div className="flex flex-col gap-6 w-1/3">
        <CareerCard />
        <SpinninCard />
        <div className="flex gap-3">
          {largeLinks.map((link, index) => (
            <LargeLinkCard key={index} link={link} />
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            {smallLinks.slice(0, 2).map((link, index) => (
              <SmallLinkCard key={index} link={link} />
            ))}
          </div>
          <div className="flex gap-3 ">
            {smallLinks.slice(2).map((link, index) => (
              <SmallLinkCard key={index} link={link} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
