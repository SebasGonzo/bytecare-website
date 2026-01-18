import { ShieldCheck, Monitor, Bug, AlertTriangle, Settings } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Supervisión continua con inteligencia artificial",
    description:
      "Sistema de IA que supervisa sus equipos 24 horas al día, 7 días a la semana, detectando anomalías y amenazas en tiempo real.",
  },
  {
    icon: ShieldCheck,
    title: "Protección activa contra virus, ransomware y spyware",
    description:
      "Defensa continua contra software malicioso. Bloqueo automático de amenazas conocidas y comportamientos sospechosos.",
  },
  {
    icon: AlertTriangle,
    title: "Detección temprana de fallas del sistema",
    description:
      "Identificación proactiva de problemas de hardware y software antes de que afecten la operatividad de su negocio.",
  },
  {
    icon: Bug,
    title: "Eliminación profesional de malware",
    description:
      "Servicio especializado de limpieza y recuperación de equipos infectados. Restauramos la seguridad de su sistema.",
  },
  {
    icon: Settings,
    title: "Mantenimiento preventivo automatizado",
    description:
      "Actualizaciones de seguridad, optimización de recursos y revisiones periódicas programadas de forma automática.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="border-t border-border bg-[#091826] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Servicios
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Protección y monitoreo continuo
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Servicios gestionados de ciberseguridad con supervisión inteligente 
            para mantener sus sistemas protegidos y operativos.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-lg border border-border bg-card p-8 transition-all duration-200 hover:border-primary/40 hover:bg-[#112a42]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-secondary">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
