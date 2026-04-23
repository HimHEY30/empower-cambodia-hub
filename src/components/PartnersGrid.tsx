import { useI18n } from "@/i18n/I18nProvider";

const PARTNERS = [
  "Sourceamax Asia",
  "Proseth Solutions",
  "J Trust Royal Bank",
  "Bandos Komar Organization",
  "AMK Bank",
  "NGO Forum",
  "HRINC",
  "Biz Solution",
  "UDAYA Technology",
  "Amret",
  "Western University",
  "Puthisastra",
  "Asia Euro University",
];

const PartnersGrid = () => {
  const { t } = useI18n();
  return (
    <section className="py-16 md:py-20">
      <div className="container-prose">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
            {t("involved.partners.title")}
          </h2>
          <p className="mt-3 text-muted-foreground">{t("involved.partners.subtitle")}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {PARTNERS.map((p) => (
            <div
              key={p}
              className="flex items-center justify-center text-center px-4 py-6 rounded-lg border border-border bg-card hover:border-primary/40 hover:shadow-soft transition-all duration-300 text-sm font-medium text-foreground/80"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersGrid;
