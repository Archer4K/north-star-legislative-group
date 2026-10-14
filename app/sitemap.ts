import type { MetadataRoute } from "next";
import { team } from "@/data/team";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/work", "/research", "/team", "/opportunities", "/contact", ...projects.map((project) => project.href), ...team.map((person) => `/team/${person.slug}`)];
  return paths.map((path) => ({ url: `https://northstarlegislative.org${path}` }));
}
