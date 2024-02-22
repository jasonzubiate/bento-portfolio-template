import { IoLinkOutline } from "react-icons/io5";

export default function ExternalLink({ link }: { link: ExternalLink }) {
  const RenderLinkIcon = () => {
    switch (link.type) {
      case "website":
        return <IoLinkOutline size={24} color="#0F0F0F" />;
    }
  };

  return (
    <div
      id={`link-to-${link.url}`}
      className="flex gap-3 border-2 border-[#F2F2F2] rounded-md p-2 cursor-pointer"
    >
      <div className="bg-demo-smoke rounded-lg px-3 flex items-center justify-center">
        <RenderLinkIcon />
      </div>
      <div className="flex flex-col">
        <label htmlFor="link-name" className="font-medium">
          {link.name}
        </label>
        <p className="text-gray-700">{link.description}</p>
      </div>
    </div>
  );
}
