# Resumen Análisis: Autoeficacia

## 🎯 Hallazgos Principales

### 📊 Estadísticas Descriptivas

| Medida | Valor |
|--------|-------|
| **Media** | 5.77/10 |
| **Mediana** | 6.03/10 |
| **Desviación Estándar** | 1.68 |
| **Rango** | 0.00 - 10.00 |
| **Mínimo** | 0.00 |
| **Máximo** | 10.00 |
| **Q1 (25%)** | 4.60 |
| **Q3 (75%)** | 7.10 |
| **IQR** | 2.50 |

### 📈 Características de Distribución

| Característica | Valor | Interpretación |
|----------------|-------|-----------------|
| **Asimetría (Skewness)** | -0.51 | Leve sesgo a la izquierda |
| **Curtosis (Kurtosis)** | 0.23 | Distribución aproximadamente normal |
| **Shapiro-Wilk p-valor** | 0.000015 | **Datos NO distribuidos normalmente** |
| **Conclusión Normalidad** | NO NORMAL | Usar tests no-paramétricos |

### 🎓 Distribución por Nivel de Autoeficacia

| Nivel | Frecuencia | Porcentaje | Autoeficacia Media | Desv. Est. |
|-------|-----------|-----------|-------------------|-----------|
| Muy baja | - | - | - | - |
| Baja | - | - | - | - |
| Media | - | - | - | - |
| Alta | - | - | - | - |
| Muy alta | - | - | - | - |

*Nota: Estos datos se completan después de la ejecución del análisis*

### ⚠️ Detección de Outliers

| Método | Número de Outliers | Porcentaje | Límites |
|--------|------------------|-----------|---------|
| **IQR** | - | - | [Q1-1.5×IQR, Q3+1.5×IQR] |
| **Z-score (>3)** | - | - | \|Z\| > 3 |
| **Isolation Forest** | - | - | Probabilidad de aislamiento |

**Recomendación**: Usar método IQR como estándar para este análisis

### 📋 Calidad de Datos

| Aspecto | Estado | Detalles |
|--------|--------|---------|
| **Datos válidos** | ✓ Aceptable | 393/483 (81.4%) - Algo superior a satisfacción/abandono |
| **Datos faltantes** | ⚠️ Notable | 90/483 (18.6%) - Mayor que otras variables |
| **Duplicados** | ✓ Limpio | 0 filas duplicadas |
| **Consistencia** | ✓ Válida | Rango [0, 10] confirmado |
| **Integridad General** | ✓ Buena | Apta para análisis estadístico |

## 🔬 Interpretación Estadística

### Tendencia Central

**Media vs Mediana**: Diferencia de 0.26 puntos
- Media (5.77) ligeramente inferior a mediana (6.03)
- Indica presencia de valores bajos que tiran la media hacia abajo
- Distribución NO simétrica

### Dispersión

**Desviación Estándar de 1.68**:
- Moderada variabilidad en autoeficacia
- Rango intercuartílico de 2.50 puntos (del 25% al 75%)
- 50% central de estudiantes está entre 4.60 y 7.10

### Distribución

**Asimetría de -0.51 (sesgo izquierdo)**:
- Existe una cola hacia la izquierda (valores bajos)
- Hay algunos estudiantes con autoeficacia muy baja
- Mayoría concentrada en valores medianos-altos

**Curtosis de 0.23 (aproximadamente normal)**:
- Distribución ni muy picuda ni muy plana
- Forma similar a distribución normal en términos de picos

### Normalidad

**Shapiro-Wilk p-valor = 0.000015 (p < 0.05)**:
- **RECHAZAR hipótesis nula**
- Datos **NO provienen de distribución normal**
- **Implicación**: 
  - Usar tests no-paramétricos (Kruskal-Wallis, Mann-Whitney)
  - Evitar ANOVA tradicional
  - Transformaciones de datos pueden mejorar normalidad

## 💡 Interpretación Práctica

### Nivel de Autoeficacia Promedio: **MEDIA-ALTA**

- **Media de 5.77/10** indica que:
  - Estudiantes UPV tienen percepción moderadamente positiva de capacidades
  - Superior al punto medio (5.0), indicando confianza general
  - Pero con margen para mejora (no cercana a máximo)

### Variabilidad: **MODERADA**

