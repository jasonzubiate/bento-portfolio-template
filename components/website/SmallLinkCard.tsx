import Image from "next/image";

export default function SmallLinkCard({ link }: { link: SocialLink }) {
  return (
    <a
      className="flex items-center justify-center gap-2 w-1/2 py-2 bg-blush-gray hover:bg-[#262626] rounded-md transition-all duration-300"
      href={link.url}
      target="_blank"
    >
      <Image
        src={link.icon}
        alt={link.website}
        width={16}
        height={16}
        className="mt-[2px]"
      />
      <p className="text-demo-smoke">{link.username}</p>
    </a>
  );
}
