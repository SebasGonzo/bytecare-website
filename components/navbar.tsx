"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-[#0b1c2d]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">ByteCare</span> 
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#que-es"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Qué es ByteCare
          </Link>
          <Link
            href="#servicios"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Servicios
          </Link>
          <Link
            href="#como-funciona"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Cómo Funciona
          </Link>
          <Link
            href="#por-que"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Por qué ByteCare
          </Link>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Button size="sm">Descargar Agente para Clientes ByteCare</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-[#0b1c2d] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="#que-es"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Qué es ByteCare
            </Link>
            <Link
              href="#servicios"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="#como-funciona"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Cómo Funciona
            </Link>
            <Link
              href="#por-que"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Por qué ByteCare
            </Link>
            <div className="pt-4">
              <Button size="sm" className="w-full">
                Descargar Agente para Clientes ByteCare
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
