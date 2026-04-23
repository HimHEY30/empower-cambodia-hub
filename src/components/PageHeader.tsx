import { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const PageHeader = ({ eyebrow, title, subtitle, children }: PageHeaderProps) => (
  <section className="relative overflow-hidden bg-gradient-soft border-b border-border/60">
    <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_50%),radial-gradient(circle_at_70%_80%,hsl(var(--accent))_0%,transparent_50%)]" />
    <div className="container-prose relative py-16 md:py-24">
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4 animate-fade-in">
          {eyebrow}
        </p>
      )}
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight max-w-4xl animate-fade-in-up">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in-up">
          {subtitle}
        </p>
      )}
      {children && <div className="mt-8">{children}</div>}
    </div>
  </section>
);

export default PageHeader;
