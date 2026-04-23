import { Code2, ServerCog, Users, ClipboardCheck, Home as HomeIcon, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "@/i18n/I18nProvider";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";

const Programs = () => {
  const { t } = useI18n();

  const tracks = [
    { icon: Code2, title: t("programs.web.title"), body: t("programs.web.body") },
    { icon: ServerCog, title: t("programs.sys.title"), body: t("programs.sys.body") },
  ];

  const steps = [
    t("programs.selection.step1"),
    t("programs.selection.step2"),
    t("programs.selection.step3"),
    t("programs.selection.step4"),
  ];

  return (
    <>
      <PageHeader eyebrow={t("programs.subtitle")} title={t("programs.title")} />

      {/* IT Program */}
      <section className="py-16 md:py-24">
        <div className="container-prose">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-4 tracking-tight">
              {t("programs.it.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("programs.it.body")}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {tracks.map((tr, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant hover:-translate-y-1 transition-all duration-300"
              >
                <tr.icon className="h-10 w-10 mb-5 text-accent" />
                <h3 className="font-display text-2xl font-bold mb-2">{tr.title}</h3>
                <p className="text-primary-foreground/85">{tr.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection */}
      <section className="py-16 md:py-24 bg-gradient-soft">
        <div className="container-prose">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">January – October</p>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-5 tracking-tight">
                {t("programs.selection.title")}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {t("programs.selection.body")}
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-soft text-accent font-semibold text-sm">
                <Users className="h-4 w-4" />
                Target: 75–100 students · 50%+ female
              </div>
            </div>
            <ol className="space-y-3">
              {steps.map((s, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-extrabold">
                    {i + 1}
                  </div>
                  <div className="pt-1.5 font-medium text-foreground/85">{s}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-16 md:py-24">
        <div className="container-prose">
          <div className="rounded-3xl p-10 md:p-16 bg-card border border-border shadow-soft text-center">
            <ClipboardCheck className="h-12 w-12 text-accent mx-auto mb-5" />
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-4 tracking-tight max-w-2xl mx-auto">
              {t("programs.support.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              {t("programs.support.body")}
            </p>
            <Button asChild variant="donate" size="lg">
              <Link to="/get-involved">{t("cta.donate")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
