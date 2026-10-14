export const projects = [
  {
    id: "sb-3670",
    title: "Catch Heart Disease Early Act",
    href: "/work/sb-3670",
    category: "Illinois · Senate Bill 3670",
    summary: "A proposal to expand access to no-cost heart disease screenings for Illinois adults.",
    author: "colby-nixon",
    contributorLabel: "Contributors / drafters",
    contributors: ["saatvik-kailash", "arjun-rana"],
  },
  {
    id: "senior-ai-awareness-week",
    title: "Senior AI Fraud Awareness Week",
    href: "/work/senior-ai-awareness-week",
    category: "Illinois · Drafted resolution · 2027",
    summary: "A drafted resolution encouraging local organizations to help seniors recognize AI-enabled fraud.",
    author: "arjun-rana",
    contributorLabel: "Contributors",
    contributors: ["colby-nixon", "saatvik-kailash"],
  },
];

export type Project = (typeof projects)[number];

export function getProject(id: string) {
  const project = projects.find((item) => item.id === id);
  if (!project) throw new Error(`Unknown project: ${id}`);
  return project;
}
