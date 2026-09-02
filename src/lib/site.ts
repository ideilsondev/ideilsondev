const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ideilsondev.vercel.app";
export const siteUrl = new URL(configuredUrl);
export const siteName = "Ideilson | Engenharia de Software";
