# DOMAIN_MODEL.md

# 🌎 Modelo del Dominio

Este documento describe los objetos fundamentales de MathScienceWorld y las relaciones entre ellos.

---

# Objetivo

El objetivo del modelo del dominio es separar el contenido académico de la implementación tecnológica, permitiendo que la plataforma evolucione sin depender de una tecnología específica.

---

# Objetos principales

## Curso

Representa una asignatura completa.

### Ejemplos

- Estadística
- Cálculo Diferencial
- Álgebra Lineal
- Probabilidad
- Python
- R
- Inteligencia Artificial

### Atributos

- Nombre
- Descripción
- Imagen
- Nivel
- Módulos

---

## Módulo

Agrupa lecciones relacionadas.

### Ejemplo

Inferencia Estadística

### Atributos

- Nombre
- Descripción
- Lecciones

---

## Lección

Es la unidad mínima de aprendizaje.

Toda lección posee la misma estructura.

### Componentes

- Objetivos
- Introducción
- Teoría
- Ejemplos
- Ejercicios
- Simulaciones
- Videos
- Evaluación
- Tutor IA
- Bibliografía

---

## Recurso

Material utilizado dentro de una lección.

### Tipos

- PDF
- Markdown
- Imagen
- Video
- Código R
- Código Python
- LaTeX
- GeoGebra
- Desmos

---

## Actividad

Elemento interactivo realizado por el estudiante.

### Tipos

- Ejercicio
- Quiz
- Examen
- Proyecto
- Práctica
- Laboratorio

---

## Simulación

Herramienta interactiva para visualizar conceptos.

Puede implementarse mediante:

- R
- Python
- GeoGebra
- Desmos
- HTML5

---

## Tutor IA

Asistente inteligente que ayuda al estudiante.

Funciones:

- Explicar conceptos.
- Generar ejercicios.
- Resolver dudas.
- Dar retroalimentación.
- Generar pistas sin revelar inmediatamente la solución.

---

## Usuario

Tipos de usuario

- Aprendiz
- Profesor
- Administrador

---

# Relaciones

Curso

↓

Módulos

↓

Lecciones

↓

Recursos

↓

Actividades

↓

Evaluaciones

---

# Principios del proyecto

1. El contenido es independiente del software.

2. Una lección puede pertenecer a varios cursos.

3. La IA es un complemento, no una dependencia.

4. Todo el contenido debe ser reutilizable.

5. Todo el contenido debe poder exportarse.

6. La plataforma debe ser modular.

7. El conocimiento pertenece al autor.

---

# Filosofía

MathScienceWorld no es únicamente una plataforma web.

Es un ecosistema educativo donde un mismo contenido puede utilizarse en:

- Página web
- Aplicación móvil
- PDF
- Libro
- Presentaciones
- LaTeX
- Simulaciones
- Inteligencia Artificial
- Sistemas de evaluación
