import Image from "next/image";

export default function LargeLinkCard({ link }: { link: SocialLink }) {
  return (
    <a
      className="flex items-center justify-center py-16 w-1/3 bg-blush-gray hover:bg-[#262626] rounded-xl transition-all duration-300"
      href={link.url}
      target="_blank"
    >
      <Image src={link.icon} alt={link.website} width={48} height={48} />
    </a>
  );
}
