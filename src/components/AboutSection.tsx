const AboutSection = () => {
  return (
    <section id="sobre-mi" className="section-padding bg-secondary">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="mb-6 font-heading text-3xl text-foreground md:text-4xl">
            Sobre Mauricio Somma
          </h2>
          <div className="mx-auto max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Con más de <strong className="text-foreground">20 años de experiencia</strong> en liderazgo y gestión empresarial, acompaño a dueños de pymes que quieren dejar de apagar incendios y empezar a dirigir su empresa con claridad.
            </p>
            <p>
              Mi enfoque es práctico y directo: no se trata de teoría, sino de implementar soluciones reales que se adapten a tu realidad. Trabajo junto a vos para que cada cambio sea sostenible y medible.
            </p>
            <p>
              Creo que una empresa ordenada no solo es más rentable, sino que le devuelve libertad a quien la fundó.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
