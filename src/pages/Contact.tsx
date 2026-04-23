import { useState, FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({ title: t("contact.toast.title"), description: t("contact.toast.body") });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <PageHeader eyebrow={t("contact.subtitle")} title={t("contact.title")} />

      <section className="py-16 md:py-24">
        <div className="container-prose grid gap-12 lg:grid-cols-5">
          {/* Info */}
          <aside className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant">
              <h3 className="font-display text-xl font-bold mb-5">PSS Cambodia</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-0.5">Address</div>
                    <div className="text-primary-foreground/85">{t("contact.address")}</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-0.5">{t("contact.email.label")}</div>
                    <a href="mailto:contact@pss-cambodia.org" className="text-primary-foreground/85 hover:text-accent">
                      contact@pss-cambodia.org
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-0.5">{t("contact.phone.label")}</div>
                    <div className="text-primary-foreground/85">+855 (0) — — —</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-accent-soft border border-accent/20">
              <p className="text-sm text-foreground/80">
                Email hosted on Sabay infrastructure. Full domain integration coming soon.
              </p>
            </div>
          </aside>

          {/* Form */}
          <form onSubmit={onSubmit} className="lg:col-span-3 p-8 md:p-10 rounded-2xl bg-card border border-border shadow-soft space-y-5">
            <div>
              <Label htmlFor="name">{t("contact.name")}</Label>
              <Input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="email">{t("contact.email")}</Label>
              <Input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="message">{t("contact.message")}</Label>
              <Textarea
                id="message"
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1.5"
              />
            </div>
            <Button type="submit" variant="donate" size="lg" className="w-full sm:w-auto">
              <Send className="h-4 w-4" />
              {t("contact.send")}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
