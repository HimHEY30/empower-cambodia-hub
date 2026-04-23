import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import logo from "@/assets/pss-logo.png";

const Footer = () => {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container-prose py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="PSS Cambodia" width={44} height={44} className="h-11 w-11 object-contain bg-white rounded-md p-1" />
              <div className="font-display font-extrabold text-lg">PSS Cambodia</div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed mb-3">
              {t("footer.tagline")}
            </p>
            <p className="text-xs text-primary-foreground/60">{t("footer.registered")}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/70">
              {t("footer.explore")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-accent transition-colors">{t("nav.about")}</Link></li>
              <li><Link to="/team" className="hover:text-accent transition-colors">{t("nav.team")}</Link></li>
              <li><Link to="/programs" className="hover:text-accent transition-colors">{t("nav.programs")}</Link></li>
              <li><Link to="/impact" className="hover:text-accent transition-colors">{t("nav.impact")}</Link></li>
              <li><Link to="/news" className="hover:text-accent transition-colors">{t("nav.news")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/70">
              {t("footer.support")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/get-involved" className="hover:text-accent transition-colors">{t("nav.donate")}</Link></li>
              <li><Link to="/get-involved" className="hover:text-accent transition-colors">{t("cta.partner")}</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/70">
              {t("nav.contact")}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>{t("contact.address")}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <a href="mailto:contact@pss-cambodia.org" className="hover:text-accent transition-colors">
                  contact@pss-cambodia.org
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>+855 (0) — — —</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/60">
          <p>© {year} Promoting Skills for Success Organisation. {t("footer.rights")}</p>
          <div className="flex gap-5">
            <span className="hover:text-accent transition-colors cursor-pointer">{t("footer.privacy")}</span>
            <span className="hover:text-accent transition-colors cursor-pointer">{t("footer.terms")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
