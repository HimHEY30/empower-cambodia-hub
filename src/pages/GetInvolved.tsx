import { Link } from "react-router-dom";
import { Heart, Building2, Mail } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import PartnersGrid from "@/components/PartnersGrid";
import qrImg from "@/assets/khqr-placeholder.png";

const GetInvolved = () => {
  const { t } = useI18n();

  return (
    <>
      <PageHeader eyebrow={t("involved.subtitle")} title={t("involved.title")} />

      {/* Donate + Partner */}
      <section className="py-16 md:py-24">
        <div className="container-prose grid gap-8 lg:grid-cols-2">
          {/* Donate card */}
          <div className="rounded-3xl border-2 border-accent bg-card overflow-hidden shadow-elegant">
            <div className="bg-accent text-accent-foreground px-8 py-5 flex items-center gap-3">
              <Heart className="h-6 w-6" />
              <h2 className="font-display text-xl font-extrabold">{t("involved.donate.title")}</h2>
            </div>
            <div className="p-8">
              <p className="text-muted-foreground leading-relaxed mb-6">{t("involved.donate.body")}</p>
              <div className="bg-white p-6 rounded-2xl border border-border max-w-xs mx-auto shadow-soft">
                <img
                  src={qrImg}
                  alt="KHQR donation code (placeholder)"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground text-center mt-3 font-semibold">
                  {t("involved.donate.placeholder")}
                </p>
              </div>
              <div className="mt-6 p-4 rounded-xl bg-primary-soft text-center">
                <div className="text-xs uppercase tracking-wider text-primary/70 font-semibold mb-1">
                  {t("involved.donate.account")}
                </div>
                <div className="font-display font-bold text-primary">
                  Promoting Skill for Success Organisation
                </div>
              </div>
            </div>
          </div>

          {/* Partner card */}
          <div className="rounded-3xl border border-border bg-gradient-primary text-primary-foreground p-10 flex flex-col">
            <Building2 className="h-10 w-10 mb-5 text-accent" />
            <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-4">
              {t("involved.partner.title")}
            </h2>
            <p className="text-primary-foreground/85 leading-relaxed mb-8 flex-1">
              {t("involved.partner.body")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  <Mail className="h-5 w-5" />
                  {t("cta.contact")}
                </Link>
              </Button>
              <Button asChild variant="outlineLight" size="lg">
                <Link to="/programs">{t("cta.learn")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <PartnersGrid />
    </>
  );
};

export default GetInvolved;
