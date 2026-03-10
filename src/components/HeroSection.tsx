import mauricioImg from "@/assets/mauricio-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Consultoría para Pymes
            </p>
            <h1 className="font-heading text-3xl leading-tight text-primary-foreground md:text-4xl lg:text-5xl animate-fade-in-up">
              Ayudo a dueños de pymes a ordenar su empresa, escalar su negocio y delegar tareas operativas.
            </h1>
            <p className="text-lg italic text-primary-foreground/70">
              "Ordenar la información para tomar la mejor decisión."
            </p>
            <a
              href="#contacto"
              className="mt-4 inline-block rounded-lg bg-accent px-8 py-3 font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Agendá una conversación
            </a>
          </div>
          <div className="w-56 flex-shrink-0 md:w-72 lg:w-80">
            <img
              src={mauricioImg}
              alt="Mauricio Somma - Consultor de negocios"
              className="rounded-2xl shadow-2xl"
              width={320}
              height={400}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
