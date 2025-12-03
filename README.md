# TruequePlus 

Una aplicación de intercambio de productos potenciada por IA que facilita el trueque entre usuarios de manera inteligente y segura.

[![AI Studio](https://img.shields.io/badge/AI%20Studio-App-blue)](https://ai.studio/apps/drive/18jRMhoZ2reCRDg9hGghVvS_eYnD0cLQu)
[![Node.js](https://img.shields.io/badge/Node.js-Required-green)](https://nodejs.org/)

## Descripción

TruequePlus es una plataforma moderna de intercambio que utiliza inteligencia artificial de Gemini para conectar usuarios que desean hacer trueques de productos. La aplicación sugiere intercambios justos basados en las necesidades y preferencias de los usuarios.

## Características

- **IA Integrada**: Utiliza Gemini AI para sugerencias inteligentes de intercambios
- **Búsqueda Avanzada**: Encuentra productos fácilmente
- **Sistema de Mensajería**: Comunícate directamente con otros usuarios
- **Sistema de Valoraciones**: Construye confianza en la comunidad
- **Diseño Responsivo**: Funciona en todos los dispositivos
- **Seguro**: Protección de datos y transacciones seguras

##  Instalación y Ejecución Local

### Requisitos Previos

- **Node.js** (versión 16 o superior)
- **npm** o **yarn**
- **API Key de Gemini** (obtén una en [Google AI Studio](https://makersuite.google.com/app/apikey))

### Pasos de Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/JOSERiofrio2002/Ape006.git
   cd truequeplus
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno**
   
   Crea o edita el archivo `.env.local` en la raíz del proyecto:
   ```env
   GEMINI_API_KEY=tu_api_key_aqui
   ```

4. **Ejecuta la aplicación en modo desarrollo**
   ```bash
   npm run dev
   ```

5. **Abre tu navegador**
   
   Navega a `http://localhost:3000` (o el puerto que se indique en la consola)

### Otros Comandos Útiles
 
```bash
# Compilar para producción
npm run build

# Iniciar en modo producción
npm start

# Ejecutar tests (si están configurados)
npm test

# Linter
npm run lint
```

##  Tecnologías Utilizadas

- **Frontend**: React / Next.js
- **IA**: Google Gemini API
- **Estilos**: CSS Modules / Tailwind CSS
- **Node.js**: Runtime de JavaScript

## 📁 Estructura del Proyecto

```
truequeplus/
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── pages/         # Páginas de la aplicación
│   ├── styles/        # Archivos de estilos
│   └── utils/         # Utilidades y helpers
├── public/            # Archivos estáticos
├── .env.local         # Variables de entorno (no incluido en git)
├── package.json       # Dependencias del proyecto
└── README.md         # Este archivo
```

