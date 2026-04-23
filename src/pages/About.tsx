import { Eye, Target, Handshake, Shield, Users, Heart } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import PageHeader from "@/components/PageHeader";

const About = () => {
  const { t } = useI18n();

  const values = [
    { icon: Shield, title: t("about.values.trust"), body: t("about.values.trust.body") },
    { icon: Target, title: t("about.values.responsibility"), body: t("about.values.responsibility.body") },
    { icon: Handshake, title: t("about.values.solidarity"), body: t("about.values.solidarity.body") },
    { icon: Heart, title: t("about.values.respect"), body: t("about.values.respect.body") },
  ];

  const timeline = [
    { year: "2005", body: t("about.timeline.2005") },
    { year: "2009–2014", body: t("about.timeline.2009") },
    { year: "2015", body: t("about.timeline.2015") },
    { year: "2019–2025", body: t("about.timeline.2019") },
    { year: "2025", body: t("about.timeline.2025") },
  ];

  return (
    <>
      <PageHeader eyebrow={t("about.subtitle")} title={t("about.title")} />

      {/* Vision & Mission */}
      <section className="py-16 md:py-24">
        <div className="container-prose grid gap-8 md:grid-cols-2">
          <div className="p-8 md:p-10 rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant">
            <Eye className="h-10 w-10 mb-5 text-accent" />
            <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-4">{t("about.vision.title")}</h2>
            <p className="text-primary-foreground/90 text-lg leading-relaxed">{t("about.vision.body")}</p>
          </div>
          <div className="p-8 md:p-10 rounded-2xl bg-card border border-border shadow-soft">
            <Target className="h-10 w-10 mb-5 text-accent" />
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-primary mb-4">
              {t("about.mission.title")}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{t("about.mission.body")}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-gradient-soft">
        <div className="container-prose">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">Trust · Responsibility · Solidarity · Respect</p>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary tracking-tight">
              {t("about.values.title")}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-soft flex items-center justify-center mb-5">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="container-prose">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
              {t("about.timeline.subtitle")}
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary tracking-tight">
              {t("about.timeline.title")}
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-[7px] md:left-1/2 top-2 bottom-2 w-0.5 bg-border md:-translate-x-px" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-12 md:items-center ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className={`absolute left-0 md:left-1/2 top-2 w-4 h-4 rounded-full bg-accent border-4 border-background -translate-x-[7px] md:-translate-x-2 z-10 shadow-accent`} />
                  <div className={`md:text-right ${i % 2 === 1 ? "md:text-left" : ""}`}>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold tracking-wide">
                      {item.year}
                    </span>
                  </div>
                  <div className={`mt-2 md:mt-0 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                    <p className="text-foreground/85 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
