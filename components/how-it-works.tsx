import { Download, MonitorUp, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "1",
    icon: Download,
    title: "Descarga el agente",
    description:
      "Obtén el software de ByteCare desde nuestra página. Es un archivo ligero compatible con Windows.",
  },
  {
    number: "2",
    icon: MonitorUp,
    title: "Instala en tu equipo",
    description:
      "Ejecuta el instalador y sigue las instrucciones. La instalación toma aproximadamente 2 minutos.",
  },
  {
    number: "3",
    icon: ShieldCheck,
    title: "Recibe protección y soporte",
    description:
      "El agente se conecta a nuestro centro de monitoreo. Nuestro equipo técnico supervisa tu sistema.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Instalación
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Cómo comenzar con ByteCare
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            La configuración inicial es sencilla. En tres pasos tu equipo 
            estará conectado a nuestro servicio de monitoreo.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border lg:block" />

          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step card */}
                <div className="relative rounded-xl border border-border bg-card p-8 text-center">
                  {/* Number badge */}
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-secondary">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                    <ArrowRight className="h-8 w-8 text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button size="lg" className="gap-2">
            <Download className="h-4 w-4" />
            Descargar agente
          </Button>
        </div>
      </div>
    </section>
  );
}
