# UnKe Ecosystem Monorepo

Este repositorio contiene la arquitectura completa del ecosistema UnKe utilizando **Turborepo, Next.js 14, Tailwind CSS, y Supabase**.

## Estructura

- \`apps/landing\`: Sitio institucional (unke.ar).
- \`apps/guide\`: Guía digital pública (guia.unke.ar).
- \`apps/dashboard-merchant\`: Panel para comercios y profesionales (app.unke.ar).
- \`apps/dashboard-closer\`: Panel para vendedores y asesores (closer.unke.ar).
- \`apps/agents\`: Edge Functions y Agentes de IA de Supabase.
- \`apps/backend\`: Tareas, webhooks y procesos en background (Supabase).
- \`packages/ui\`: Componentes compartidos (Shadcn/ui).
- \`packages/types\`: Interfaces TypeScript compartidas.
- \`packages/lib\`: Utilidades y helpers compartidos.
- \`packages/tailwind-config\`: Configuración global de diseño.
- \`packages/supabase\`: Cliente de Supabase compartido.

## Scripts principales

- \`npm run dev\` - Inicia el Dashboard de Comercios en modo desarrollo.
- \`npm run dev:closer\` - Inicia el Dashboard del Vendedor en modo desarrollo.
- \`npm run dev:landing\` - Inicia la Landing en modo desarrollo.
- \`npm run build\` - Compila todas las aplicaciones.

## Entorno de Desarrollo Limitado
En entornos con puerto único expuesto (como AI Studio), Next.js requiere que se levante una app a la vez, por eso dividimos los comandos de inicio.
