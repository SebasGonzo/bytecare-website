import Link from "next/link";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#091826]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">ByteCare</span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Servicios de ciberseguridad y soporte técnico para empresas y hogares.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#que-es"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Qué es ByteCare
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#como-funciona"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Cómo Funciona
                </Link>
              </li>
              <li>
                <Link
                  href="#por-que"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Por qué ByteCare
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-muted-foreground">
                  Protección contra amenazas
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Monitoreo de equipos
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Eliminación de malware
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Mantenimiento preventivo
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>contacto@bytecare.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span>Ciudad de México, México</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ByteCare. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Política de Privacidad
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
