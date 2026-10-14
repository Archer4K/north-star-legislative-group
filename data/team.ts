export const team = [
  {
    slug: "colby-nixon",
    name: "Colby Nixon",
    title: "Executive Director",
    searchDescription: "Colby Nixon, founder and Executive Director of North Star Legislative Group, leads policy outreach and mentors advocates. Explore his work on SB 3670.",
    bio: "Colby Nixon founded North Star Legislative Group and developed the idea behind the Catch Heart Disease Early Act (SB 3670), leading outreach to support the bill. While in college, he continues to mentor North Star's other team members as they learn to draft policy and turn their ideas into action.",
  },
  {
    slug: "arjun-rana",
    name: "Arjun Rana",
    title: "President of Policy",
    searchDescription: "Arjun Rana, President of Policy at North Star Legislative Group, contributed to SB 3670 and authored the Senior AI Fraud Awareness Week resolution.",
    portrait: "/images/team/arjun-rana.png",
    bio: "Arjun Rana joined North Star Legislative Group in 10th grade, where he learned to draft policy. Through his work with North Star and his involvement in debate, he developed the skills that led to his contributions to the Catch Heart Disease Early Act (SB 3670) and his sole authorship of the Senior AI Fraud Awareness Week resolution.",
  },
  { slug: "saatvik-kailash", name: "Saatvik Kailash", title: "Chapter President", searchDescription: "Saatvik Kailash, Chapter President at North Star Legislative Group, contributes to SB 3670 and the Senior AI Fraud Awareness Week resolution." },
] as const;

export type TeamMember = (typeof team)[number];

export function getTeamMember(slug: string) {
  return team.find((person) => person.slug === slug);
}
