import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// AI / LLM crawlers we explicitly welcome. Global Pain Management wants to be
// read and cited by AI search (see /llms.txt), so we opt these agents in by
// name rather than relying only on the wildcard rule.
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "cohere-ai",
  "CCBot",
  "Meta-ExternalAgent",
];

// Internal / non-indexable surfaces: API routes and the patient check-in kiosk.
const DISALLOW = ["/api/", "/check-in", "/check-in/complete"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      { userAgent: AI_CRAWLERS, allow: "/", disallow: DISALLOW },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
