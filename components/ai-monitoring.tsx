import { Brain, Activity, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Operación ininterrumpida",
    description: "Supervisión constante sin pausas ni interrupciones.",
  },
  {
    icon: Activity,
    title: "Detección en tiempo real",
    description: "Análisis continuo del comportamiento del sistema.",
  },
  {
    icon: Shield,
    title: "Respuesta automatizada",
    description: "Bloqueo inmediato de amenazas detectadas.",
  },
];

export function AIMonitoring() {
  return (
    <section id="ia-monitoreo" className="border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Tecnología
            </span>
            <h2 className="mb-6 text-balance text-3xl font-bold text-foreground md:text-4xl">
              Supervisión Continua con Inteligencia Artificial
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              El sistema de inteligencia artificial de ByteCare ofrece supervisión 
              continua 24 horas al día, 7 días a la semana. Analiza el comportamiento 
              de su sistema en tiempo real para detectar amenazas de seguridad y 
              problemas de rendimiento antes de que afecten su operación.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              A diferencia de las soluciones tradicionales que dependen de actualizaciones 
              periódicas, nuestra IA aprende continuamente de nuevos patrones de ataque 
              y adapta sus defensas de forma automática para mantener su protección 
              siempre actualizada.
            </p>
          </div>

          {/* Visual */}
          <div className="relative">
            {/* Main card */}
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-secondary">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Motor de IA ByteCare
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Análisis inteligente continuo
                  </p>
                </div>
              </div>

              {/* Status indicator */}
              <div className="mb-6 flex items-center gap-3 rounded-lg bg-secondary/50 px-4 py-3">
                <div className="h-3 w-3 animate-pulse rounded-full bg-green-500" />
                <span className="text-sm font-medium text-foreground">
                  Sistema activo y monitoreando
                </span>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
