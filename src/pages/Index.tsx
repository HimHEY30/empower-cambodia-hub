import { Link } from "react-router-dom";
import { ArrowRight, Heart, Sparkles, Home, UtensilsCrossed, HeartPulse, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/I18nProvider";
import PartnersGrid from "@/components/PartnersGrid";
import heroImg from "@/assets/hero-classroom.jpg";
import lifeImg from "@/assets/life-skills.jpg";

const Index = () => {
  const { t } = useI18n();

  const stats = [
    { v: t("home.context.s1.value"), l: t("home.context.s1.label"), s: t("home.context.s1.source") },
    { v: t("home.context.s2.value"), l: t("home.context.s2.label"), s: t("home.context.s2.source") },
    { v: t("home.context.s3.value"), l: t("home.context.s3.label"), s: t("home.context.s3.source") },
    { v: t("home.context.s4.value"), l: t("home.context.s4.label"), s: t("home.context.s4.source") },
  ];

  const supports = [
    { icon: Home, label: t("home.support.accommodation") },
    { icon: UtensilsCrossed, label: t("home.support.meals") },
    { icon: HeartPulse, label: t("home.support.health") },
    { icon: Laptop, label: t("home.support.laptop") },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Cambodian students collaborating in a high-tech classroom"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container-prose relative py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/95 text-xs font-semibold uppercase tracking-wider mb-6 animate-fade-in">
              <Sparkles className="h-3.5 w-3.5" />
              {t("home.hero.eyebrow")}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight animate-fade-in-up">
              {t("home.hero.title")}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed animate-fade-in-up">
              {t("home.hero.subtitle")}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Button asChild variant="donate" size="xl">
                <Link to="/get-involved">
                  <Heart className="h-5 w-5" />
                  {t("cta.donate")}
                </Link>
              </Button>
              <Button asChild variant="outlineLight" size="xl">
                <Link to="/about">
                  {t("cta.learn")}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 md:py-28 bg-gradient-soft">
        <div className="container-prose grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
              {t("home.mission.title")}
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight">
              Fighting poverty through digital education.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {t("home.mission.body")}
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={lifeImg}
                alt="Cambodian youth in life skills clubs"
                width={1600}
                height={1067}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground px-6 py-4 rounded-xl shadow-accent hidden sm:block">
              <div className="text-2xl font-display font-extrabold">20+</div>
              <div className="text-xs uppercase tracking-wider">years of impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* CAMBODIA CONTEXT — INFOGRAPHIC */}
      <section className="py-20 md:py-28">
        <div className="container-prose">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
              {t("home.context.title")}
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary tracking-tight">
              {t("home.context.subtitle")}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
              >
                <div className="font-display text-5xl font-extrabold gradient-text mb-3">{s.v}</div>
                <p className="text-sm text-foreground/85 leading-relaxed">{s.l}</p>
                <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  {s.s}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL SUPPORT */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white,transparent_60%)]" />
        <div className="container-prose relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
                {t("home.legacy.title")}
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight">
                {t("home.support.title")}
              </h2>
            </div>
            <p className="text-lg text-primary-foreground/85 leading-relaxed">
              {t("home.support.body")}
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {supports.map((s, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <s.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <div className="font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <PartnersGrid />

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 bg-gradient-soft">
        <div className="container-prose">
          <div className="rounded-3xl bg-gradient-primary text-primary-foreground p-10 md:p-16 text-center shadow-elegant">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
              {t("cta.donate")}
            </h2>
            <p className="mt-5 text-lg text-primary-foreground/85 max-w-xl mx-auto">
              Every donation funds tuition, meals, accommodation and laptops for a young Cambodian.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="donate" size="xl">
                <Link to="/get-involved">
                  <Heart className="h-5 w-5" />
                  {t("nav.donate")}
                </Link>
              </Button>
              <Button asChild variant="hero" size="xl">
                <Link to="/get-involved">{t("cta.partner")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