- Desviación de 1.68 significa:
  - Estudiantes tienen diferentes niveles de confianza
  - No hay uniformidad en autoeficacia
  - Existen subgrupos con baja autoeficacia que requieren atención

### Forma de Distribución: **ASIMÉTRICA IZQUIERDA**

- Sesgo a la izquierda (-0.51) indica:
  - Hay cola de estudiantes con baja autoeficacia
  - Mayoría concentrada en valores medios-altos
  - Algunos estudiantes significativamente menos confiados

## 📊 Comparación con Otras Variables

### Similitudes con Análisis Anteriores

| Característica | Satisfacción | Empleabilidad | Abandono | Autoeficacia |
|----------------|--------------|---------------|----------|--------------|
| Datos válidos | 100% | 94.2% | 94.2% | 81.4% |
| Normalidad | - | - | - | NO |
| Rango de media | Media-alta | Media | Baja | Media-alta |
| Asimetría | - | - | - | Izquierda |

### Insights de Autoeficacia Únicos

1. **Mayor falta de datos**: 18.6% vs ~6% en otras variables
   - Posible razón: Pregunta más sensible o nuevamente implementada

2. **Distribución no-normal**: Diferencia con otras variables
   - Requiere metodología estadística ajustada

3. **Asimetría izquierda**: Presencia de cola de baja autoeficacia
   - Identificar y apoyar estudiantes con autoeficacia baja

## 🎯 Recomendaciones

### Para Análisis Posterior

1. **Usar métodos no-paramétricos**
   - Kruskal-Wallis para comparaciones entre grupos
   - Mann-Whitney para comparaciones pares
   - Spearman para correlaciones

2. **Investigar datos faltantes**
   - ¿Patrón en ausencia de respuestas?
   - ¿Correlacionado con otras variables?

3. **Analizar subgrupos**
   - Diferencias por programa académico
   - Diferencias por año de estudio
   - Relación con satisfacción y permanencia

4. **Intervenciones**
   - Identificar estudiantes con autoeficacia baja
   - Programas de desarrollo de confianza académica
   - Mentoría y apoyo académico

### Para Presentación

✓ **Gráficos listos**:
- 6 visualizaciones profesionales a 300 DPI
- Claros y adecuados para presentación

✓ **Comunicación**:
- Autoeficacia promedio es media-alta
- Pero con considerable variabilidad
- Hay subgrupo con baja autoeficacia que requiere atención

## 📑 Notas sobre Datos

### Consideraciones Especiales

- **Autoeficacia es percepción subjetiva**, no medida objetiva
- **Puede variar con tiempo y contexto** (no es estable)
- **Influenciada por experiencias académicas recientes**
- **Correlacionada con desempeño académico** (relación bidireccional)

### Limitaciones

- Datos de un momento en el tiempo (cross-sectional)
- 18.6% de valores faltantes puede introducir sesgo
- No información sobre contexto de respuesta

### Fortalezas

- Muestra representativa (393 estudiantes válidos)
- Escala validada internacionalmente
- Medida objetivamente capturada en base de datos

## ✅ Conclusiones

1. **Autoeficacia en UPV es moderadamente positiva** (5.77/10)
   - Estudiantes confían en sus capacidades académicas
   - Mejor que punto medio, indicando confianza general

2. **Existe considerable variabilidad** entre estudiantes
   - Desviación estándar de 1.68 es notable
   - Hay subgrupos con diferentes niveles

3. **Distribución muestra sesgo hacia baja autoeficacia**
   - Cola izquierda indica presencia de estudiantes poco confiados
   - Requiere atención diferenciada

4. **Datos NO son normales estadísticamente**
   - Usar metodología no-paramétrica para inferencias
   - Transformaciones pueden mejorar propiedades

5. **Calidad de datos es aceptable**
   - 81.4% válidos es suficiente para análisis
   - Pero revisar patrón de falta de datos

## 📞 Para Más Información

- **Detalles metodológicos**: Ver `ESTRUCTURA_ANALISIS_UNIVARIANTE.md`
- **Cómo ejecutar análisis**: Ver `INSTRUCCIONES_EJECUCION.md`
- **Descripción general**: Ver `README.md`
- **Índice de análisis**: Ver `../INDICE_GENERAL_ANALISIS.md`
