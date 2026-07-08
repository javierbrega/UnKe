# Documentación del Proyecto: UnKe

**UnKe** es una plataforma y red premium de beneficios cruzados diseñada para comercios de proximidad y usuarios. Permite a los negocios locales recomendarse mutuamente, adquirir tráfico recurrente y ofrecer descuentos mediante un sistema de escaneo de códigos QR, sin comisiones ocultas y con fuerte énfasis en la sinergia comercial (B2B) y fidelización de clientes (B2C).

---

## 1. Stack Tecnológico

El proyecto está construido utilizando un stack moderno, enfocado en el rendimiento, la escalabilidad y una experiencia de usuario altamente pulida.

- **Framework Core:** React 18+ sobre Vite.
- **Lenguaje:** TypeScript, para un tipado estricto y seguro.
- **Estilos:** Tailwind CSS v4 (utilizando el nuevo motor con `@import "tailwindcss"` y variables en CSS `@theme inline`).
- **Componentes UI:** shadcn/ui (basado en Radix UI) para componentes accesibles (Dialogos, Formularios, Acordeones, Cards, Selects, etc.).
- **Animaciones:** Framer Motion (`motion/react`) para micro-interacciones y transiciones fluidas (efectos de `FadeIn`), y Tailwind puro para animaciones continuas (ej. giro de bordes).
- **Iconografía:** Lucide React.

---

## 2. Identidad Visual y UI/UX

La interfaz tiene un enfoque **Dark Mode (Modo Oscuro)** moderno, minimalista y de alto contraste, diseñado para dar una sensación "premium" y tecnológica.

### Tipografía
Se utiliza una única familia tipográfica limpia y versátil para toda la aplicación, manteniendo la legibilidad y un aspecto contemporáneo.
- **Principal (Headings & Sans):** `Inter` (con fallbacks a `ui-sans-serif, system-ui, sans-serif`).

### Paleta de Colores
La paleta se basa en fondos oscuros profundos con un color de acento altamente vibrante y llamativo.

| Nombre de la Variable | Valor Hex | Descripción |
| :--- | :--- | :--- |
| **Primary (Acento principal)** | `#C8FF00` | Verde Lima neón. Utilizado en botones principales, íconos de énfasis, decoraciones, selecciones de texto y el borde giratorio del Hero. |
| **Primary Foreground** | `#000000` | Negro puro. Usado para el texto dentro de botones o elementos con el color primario de fondo (para máximo contraste). |
| **Background** | `#0a0a0a` | Gris/Negro muy oscuro. Fondo principal de la aplicación. |
| **Hero/Footer Background** | `#050505` | Negro casi puro, usado para dar mayor profundidad a las secciones de cabecera y pie de página. |
| **Foreground (Texto principal)** | `#f0f0f0` | Blanco humo / Off-white. Usado para textos principales y títulos. |
| **Card / Popover** | `#1a1a1a` | Gris oscuro. Utilizado para el fondo de tarjetas, modales y menúes desplegables. |
| **Secondary / Muted / Border** | `#27272a` | Zinc 800. Utilizado para bordes, inputs, fondos secundarios y elementos inactivos o sutiles. |
| **Muted Foreground** | `#a1a1aa` | Zinc 400. Utilizado para textos secundarios, descripciones y subtítulos. |
| **Destructive** | `#7f1d1d` | Rojo oscuro. Para acciones de peligro o error (ej. alertas). |

### Detalles de Diseño (Craftsmanship)
- **Radios de borde (Border Radius):** Se utiliza una escala basada en `0.75rem (12px)` para la mayoría de las tarjetas y botones, y radios redondeados completos (`rounded-full`) para avatares y botones CTAs principales.
- **Efectos de Selección:** La selección de texto en la web tiene un fondo `bg-primary/30` con texto `text-primary`.
- **Hero Interactivo:** El fondo de la sección principal cuenta con un patrón de puntos (dots) que se revela dinámicamente con un gradiente radial y `WebkitMaskImage` que sigue el movimiento del cursor (`mousePosition`).
- **Borde de Logo Animado:** El logo de UnKe en el hero tiene un anillo externo con `conic-gradient` que gira infinitamente usando una animación de giro linear.

---

## 3. Estructura de Secciones y Arquitectura de la Landing Page

