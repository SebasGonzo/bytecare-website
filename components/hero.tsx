import { Button } from "@/components/ui/button";
import { Shield, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      {/* Subtle background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e2238] to-[#0b1c2d]" />
        <div className="absolute left-1/2 top-1/3 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center lg:py-32">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2">
          <Shield className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground/90">
            Supervisión continua con inteligencia artificial
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="mb-6 max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          ByteCare – Ciberseguridad y Monitoreo Inteligente
        </h1>

        {/* Subtitle */}
        <p className="mb-10 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          Supervisión continua 24 horas al día, 7 días a la semana mediante agentes 
          de inteligencia artificial para prevenir ataques, fallas y pérdida de datos.
        </p>

        {/* CTA Button */}
        <Button size="lg" className="gap-2">
          <Download className="h-4 w-4" />
          Descargar Agente ByteCare
        </Button>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-sm">Supervisión continua con IA</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-sm">Atención en español</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-sm">Planes profesionales personalizados</span>
          </div>
        </div>
      </div>
    </section>
  );
}
