import { Calendar, ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import PageHeader from "@/components/PageHeader";

interface Story {
  date: string;
  category: string;
  titleEn: string;
  titleKm: string;
  titleFr: string;
  excerptEn: string;
  excerptKm: string;
  excerptFr: string;
}

const STORIES: Story[] = [
  {
    date: "2025-03-08",
    category: "Women in Tech",
    titleEn: "Celebrating International Women's Day at PSS",
    titleKm: "ប្រារព្ធទិវានារីអន្តរជាតិនៅ PSS",
    titleFr: "Célébrer la Journée internationale des femmes à PSS",
    excerptEn: "Our female students share their journey into IT and the doors education has opened for them.",
    excerptKm: "សិស្សស្ត្រីរបស់យើងចែករំលែកដំណើររបស់ពួកគេចូលក្នុងវិស័យ IT។",
    excerptFr: "Nos étudiantes partagent leur parcours dans l'IT et les portes que l'éducation leur a ouvertes.",
  },
  {
    date: "2024-12-15",
    category: "Graduation",
    titleEn: "85 New Graduates Enter Cambodia's IT Workforce",
    titleKm: "និស្សិតបញ្ចប់ការសិក្សា ៨៥ នាក់ចូលកម្លាំងពលកម្ម IT",
    titleFr: "85 nouveaux diplômés rejoignent la main-d'œuvre IT du Cambodge",
    excerptEn: "Our largest cohort yet celebrates two years of dedication, code and growth.",
    excerptKm: "ជំនាន់ដ៏ធំបំផុតរបស់យើងប្រារព្ធពិធីបញ្ចប់ការសិក្សា។",
    excerptFr: "Notre plus grande promotion célèbre deux années de dévouement et de croissance.",
  },
  {
    date: "2024-10-02",
    category: "Selection",
    titleEn: "Selection Trip 2024: Across 12 Provinces",
    titleKm: "ដំណើរជ្រើសរើស ២០២៤៖ ឆ្លងកាត់ ១២ ខេត្ត",
    titleFr: "Tournée de sélection 2024 : 12 provinces",
    excerptEn: "Our team travelled across rural Cambodia to find the next generation of tech talent.",
    excerptKm: "ក្រុមរបស់យើងបានធ្វើដំណើរនៅទូទាំងជនបទកម្ពុជា។",
    excerptFr: "Notre équipe a parcouru le Cambodge rural pour trouver la prochaine génération de talents.",
  },
];

const News = () => {
  const { t, lang } = useI18n();

  const pick = (s: Story, key: "title" | "excerpt") => {
    const k = `${key}${lang.charAt(0).toUpperCase() + lang.slice(1)}` as keyof Story;
    return s[k] as string;
  };

  return (
    <>
      <PageHeader eyebrow={t("news.subtitle")} title={t("news.title")} />

      <section className="py-16 md:py-24">
        <div className="container-prose">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {STORIES.map((s, i) => (
              <article
                key={i}
                className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/40 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[16/10] bg-gradient-primary relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_30%,white,transparent_60%)]" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider">
                    {s.category}
                  </div>
                  <div className="absolute bottom-4 right-4 font-display text-7xl font-extrabold text-white/20">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(s.date).toLocaleDateString(lang === "fr" ? "fr-FR" : lang === "km" ? "km-KH" : "en-GB", {
                      year: "numeric", month: "long", day: "numeric"
                    })}
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary mb-3 leading-snug group-hover:text-accent transition-colors">
                    {pick(s, "title")}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{pick(s, "excerpt")}</p>
                  <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    {t("news.read")}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
