import { useI18n } from "@/i18n/I18nProvider";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import impactImg from "@/assets/impact-graduate.jpg";

const Impact = () => {
  const { t } = useI18n();

  const stats = [
    { v: t("impact.s1.value"), l: t("impact.s1.label") },
    { v: t("impact.s2.value"), l: t("impact.s2.label") },
    { v: t("impact.s3.value"), l: t("impact.s3.label") },
    { v: t("impact.s4.value"), l: t("impact.s4.label") },
  ];

  return (
    <>
      <PageHeader eyebrow={t("impact.subtitle")} title={t("impact.title")} />

      {/* Stats */}
      <section className="py-16 md:py-24">
        <div className="container-prose">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-gradient-primary text-primary-foreground text-center shadow-elegant hover:-translate-y-1 transition-all duration-300"
              >
                <div className="font-display text-5xl md:text-6xl font-extrabold mb-3">{s.v}</div>
                <p className="text-sm text-primary-foreground/85 leading-relaxed">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-gradient-soft">
        <div className="container-prose">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant max-w-md mx-auto lg:mx-0">
              <img
                src={impactImg}
                alt="A confident female PSS graduate working in tech"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
                Proven Success — PNC Legacy
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary tracking-tight mb-5 leading-tight">
                {t("impact.story.title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t("impact.story.body")}</p>
              <Button asChild variant="donate" size="lg">
                <Link to="/get-involved">
                  <Heart className="h-5 w-5" />
                  {t("cta.donate")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Impact;
