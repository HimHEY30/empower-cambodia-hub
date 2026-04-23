import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/I18nProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/pss-logo.png";

const Header = () => {
  const { t, lang, setLang, langs } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/team", label: t("nav.team") },
    { to: "/programs", label: t("nav.programs") },
    { to: "/impact", label: t("nav.impact") },
    { to: "/news", label: t("nav.news") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container-prose flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={logo} alt="PSS Cambodia logo" width={40} height={40} className="h-10 w-10 object-contain" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display font-extrabold text-primary text-base tracking-tight">PSS</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Cambodia</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary bg-primary-soft"
                    : "text-foreground/75 hover:text-primary hover:bg-primary-soft/60"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1.5 px-2.5">
                <Globe className="h-4 w-4" />
                <span className="text-xs font-semibold">{langs.find((l) => l.code === lang)?.native}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-32">
              {langs.map((l) => (
                <DropdownMenuItem
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={lang === l.code ? "font-semibold text-primary" : ""}
                >
                  <span className="mr-2 text-xs text-muted-foreground">{l.native}</span>
                  {l.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild variant="donate" size="sm" className="hidden sm:inline-flex">
            <Link to="/get-involved">
              <Heart className="h-4 w-4" />
              {t("nav.donate")}
            </Link>
          </Button>

          <button
            className="lg:hidden p-2 rounded-md text-foreground/80 hover:bg-secondary"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container-prose py-3 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-md text-sm font-medium ${
                    isActive ? "text-primary bg-primary-soft" : "text-foreground/80"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Button asChild variant="donate" size="sm" className="mt-2 sm:hidden">
              <Link to="/get-involved" onClick={() => setOpen(false)}>
                <Heart className="h-4 w-4" />
                {t("nav.donate")}
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
