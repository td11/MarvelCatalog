import React from "react";
import { Shield, ExternalLink, Code2 } from "lucide-react";
import './Footer.css';

export function Footer() {
  return (
    <footer className="marvel-footer">
      <div className="marvel-footer-inner">
        <div className="marvel-footer-brand">
          <div className="footer-pill">BATICUEVA TECH</div>
          <p className="footer-desc">
            <strong>Marvel Universe Archive</strong> — Enciclopedia interactiva de personajes,
            Power Grids oficiales de combate y cómics canónicos. Proyecto insignia de portfolio técnico.
          </p>
        </div>

        <div className="marvel-footer-links">
          <a
            href="https://baticuevatech.es"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <span>Baticueva Hub</span>
            <ExternalLink size={13} />
          </a>
          <a
            href="https://github.com/td11/MarvelCatalog"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <Code2 size={14} />
            <span>Código en GitHub</span>
          </a>
        </div>
      </div>

      <div className="marvel-footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()} Diseñado y desarrollado por <strong>Teo (@td11)</strong> · Datos e iconografía inspirados en Marvel Comics.
        </p>
      </div>
    </footer>
  );
}

