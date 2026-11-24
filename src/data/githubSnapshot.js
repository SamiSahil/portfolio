// Snapshot of the public GitHub data, used as a resilient fallback when the
// unauthenticated GitHub API is rate limited. Update it when repos change.
export const githubSnapshot = {
  user: {
    login: "SamiSahil",
    public_repos: 17,
    followers: 0,
    following: 0,
    created_at: "2024-01-09T12:50:24Z",
  },
  topLanguage: "JavaScript",
  repos: [
    {
      name: "Password-Generator",
      description:
        "Responsive password generator with adjustable length, character options and one-click copy. Built with HTML, CSS and JavaScript.",
      language: "JavaScript",
      stargazers_count: 0,
      forks_count: 0,
      pushed_at: "2026-11-24T05:26:08Z",
      html_url: "https://github.com/SamiSahil/Password-Generator",
    },
    {
      name: "samiprofile",
      description:
        "Personal portfolio with an animated hero, typewriter intro and project showcase. Built with React and Framer Motion.",
      language: "JavaScript",
      stargazers_count: 0,
      forks_count: 0,
      pushed_at: "2025-09-27T06:34:50Z",
      html_url: "https://github.com/SamiSahil/samiprofile",
    },
    {
      name: "attendance",
      description:
        "Student attendance tracker with monthly reports for presence, absence and leave. Built with React and Vite.",
      language: "JavaScript",
      stargazers_count: 0,
      forks_count: 0,
      pushed_at: "2025-09-21T05:30:27Z",
      html_url: "https://github.com/SamiSahil/attendance",
    },
    {
      name: "edusysv1",
      description:
        "Full-stack school management system with role-based portals for students, teachers, accountants and staff. Built with Express, MongoDB and JWT.",
      language: "JavaScript",
      stargazers_count: 0,
      forks_count: 0,
      pushed_at: "2025-09-20T15:53:54Z",
      html_url: "https://github.com/SamiSahil/edusysv1",
    },
  ],
};
