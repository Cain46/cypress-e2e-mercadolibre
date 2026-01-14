# Cypress E2E – MercadoLibre (MasterSoft)

Automatización End-to-End con **Cypress** para el sistema de publicaciones que replica productos en **MercadoLibre**.

Este repositorio contiene la base del flujo E2E, comenzando por:
- Login del sistema
- Navegación a MercadoLibre
- Acceso a la grilla de Publicaciones

> Estado actual: **base estable – checkpoint guardado** ✅

---

## 🧱 Estructura del proyecto

cypress/
├── e2e/
│ └── mercadolibre/
│ └── publicacion_basica.cy.js
├── fixtures/
├── support/
│ ├── commands.js
│ └── e2e.js
cypress.config.js
package.json
package-lock.json

yaml
Copiar código

- Los tests están organizados **por proyecto** (`mercadolibre`).
- Esto permite escalar luego a otros sistemas (ej: Actores) sin mezclar flujos.

---

## ▶️ Requisitos

- Node.js 18+
- npm
- Git
- Navegador Chrome (recomendado)

---

## 🚀 Instalación

```bash
npm install
▶️ Ejecución
Modo interactivo (recomendado para desarrollo):

bash
Copiar código
npx cypress open
Luego:

Elegir E2E Testing

Seleccionar navegador

Ejecutar publicacion_basica.cy.js

🔐 Login
El login se realiza por UI, utilizando selectores estables (id / atributos reales del DOM).

⚠️ Las credenciales no deben quedar hardcodeadas a largo plazo.
En próximos pasos se migrarán a Cypress.env o variables de entorno.

📌 Flujo cubierto actualmente
Acceso a pantalla de Login

Autenticación en el sistema

Navegación por tiles:

MercadoLibre

Publicaciones

Llegada a la grilla de publicaciones

🧭 Próximos pasos (roadmap inmediato)
Click en Agregar

Completar solapa Principal

Campos obligatorios

+3 campos adicionales

Subida de imagen por URL

Guardar publicación

Validar resultado esperado:

Retorno a la grilla

🌱 Branching
El trabajo se desarrolla sobre el branch:

Copiar código
e2e-mercadolibre
Esto permite:

Evolucionar el flujo sin afectar otros proyectos

Mantener checkpoints claros

Facilitar PRs y revisiones

🧠 Nota QA
Este repositorio prioriza:

Estabilidad de selectores

Claridad del flujo

Ejecución reproducible

Escalabilidad del E2E

No se optimiza prematuramente.
Primero flujo feliz sólido, luego refactor.

👤 Autor: Cain46
