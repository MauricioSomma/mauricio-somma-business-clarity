import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="section-padding bg-primary">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="mb-4 font-heading text-3xl text-primary-foreground md:text-4xl">
          ¿Listo para ordenar tu empresa?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-primary-foreground/70">
          Agendá una conversación sin compromiso. Vamos a analizar juntos dónde está tu empresa hoy y hacia dónde puede ir.
        </p>
        <a
          href="mailto:mauricio.somma@gmail.com"
          className="inline-flex items-center gap-3 rounded-lg bg-accent px-10 py-4 text-lg font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          <Mail className="h-5 w-5" />
          Escribime
        </a>
        <p className="mt-6 text-sm text-primary-foreground/50">
          Contacto: mauricio.somma@gmail.com
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
