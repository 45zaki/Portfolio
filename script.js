const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // change icon
  themeToggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// SKILLS DATA
const skills = {
  languages: ["Java", "JavaScript", "C#", "PHP", "MySQL"],
  web: ["HTML", "CSS", "CMS"],
  tools: [
    "GetHub",
    "Unity",
    "Google Colab",
    "Google Workspace",
    "Microsoft Office",
    "Slack",
    "Photoshop"
  ]
};

// PROJECTS DATA
const projects = [
  {
    title: "Website Practice",
    description: "Personal portfolio built with HTML, CSS, and JavaScript, with another project linked below.",
    link: "https://www.shecodes.io/cohorts/2092/projects/2371381?_gl=1*wktegm*_gcl_au*MjAxOTgzOTcxNy4xNzY2ODAxMDY0LjE0MjgyNzc4MTUuMTc2ODAxMzkxMS4xNzY4MDE0MTk2"
  },
  {
    title: "Database Practice",
    description: "Hands-on exercises for designing databases, writing SQL queries, and managing data efficiently.",
    link: "#"
  },
  {
    title: "Game Practice",
    description: "Small game projects focusing on game logic, mechanics, and interactive programming concepts.",
    link: "#"
  },
  {
    title: "Generative AI Practice",
    description: "Projects exploring generative models, prompt engineering, and AI-powered content creation.",
    link: "#"
  }
];

// RENDER SKILLS
function renderSkills(id, items) {
  const container = document.getElementById(id);
  items.forEach(item => {
    const span = document.createElement("span");
    span.textContent = item;
    container.appendChild(span);
  });
}

document.addEventListener("DOMContentLoaded", () => {
renderSkills("languages", skills.languages);
renderSkills("web", skills.web);
renderSkills("tools", skills.tools);
});

// RENDER PROJECTS
const projectContainer = document.getElementById("projects-list");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}">View Project</a>
  `;
  projectContainer.appendChild(card);
});

// SMOOTH SCROLL
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});