const publicUrl = import.meta.env.BASE_URL;

// Only home-page sections count: call pages reuse ids like "publicacao".
export function navigateToSection(targetId: string) {
  const target = document.querySelector(`.page-content #${targetId}`);
  if (!target) {
    window.location.assign(`${publicUrl}#${targetId}`);
    return;
  }

  window.history.pushState(null, "", `#${targetId}`);
  target.scrollIntoView({ behavior: "smooth" });
}