La aplicación actualmente funciona como una Landing Page de conversión y presentación (SPA) estructurada de la siguiente manera:

### 1. Header (Navegación)
Barra de navegación principal fija/adherente para saltos rápidos a las secciones de la página.

### 2. Hero Section
Sección principal de impacto.
- **Tagline:** "La red de negocios que se recomiendan entre sí."
- **Badge Social Proof:** "+100 negocios ya conectados".
- **Call to Action (CTA):** Botón verde lima prominente "Quiero sumar mi negocio" que lleva al formulario.
- **Micro-features:** Clientes nuevos, Beneficios cruzados, Gestión con IA.

### 3. ¿Cómo funciona? (Flujo del Usuario)
Explicación en 3 pasos simples para el usuario final:
1. **Escaneá:** El código QR en comercios adheridos.
2. **Suscribite:** Únete a la red para desbloquear descuentos.
3. **Ahorrá:** Canjeá mediante WhatsApp o en el mostrador.

### 4. Sección para Comercios (B2B)
Enfocado en captación de locales o negocios.
- Presenta una propuesta de valor: crecimiento sin comisiones ocultas.
- **Formulario de Captación (Dialog Modal):** Permite a los comercios enviar una solicitud completando:
  - Nombre del comercio.
  - Nombre del contacto.
  - Teléfono / WhatsApp.
  - Rubro principal (Select: Gastronomía, Salud & Bienestar, Servicios Generales, Tienda / Retail, Otro).
- **Manejo de Estado:** Incluye una transición simulada tras el envío del formulario mostrando un mensaje de éxito ("¡Solicitud recibida!").
- **Beneficios Detallados (Cards):** Tráfico recurrente, Beneficios cruzados, Presencia digital (Micrositio HD), Data en tiempo real.

### 5. Rubros Disponibles
Una grilla visual con íconos mostrando las categorías disponibles.
- **Datos (mock.ts):** Veterinaria, Peluquería, Farmacia, Mecánico, Odontólogo, Abogado, Verdulería, Cine, Cafetería, Gimnasio.

### 6. Testimonios
Prueba social mediante tarjetas con citas de dueños de comercios (Martín de Peluquería, Laura de Clínica Dental, Carlos de Taller Mecánico), renderizadas con avatares y el ícono de estrella (`Star`) para calificaciones.

### 7. Preguntas Frecuentes (FAQ)
Componente de acordeón interactivo (`Accordion`) para resolver dudas comunes:
- Cómo suscribirse.
- Funcionamiento de los cupones.
- Políticas de cancelación.
- Costos para comercios (Menciona plan base gratuito y planes Pro).
- Zonas de disponibilidad (Principalmente CABA: Palermo, Belgrano, Recoleta, Colegiales).

### 8. Footer
Pie de página completo con:
- Logo y resumen de la empresa.
- Enlaces sociales simulados (Ícono enlace, WhatsApp directo).
- Columnas de navegación estructurada: Plataforma, Para Comercios, Legal.
- Derechos de autor ("Diseñado con cuidado en Buenos Aires").

---

## 4. Componentes y Sistema de Archivos

- `/src/App.tsx`: Archivo principal que orquesta la landing page y el modal de contacto.
- `/src/index.css`: Archivo donde se define el motor de Tailwind v4 y las variables globales de CSS (`@theme inline` y `:root`).
- `/src/components/hero.tsx`: Componente de cabecera principal, que incluye la compleja lógica de interactividad del cursor y los patrones de gradiente radial.
- `/src/components/header.tsx`: (Asumido) Barra de navegación superior.
- `/src/data/mock.ts`: Fuente de la verdad actual para la información estática (categorías, negocios, testimonios).
- `/src/components/ui/*`: Librería base de componentes shadcn/ui.
- `/src/lib/utils.ts`: Utilidad `cn()` usada para fusionar clases de Tailwind condicionalmente (a través de `clsx` y `tailwind-merge`).

## 5. Próximos Pasos & Potencial Expansión
La estructura actual deja la puerta abierta para conectar un backend real (ej. Firebase, Supabase o Cloud SQL) que permita:
- Procesar envíos del formulario de comercios genuinamente.
- Generar micrositios dinámicos por ID de comercio.
- Manejar la autenticación (Login Admin para ver estadísticas).
- Gestionar una base de datos real de rubros y redes de cupones QR.
