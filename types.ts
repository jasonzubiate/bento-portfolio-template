type ExternalLink = {
  type: string;
  name: string;
  description: string;
  url: string;
};

type WidgetContainerProps = {
  icon: string;
  title: string;
  description: string;
  techStack: string[];
  img: string | null;
  url: string;
  width: "half" | "full";
};

type SocialLink = {
  website: string;
  username: string;
  icon: string;
  url: string;
  size: "small" | "large";
};

type Product = {
  title: string;
  description: string;
  url: string;
}