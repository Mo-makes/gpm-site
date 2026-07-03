import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { conditions } from "@/lib/data/conditions";
import { procedures } from "@/lib/data/procedures";
import { providers } from "@/lib/data/providers";

type Entry = MetadataRoute.Sitemap[number];

// Everything is statically generated, so a single build-time timestamp is an
// honest `lastmod` for the whole tree. Regenerated on every deploy.
const lastModified = new Date();

const abs = (path: string) => `${SITE_URL}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  // Top-level pages, ranked by SEO importance for a local pain-management practice.
  const core: Entry[] = [
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1.0, images: [abs("/og-image.jpg")] },
    { url: abs("/contact"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: abs("/conditions"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: abs("/procedures"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: abs("/about"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: abs("/about/team"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: abs("/about/areas-we-serve"), lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: abs("/about/patient-resources"), lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: abs("/testimonials"), lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: abs("/about-us/patient-resources/new-patient-package"), lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: abs("/privacy-policy"), lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  const providerPages: Entry[] = providers.map((p) => ({
    url: abs(`/about/team/${p.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: p.isFounder ? 0.8 : 0.7,
    ...(p.imageSrc ? { images: [abs(p.imageSrc)] } : {}),
  }));

  const conditionPages: Entry[] = conditions.map((c) => ({
    url: abs(`/conditions/${c.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const procedurePages: Entry[] = procedures.map((p) => ({
    url: abs(`/procedures/${p.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...core, ...providerPages, ...conditionPages, ...procedurePages];
}
