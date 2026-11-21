export type ProjectCategory = "professional" | "game" | "misc";

export interface Project {
  slug: string;
  title: string;
  type: string;
  tech: string;
  years: string;
  category: ProjectCategory;
  visible: boolean;
  markdownFile: string;
}

export const PROJECTS: readonly Project[] = [
  // Professional Experience
  {
    slug: "clay",
    title: "Clay Software Corporation",
    type: "Clay Software Corporation",
    tech: "Unreal Engine Software Developer",
    years: "2024 - Present",
    category: "professional",
    visible: true,
    markdownFile: "clay.md",
  },
  {
    slug: "dmk",
    title: "Disney Magic Kingdoms",
    type: "Gameloft Toronto",
    tech: "Programmer (C++)",
    years: "2019 - 2024",
    category: "professional",
    visible: true,
    markdownFile: "dmk.md",
  },

  // Game Projects
  {
    slug: "gadget",
    title: "Gadget Engine",
    type: "Personal Game Engine",
    tech: "C++",
    years: "2022 - Present",
    category: "game",
    visible: true,
    markdownFile: "gadget.md",
  },
  {
    slug: "whbg",
    title: "Weird Hamster Ball Game",
    type: "Game Jam",
    tech: "C++",
    years: "2024",
    category: "game",
    visible: true,
    markdownFile: "whbg.md",
  },
  {
    slug: "secret-identity",
    title: "Secret Identity",
    type: "Personal Project",
    tech: "UE5 / C++",
    years: "2024",
    category: "game",
    visible: true,
    markdownFile: "secret-identity.md",
  },
  {
    slug: "roof-toppers",
    title: "Roof Toppers / PizzaBox Game Engine",
    type: "School Project",
    tech: "C++",
    years: "2017 - 2019",
    category: "game",
    visible: true,
    markdownFile: "roof-toppers.md",
  },
  {
    slug: "splinter-gear",
    title: "Splinter Gear",
    type: "School Project",
    tech: "Unity / C#",
    years: "2017 - 2018",
    category: "game",
    visible: true,
    markdownFile: "splinter-gear.md",
  },
  {
    slug: "java-chess",
    title: "Chess (Java)",
    type: "School Project",
    tech: "Java",
    years: "2017 - 2018",
    category: "game",
    visible: false,
    markdownFile: "java-chess.md",
  },
  {
    slug: "batman",
    title: "Batman NES Remake",
    type: "School Project",
    tech: "Unity / C#",
    years: "2017",
    category: "game",
    visible: true,
    markdownFile: "batman.md",
  },
  {
    slug: "peggle",
    title: "Peggle Clone",
    type: "School Project",
    tech: "C++",
    years: "2017",
    category: "game",
    visible: false,
    markdownFile: "peggle.md",
  },
  {
    slug: "js-fighter",
    title: "Street Fighter Clone",
    type: "School Project",
    tech: "JavaScript",
    years: "2017",
    category: "game",
    visible: false,
    markdownFile: "js-fighter.md",
  },
  {
    slug: "battleship",
    title: "Battleship Text Game",
    type: "School Project",
    tech: "C#",
    years: "2016",
    category: "game",
    visible: false,
    markdownFile: "battleship.md",
  },

  // Other Projects
  {
    slug: "portfolio",
    title: "Portfolio",
    type: "Web Front-End",
    tech: "React / TypeScript",
    years: "2025",
    category: "misc",
    visible: true,
    markdownFile: "portfolio.md",
  },
  {
    slug: "route-tracker",
    title: "Arkham Speedrun Route Tracker",
    type: "Desktop Application",
    tech: "C#",
    years: "2020 - Present",
    category: "misc",
    visible: true,
    markdownFile: "route-tracker.md",
  },
  {
    slug: "speed-archive",
    title: "SpeedArchive",
    type: "Console Utility",
    tech: "C#",
    years: "2020 - 2021",
    category: "misc",
    visible: true,
    markdownFile: "speed-archive.md",
  },
  {
    slug: "batbot",
    title: "Batbot",
    type: "Discord Bot",
    tech: "C#",
    years: "2019 - 2022",
    category: "misc",
    visible: true,
    markdownFile: "batbot.md",
  },
];

export function getVisibleProjects(category?: ProjectCategory): Project[] {
  return PROJECTS.filter(
    (project) =>
      project.visible && (category === undefined || project.category === category)
  );
}

export function getProjectRecord(
  category?: ProjectCategory,
  includeHidden = false
): Record<string, Project> {
  const filtered = PROJECTS.filter(
    (project) =>
      (includeHidden || project.visible) &&
      (category === undefined || project.category === category)
  );
  return Object.fromEntries(filtered.map((project) => [project.slug, project]));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((project) => project.slug);
}
