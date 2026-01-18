import { Shield, Eye, Zap } from "lucide-react";

export function WhatIsByteCare() {
  return (
    <section id="que-es" className="border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Nuestra empresa
            </span>
            <h2 className="mb-6 text-balance text-3xl font-bold text-foreground md:text-4xl">
              ¿Qué es ByteCare?
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              ByteCare es un proveedor de servicios gestionados de ciberseguridad. 
              Ofrecemos protección, monitoreo y soporte técnico especializado para 
              empresas y usuarios domésticos que requieren una solución confiable 
              para sus equipos.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Nuestro equipo técnico supervisa tu infraestructura de forma continua, 
              identifica vulnerabilidades y responde ante incidentes de seguridad 
              para mantener la operatividad de tu negocio.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Protección integral
              </h3>
              <p className="text-sm text-muted-foreground">
                Seguridad contra virus, malware, ransomware y otras amenazas conocidas
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Supervisión remota
              </h3>
              <p className="text-sm text-muted-foreground">
                Supervisión de equipos 24 horas al día, 7 días a la semana
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Atención oportuna
              </h3>
              <p className="text-sm text-muted-foreground">
                Respuesta técnica ante incidentes de seguridad en tu sistema
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-green-500" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Supervisión activa</div>
                  <div className="text-sm text-muted-foreground">
                    Agentes de IA operando continuamente
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
