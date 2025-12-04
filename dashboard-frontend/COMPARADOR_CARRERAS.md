# 🆚 Comparador de Carreras - Nueva Funcionalidad

## Descripción

Se ha añadido una nueva sección al dashboard que permite comparar dos carreras de forma visual e interactiva.

## Características Principales

### 1. **Filtros por Tipo de Titulación**
- **Grado**: Filtra solo titulaciones de grado
- **Máster**: Filtra solo programas de máster
- **Doble Grado**: Filtra solo dobles titulaciones
- **Todos**: Muestra todas las titulaciones disponibles

### 2. **Búsqueda Inteligente**
- Búsqueda en tiempo real por nombre de carrera
- Búsqueda por centro académico
- Sugerencias automáticas con información de cluster
- Límite de 10 resultados para mejor rendimiento

### 3. **Comparación Visual**
Cada métrica se compara de forma visual con:
- **Satisfacción** (/10): Promedio de satisfacción de alumnos y profesores
- **Tasa de Abandono** (%) : Porcentaje de estudiantes que abandonan (menor es mejor)
- **Empleabilidad** (%): Porcentaje de no desempleados
- **Autoeficacia** (/10): Nivel de autoeficacia a los 3 años

### 4. **Indicadores Visuales**
- ✅ **Flecha arriba verde**: La primera carrera es mejor en esta métrica
- ❌ **Flecha abajo roja**: La segunda carrera es mejor
- ➖ **Guión gris**: Valores similares (diferencia < 0.1)

### 5. **Resumen Comparativo**
Al final de la comparación se muestra un resumen con las fortalezas de cada carrera.

## Implementación Técnica

### Archivos Modificados
1. **`src/types/index.ts`**
   - Añadido `DegreeType` enum para clasificación de titulaciones
   - Actualizado `IProgram` e `ITitulationPerformance` para incluir campo `degree`

2. **`src/utils/dataLoader.ts`**
   - Nueva función `classifyDegreeType()` para detectar automáticamente el tipo
   - Actualizado `loadPrograms()` para clasificar titulaciones
   - Actualizado `loadTitulationPerformance()` para incluir el tipo

3. **`src/components/CompareCareer.tsx`** (NUEVO)
   - Componente principal del comparador
   - Gestión de estado para dos carreras seleccionadas
   - Filtros por tipo de grado
   - Búsqueda con dropdown autocomplete
   - Métricas de comparación visual

4. **`src/pages/Dashboard.tsx`**
   - Añadida nueva pestaña "Comparar Carreras" (⚖️)
   - Integración del componente `CompareCareer`

## Uso

1. Accede al dashboard
2. Haz clic en la pestaña **"Comparar Carreras"** (⚖️)
3. Selecciona un filtro de tipo (opcional)
4. Busca y selecciona la primera carrera
5. Busca y selecciona la segunda carrera
6. Observa la comparación visual de métricas
7. Lee el resumen comparativo al final

## Detección Automática de Tipos

El sistema detecta automáticamente el tipo de titulación basándose en el nombre:
- Si contiene "DOBLE GRADO" → `Doble Grado`
- Si contiene "MÁSTER" o "MASTER" → `Máster`
- Si contiene "GRADO" → `Grado`
- Otros casos → `Otros`

## Ejemplo de Uso

```
Filtro: Grado
Primera Carrera: GRADO EN INGENIERÍA INFORMÁTICA
Segunda Carrera: GRADO EN ADMINISTRACIÓN DE EMPRESAS

Resultados:
✅ Ingeniería Informática tiene mayor satisfacción (7.8 vs 6.9)
✅ Ingeniería Informática tiene menor abandono (12.3% vs 19.2%)
✅ Ingeniería Informática tiene mayor empleabilidad (85.2% vs 72.4%)
✅ Ingeniería Informática tiene mayor autoeficacia (7.5 vs 6.6)
```

## Próximas Mejoras Sugeridas

1. **Comparación múltiple**: Permitir comparar 3 o más carreras
2. **Exportar comparación**: Generar PDF o imagen de la comparación
3. **Histórico**: Ver evolución temporal de cada carrera comparada
4. **Compartir**: URL única para cada comparación
5. **Gráficos radar**: Visualización tipo spider chart para comparación global

---

**Versión**: 1.0  
**Fecha**: Diciembre 2025  
**Autor**: Panel Maestro UPV
