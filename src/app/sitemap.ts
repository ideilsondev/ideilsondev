import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { demos } from "@/lib/demos";
export default function sitemap():MetadataRoute.Sitemap{return [{url:siteUrl.toString(),lastModified:new Date(),changeFrequency:"monthly",priority:1},...Object.keys(demos).map(slug=>({url:new URL(`/demos/${slug}`,siteUrl).toString(),lastModified:new Date(),changeFrequency:"monthly" as const,priority:.8}))]}
