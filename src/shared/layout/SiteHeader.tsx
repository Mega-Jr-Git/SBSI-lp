import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
      <div className="site-header__inner">
        <div className="site-brand" aria-hidden="true" />
        <nav aria-label="Navegação principal" className="site-nav" />
      </div>
    </header>
  );
}
