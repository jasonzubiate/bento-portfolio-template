import { GeistMono } from "geist/font/mono";
import Image from "next/image";

export default function WidgetContainer({
  icon,
  title,
  description,
  techStack,
  img,
  url,
  width,
}: WidgetContainerProps) {
  return (
    <a
      id={`widget-${title}`}
      href={url}
      target="_blank"
      className={`widget-card rounded-lg bg-blush-gray hover:bg-[#262626] p-6 flex flex-col gap-16 transition-all duration-300 ${
        width === "half" ? "w-1/2" : "w-full"
      }`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="relative w-[28px] h-[28px]">
            <Image src={icon} alt={title} fill />
          </div>
          <h2 className="text-lg text-demo-smoke">{title}</h2>
        </div>
        <p className="text-p-text">{description}</p>
        <p
          className={`${GeistMono.className} uppercase text-demo-smoke text-xs`}
        >
          Stack: {techStack.join(", ")}
        </p>
      </div>
      {img && (
        <div className="relative w-full h-[200px] overflow-hidden rounded-md">
          <Image src={img} alt={title} fill />
        </div>
      )}
    </a>
  );
}
