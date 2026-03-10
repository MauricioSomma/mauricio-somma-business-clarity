import { AlertTriangle, Clock, Users, BarChart3 } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Decisiones a ciegas",
    desc: "Sin información clara, cada decisión es un riesgo innecesario.",
  },
  {
    icon: Clock,
    title: "Todo depende de vos",
    desc: "Si no estás, la empresa se frena. No podés delegar ni soltar.",
  },
  {
    icon: Users,
    title: "Equipo desorganizado",
    desc: "Cada uno hace lo que puede, sin procesos ni roles definidos.",
  },
  {
    icon: BarChart3,
    title: "Crecimiento desordenado",
    desc: "Facturás más, pero los problemas crecen al mismo ritmo.",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="mb-4 font-heading text-3xl text-foreground md:text-4xl">
          ¿Te sentís identificado?
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-muted-foreground">
          La mayoría de las pymes en crecimiento enfrentan estos problemas. No es falta de esfuerzo, es falta de estructura.
        </p>
        <div className="grid gap-8 sm:grid-cols-2">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-xl bg-background p-8 text-left shadow-sm transition-shadow hover:shadow-md"
            >
              <p.icon className="mb-4 h-8 w-8 text-accent" strokeWidth={1.5} />
              <h3 className="mb-2 font-heading text-xl text-foreground">{p.title}</h3>
              <p className="text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
