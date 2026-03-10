import { Settings, TrendingUp, ClipboardList, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Orden y estructura",
    desc: "Diseño de procesos claros, definición de roles y organización interna para que tu empresa funcione sin depender solo de vos.",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidad",
    desc: "Estrategias para crecer de forma sostenible, sin que el caos crezca al mismo ritmo que la facturación.",
  },
  {
    icon: ClipboardList,
    title: "Delegación efectiva",
    desc: "Te ayudo a soltar lo operativo con confianza, construyendo equipos autónomos con objetivos claros.",
  },
  {
    icon: Lightbulb,
    title: "Toma de decisiones",
    desc: "Implementación de tableros e indicadores para que tomes decisiones basadas en datos, no en intuición.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <h2 className="mb-4 font-heading text-3xl text-foreground md:text-4xl">
            ¿Cómo puedo ayudarte?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Trabajo codo a codo con dueños de pymes para transformar el desorden en un sistema que funcione.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl border border-border p-8 transition-colors hover:border-accent"
            >
              <s.icon className="mb-4 h-8 w-8 text-accent transition-transform group-hover:scale-110" strokeWidth={1.5} />
              <h3 className="mb-2 font-heading text-xl text-foreground">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
