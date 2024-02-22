import { IoLinkOutline } from "react-icons/io5";

export default function ExternalLink({ link }: { link: ExternalLink }) {
  const RenderLinkIcon = () => {
    switch (link.type) {
      case "website":
        return <IoLinkOutline size={24} color="#0F0F0F" />;
    }
  };

  return (
    <a
      id={`link-to-${link.url}`}
      href={link.url}
      target="_blank"
      className="flex gap-3 border-2 border-[#F2F2F2] rounded-md p-2 cursor-pointer"
    >
      <div className="bg-demo-smoke rounded-lg px-3 flex items-center justify-center">
        <RenderLinkIcon />
      </div>
      <div className="flex flex-col">
        <h4 className="font-medium">{link.name}</h4>
        <p className="text-gray-700">{link.description}</p>
      </div>
    </a>
  );
}
