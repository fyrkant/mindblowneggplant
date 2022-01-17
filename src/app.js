const makeFaviconString = (middle) => {
  return `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${middle}</text></svg>`;
};
const link = document.querySelector('link[rel="icon"]');

const toggleIcon = () => {
  link.setAttribute(
    "href",
    makeFaviconString(link.getAttribute("href").includes("🤯") ? "🍆" : "🤯")
  );
};

const interval = setInterval(() => {
  toggleIcon();
}, 2000);
