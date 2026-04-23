import { useI18n } from "@/i18n/I18nProvider";
import PageHeader from "@/components/PageHeader";

interface Person {
  name: string;
  role: string;
}

const Team = () => {
  const { t } = useI18n();

  const board: Person[] = [
    { name: "Mr. Phou Sophorn", role: t("team.role.chairman") },
    { name: "Mr. Oun Suosdey", role: t("team.role.member") },
    { name: "Mrs. Va Vannakserreyraksmey", role: t("team.role.member") },
    { name: "Mrs. Heang Oumoy", role: t("team.role.member") },
    { name: "Mr. Thun Chantha", role: t("team.role.member") },
  ];

  const exec: Person[] = [
    { name: "Mr. Hang Hybunna", role: t("team.role.director") },
    { name: "Mrs. Sok Sreysros", role: t("team.role.admin") },
    { name: "Ms. Leng Sreynich", role: t("team.role.external") },
    { name: "Ms. Hok Lihuy", role: t("team.role.training") },
    { name: "Mr. Seang Thaina", role: t("team.role.selection") },
    { name: "Mr. Hul Sim", role: t("team.role.education") },
  ];

  const initials = (name: string) =>
    name
      .replace(/^(Mr\.|Mrs\.|Ms\.)\s*/, "")
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("");

  const Card = ({ p, accent }: { p: Person; accent?: boolean }) => (
    <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-elegant transition-all duration-300 text-center">
      <div
        className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center font-display text-2xl font-extrabold ${
          accent ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
        }`}
      >
        {initials(p.name)}
      </div>
      <div className="font-display font-bold text-primary">{p.name}</div>
      <div className="text-sm text-muted-foreground mt-1">{p.role}</div>
    </div>
  );

  return (
    <>
      <PageHeader eyebrow={t("team.subtitle")} title={t("team.title")} />

      <section className="py-16 md:py-24">
        <div className="container-prose">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-primary mb-2">
            {t("team.board.title")}
          </h2>
          <div className="h-1 w-12 bg-accent rounded-full mb-10" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {board.map((p) => (
              <Card key={p.name} p={p} accent />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-prose">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-primary mb-2">
            {t("team.exec.title")}
          </h2>
          <div className="h-1 w-12 bg-accent rounded-full mb-10" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {exec.map((p) => (
              <Card key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
