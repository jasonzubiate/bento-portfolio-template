import { Metadata } from "next";

export function constructMetaData({
  title = "Jason Zubiate | Creative Developer & Designer",
  description = "I am a creative developer with 2 years of experience building web applications with React and Next.js.",
  image = "/img/OGImage.png",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@jasonzubiate",
    },
    icons,
    metadataBase: new URL("https://jasonzubiate.com"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
