import { CheckCircle2, Users, Clock, Award, HeadphonesIcon, Lock } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Personal capacitado",
    description: "Técnicos con formación en ciberseguridad y soporte de sistemas.",
  },
  {
    icon: Clock,
    title: "Atención continua",
    description: "Soporte técnico disponible para resolver incidentes cuando los necesites.",
  },
  {
    icon: Award,
    title: "Herramientas confiables",
    description: "Utilizamos software de seguridad probado y reconocido en la industria.",
  },
  {
    icon: HeadphonesIcon,
    title: "Atención en español",
    description: "Comunicación directa y clara con nuestro equipo de soporte.",
  },
  {
    icon: Lock,
    title: "Confidencialidad",
    description: "Tratamos tu información con responsabilidad y bajo acuerdos de privacidad.",
  },
  {
    icon: CheckCircle2,
    title: "Servicio profesional",
    description: "Planes de servicio profesional adaptados a las necesidades de cada cliente.",
  },
];

export function WhyChoose() {
  return (
    <section id="por-que" className="border-t border-border bg-[#091826] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Sobre nosotros
            </span>
            <h2 className="mb-6 text-balance text-3xl font-bold text-foreground md:text-4xl">
              ¿Por qué trabajar con ByteCare?
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Ofrecemos un servicio técnico responsable enfocado en la prevención 
              de incidentes y el mantenimiento de tus equipos. Trabajamos de forma 
              transparente y con compromiso hacia nuestros clientes.
            </p>

            {/* Technology statement */}
            <div className="rounded-lg border border-border bg-card p-6">
              <p className="text-base font-medium text-foreground">
                Supervisión continua 24 horas al día, 7 días a la semana mediante agentes de inteligencia artificial
              </p>
            </div>
          </div>

          {/* Reasons Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <reason.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
