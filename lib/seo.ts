import { siteConfig } from "@/lib/constants";
import { Metadata } from "next";

interface DefaultMetadataOpts {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  url = siteConfig.url,
}: DefaultMetadataOpts = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: [
      "Sainik School coaching Nagpur",
      "Army coaching academy Nagpur",
      "Defence academy in Maharashtra",
      "NDA Coaching",
      "Police Bharti Nagpur"
    ],
    authors: [
      {
        name: siteConfig.name,
        url: siteConfig.url,
      },
    ],
    creator: siteConfig.name,
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@commandoacademy",
    },
    metadataBase: new URL(siteConfig.url),
  };
}
