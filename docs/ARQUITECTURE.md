# ARCHITECTURE.md

# 🌎 Arquitectura de MathScienceWorld

## Objetivo

Definir la arquitectura técnica y educativa de la plataforma, garantizando escalabilidad, reutilización del contenido e independencia tecnológica.

---

# Filosofía

MathScienceWorld se basa en cinco principios fundamentales:

1. Separación entre contenido y software.
2. Arquitectura modular.
3. Independencia del proveedor de IA.
4. Reutilización de contenidos.
5. Escalabilidad.

---

# Arquitectura General

                   Usuario
                       │
                       ▼
             Interfaz Web (Frontend)
                       │
                       ▼
              Motor de Navegación
                       │
     ┌─────────────────┼──────────────────┐
     ▼                 ▼                  ▼
Contenido        Actividades         Tutor IA
     │                 │                  │
     └─────────────────┼──────────────────┘
                       ▼
                Recursos Académicos

---

# Capas del sistema

## Presentación

Responsable de mostrar la información.

Componentes:

- Página principal
- Cursos
- Lecciones
- Simulaciones
- Panel del profesor
- Panel del estudiante

---

## Dominio

Contiene la lógica académica.

Objetos principales:

- Curso
- Módulo
- Lección
- Actividad
- Evaluación
- Recurso

---

## Servicios

Proporciona funcionalidades reutilizables.

Ejemplos:

- Generador de ejercicios
- Generador de exámenes
- Exportación PDF
- Exportación LaTeX
- Buscador
- Motor IA

---

## Datos

Almacena el contenido.

Tipos de archivos:

- Markdown
- JSON
- LaTeX
- PDF
- Imágenes
- Código R
- Código Python

---

# Arquitectura de carpetas

MathScienceWorld/

docs/

frontend/

contenido/

simulaciones/

evaluaciones/

backend/

assets/

---

# Navegación

Inicio

↓

Catálogo de cursos

↓

Curso

↓

Módulo

↓

Lección

↓

Actividad

---

# Flujo de aprendizaje

Lección

↓

Teoría

↓

Ejemplo

↓

Ejercicio

↓

Retroalimentación

↓

Evaluación

↓

Dominio del tema

---

# Motor de contenidos

Cada lección contiene:

- teoría
- ejemplos
- ejercicios
- simulaciones
- videos
- bibliografía
- evaluación

---

# Motor de actividades

Las actividades pueden ser:

- práctica
- examen
- laboratorio
- proyecto
- simulación

---

# Motor IA

La IA nunca almacena contenido.

Únicamente consume:

- teoría
- ejemplos
- ejercicios

para generar:

- nuevas preguntas
- explicaciones
- pistas
- retroalimentación

---

# Escalabilidad

La plataforma permitirá agregar nuevos cursos sin modificar el código principal.

Cada nuevo curso únicamente añadirá nuevos contenidos.

---

# Independencia tecnológica

El contenido podrá visualizarse mediante:

- Página web
- Google Sites
- GitHub Pages
- Aplicación móvil
- PDF
- Libro
- Presentaciones
- Inteligencia Artificial

---

# Futuras integraciones

- ChatGPT
- Gemini
- Claude
- Llama

Todas mediante una capa de servicios independiente.

---

# Arquitectura educativa

La plataforma sigue el siguiente ciclo de aprendizaje:

Motivación

↓

Conceptos

↓

Ejemplos

↓

Práctica

↓

Retroalimentación

↓

Evaluación

↓

Reflexión

↓

Dominio
