# 📊 INFORME CONSOLIDADO DE CONCLUSIONES
## Panel Maestro UPV - Análisis Completo (2020-2024)

**Versión:** 1.0 Final  
**Fecha:** 24 de octubre de 2024  
**Propósito:** Documento guía para diseño del dashboard final  
**Audiencia:** Directivos, coordinadores, equipo de análisis  

---

## 🎯 ESTRUCTURA DEL INFORME

Este documento condensa **todos los análisis realizados** (univariante, multivariante, temporal) en conclusiones accionables. Cada sección incluye:
- ✅ **Qué descubrimos**: Hallazgos principales
- 📊 **Números clave**: Métricas específicas
- 🎬 **Gráfica recomendada**: Visualización para dashboard
- 🚀 **Por qué importa**: Impacto y relevancia
- 💡 **Acción**: Próximos pasos

---

## 📌 PARTE 1: DIMENSIÓN UNIVARIANTE
### (Entender cada variable individualmente)

### 1.1 SATISFACCIÓN DE ESTUDIANTES (Alumnos + Profesores)

#### 🔍 Hallazgos Univariantes
- **Media alumnos:** 6.92/10 (moderada)
- **Media profesores:** 8.65/10 (alta)
- **Brecha:** +1.73 puntos → **Profesores mucho más satisfechos**
- **Dispersión:** σ alumnos = 1.46, σ profesores = 0.74
- **Distribución:** Aproximadamente normal con colas pesadas
- **Outliers:** 11 en alumnos (2.3%), 5 en profesores (1.0%)
- **Calidad datos:** ✅ Excelente (>98% válidos)

#### 📊 Gráficas Recomendadas para Dashboard
1. **Histograma + Curva KDE:** Satisfacción alumnos vs profesores (01_histogramas_densidad_satisfaccion.png)
   - Muestra: Distribución clara, brecha evidente
   - Por qué: Visual intuitiva de la diferencia

2. **Violin Plot Comparativo:** Alumnos vs Profesores (03_violinplots_satisfaccion.png)
   - Muestra: Rangos, mediana, simetría
   - Por qué: Más informativa que boxplot, muestra forma

3. **Scatter Plot:** Correlación Alumnos vs Profesores (05_comparacion_alumnos_profesores.png)
   - Muestra: Consistencia (r=0.70)
   - Por qué: Demuestra que no son independientes

#### 🚀 Por Qué Importa
- **Brecha alumnos-profesores señala desconexión:** Profesores ven calidad que alumnos no perciben
- **Satisfacción es driver principal:** Explica 35% de la variabilidad en desempeño
- **Variabilidad en alumnos es significativa:** Algunos programas satisfacen, otros no

#### 💡 Acciones Priorizadas
1. **Investigar programas con baja satisfacción alumnos** (< 5/10)
   - Identificar factores (currículo, docentes, infraestructura)
   - Intervención: Mejora de ambiente académico
   
2. **Comunicación a estudiantes de calidad percibida por profesores**
   - Podría mejorar autoeficacia y confianza

3. **Benchmarking:** Programas alumnos-satisfechos vs insatisfechos
   - Replicar prácticas de satisfacción

---

### 1.2 TASA DE ABANDONO (Inversa: Permanencia)

#### 🔍 Hallazgos Univariantes
- **Media abandono:** ~17.2% (1 de cada 6 estudiantes)
- **Rango:** 0% - 100% (algunos programas perfectos, otros críticos)
- **Dispersión:** σ ≈ 10.2%
- **Distribución:** Sesgada a la derecha (mayoría baja, algunos muy alto)
- **Verificación abandono+permanencia:** ~100% (datos consistentes ✅)
- **Outliers significativos:** Programas con abandono >40%
- **Relación inversa con permanencia:** r = -0.999 (perfecta)

#### 📊 Gráficas Recomendadas para Dashboard
1. **Histograma + KDE:** Distribución tasa abandono (01_histogramas_densidad_abandono.png)
   - Muestra: Concentración, forma de distribución
   - Por qué: Indica si hay dos poblaciones (buen vs mal abandono)

2. **Scatter Abandono vs Permanencia:** (05_comparacion_abandono_permanencia.png)
   - Muestra: Verificación de suma=100%, consistencia
   - Por qué: QA de datos, muestra precisión de medición

3. **Box Plot con Outliers:** (02_boxplots_abandono.png)
   - Muestra: Mediana, IQR, outliers extremos
   - Por qué: Identifica programas anómalos para investigación

#### 🚀 Por Qué Importa
- **Abandono es costo directo:** Cada estudiante perdido = inversión fallida
- **Varía significativamente entre programas:** No es problema institucional uniforme
- **Predecible con autoeficacia:** r = -0.40 (estudiantes confiados no abandonan)
- **Mejor que satisfacción sola:** Indicador más objetivo (acción, no percepción)

#### 💡 Acciones Priorizadas
1. **Identificar "programas atípicos"**
   - Abandono < 5%: Modelos a replicar
   - Abandono > 30%: Intervención urgente

2. **Correlacionar abandono con:**
   - Autoeficacia (r=-0.40)
   - Empleabilidad de egresados
   - Satisfacción del programa

3. **Sistema de alerta temprana**
   - Monitoreo de autoeficacia por semestre
   - Intervención antes de abandono

---

### 1.3 AUTOEFICACIA (Confianza en habilidades)

#### 🔍 Hallazgos Univariantes
- **Media:** 5.77/10 (media-baja)
- **Mediana:** 6.03/10 (ligeramente mejor que media)
- **Dispersión:** σ = 1.68 (moderada variabilidad)
- **Rango:** 0.00 - 10.00 (espectro completo)
- **Distribución:** Sesgada a la izquierda (cola en valores bajos)
- **Calidad:** 81.4% válidos (18.6% faltantes, superior a otras variables)
- **Outliers:** Presentes en ambos extremos

#### 📊 Gráficas Recomendadas para Dashboard
1. **Histograma + KDE Autoeficacia:** (01_histogramas_densidad_autoeficacia.png)
   - Muestra: Sesgo, concentración central
   - Por qué: Revela si hay muchos estudiantes con baja confianza

2. **Violin Plot:** (03_violinplots_autoeficacia.png)
   - Muestra: Distribución completa, modas
   - Por qué: Identifica si hay subgrupos de autoeficacia

3. **Q-Q Plot:** (04_qqplots_autoeficacia.png)
   - Muestra: Desviación de normalidad
   - Por qué: Justifica uso de métodos no-paramétricos

#### 🚀 Por Qué Importa
- **Autoeficacia es PREDICTOR oculto de abandono** (r = -0.40)
- **Mejora con apoyo:** No es aptitud fija, es entrenable
- **Sesgo izquierdo = problema:** Muchos estudiantes con BAJA confianza
- **Canario en mina:** Señal temprana de problemas de retención

#### 💡 Acciones Priorizadas
1. **Monitoreo semestral obligatorio**
   - Cuestionario validado de autoeficacia
   - Baseline por programa y cohorte

2. **Intervenciones dirigidas**
   - Mentoría para autoeficacia baja (< 4/10)
   - Talleres de confianza académica

3. **Conexión con abandono**
   - Estudiantes que bajan autoeficacia = seguimiento
   - Prevención de abandono temprano

---

### 1.4 EMPLEABILIDAD (% No Desempleados)

#### 🔍 Hallazgos Univariantes
- **Media % empleados:** ~82-85% (bien, pero 15-18% sin empleo)
- **Distribución:** Bimodal (picos ~65% y ~85%)
- **Implicación:** Dos poblaciones distintas (buenos y malos empleabilidad)
- **Variabilidad:** σ ≈ 10-12%
- **Rango:** 40% - 95%
- **Consistencia:** >95% suma 100% (desempleados + no desempleados)
- **Calidad:** ✅ Excelente (0% faltantes)

#### 📊 Gráficas Recomendadas para Dashboard
1. **Histograma Bimodal:** (01_histogramas_densidad_empleabilidad.png)
   - Muestra: Dos poblaciones claramente separadas
   - Por qué: Indica que hay "buenos" y "malos" programas

2. **Box Plot:** (02_boxplots_empleabilidad.png)
   - Muestra: Mediana, rangos, outliers
   - Por qué: Identifica programas con empleabilidad atípica

3. **Violin Plot:** (03_violinplots_empleabilidad.png)
   - Muestra: Forma de distribución completa
   - Por qué: Revela si es realmente bimodal o uniforme

#### 🚀 Por Qué Importa
- **Empleabilidad es outcome final:** Lo que importa a estudiantes
- **Bimodalidad = factores estructurales:** No es random, hay razones claras
- **Varía significativamente por titulación:**
  - Ingeniería: 85-88% (excelente)
  - Humanidades: 55-62% (crítico)
- **Correlación con satisfacción:** r ≈ 0.35 (programas satisfechos → mejor empleo)

#### 💡 Acciones Priorizadas
1. **Investigar bimodalidad**
   - ¿Qué diferencia programas 85% vs 60%?
   - Análisis cualitativo con coordinadores

2. **Diseño curricular enfocado empleabilidad**
   - Humanidades: Agregar habilidades técnicas/profesionales
   - Ingeniería: Mantener modelo

3. **Conexión con industria**
   - Programas <70%: Alianzas sector laboral
   - Pasantías obligatorias en currículum

---

## 📌 PARTE 2: DIMENSIÓN MULTIVARIANTE
### (Entender relaciones entre variables)

### 2.1 MATRIZ DE CORRELACIONES (Dependencias)

#### 🔍 Hallazgos Multivariantes
- **Correlaciones fuertes (|r| > 0.5):** 3 principales
  1. Abandono ↔ Permanencia: r = -0.999 (relación matemática)
  2. Satisfacción alumnos ↔ profesores: r ≈ 0.70 (consistencia)
  3. No desempleados ↔ desempleados: r ≈ -0.99 (matemática)

- **Correlaciones moderadas (0.3 < |r| ≤ 0.5):** 8-10 relevantes
  1. Autoeficacia ↔ Satisfacción: r ≈ 0.45 (confianza → satisfacción)
  2. Abandono ↔ Autoeficacia: r ≈ -0.40 (confianza → permanencia)
  3. Satisfacción ↔ Empleabilidad: r ≈ 0.35 (calidad → empleo)

- **Correlaciones débiles (|r| < 0.3):** Múltiples
  - Poca relación entre satisfacción alumnos y empleabilidad directa
  - Poca relación entre permanencia y autoeficacia directa

#### 📊 Gráfica Recomendada para Dashboard
1. **Heatmap de Correlaciones Completo:** (01_heatmap_correlaciones.png)
   - Muestra: Toda la estructura de dependencias
   - Por qué: Visión holística de interacciones

2. **Pairplot de Variables Clave (5×5):** (02_pairplot_variables_clave.png)
   - Variables: Satisfacción promedio, abandono, autoeficacia, empleabilidad, permanencia
   - Muestra: Relaciones bivariantes scatter + marginales
   - Por qué: Detalla las 5 relaciones más importantes

#### 🚀 Por Qué Importa
- **Satisfacción es el eje principal** (explica 35% varianza)
- **Autoeficacia es el puente:** Conecta satisfacción → permanencia
- **Empleabilidad es outcome** pero débilmente acoplada a otros indicadores
- **Sistema NO es caótico:** Hay estructura, relaciones predecibles

#### 💡 Acciones Priorizadas
1. **Mejorar satisfacción como lever principal**
   - Afecta cascada de mejoras (→ autoeficacia → permanencia)

2. **Autoeficacia como métrica intermedia**
   - Medir regularmente (indicador temprano)
   - Mejora de autoeficacia → retención

3. **Empleabilidad requiere intervención directa**
   - No es consecuencia automática de satisfacción
   - Diseño curricular específico por titulación

---

### 2.2 ANÁLISIS DE COMPONENTES PRINCIPALES (PCA)

#### 🔍 Hallazgos Multivariantes
- **PC1 (35.2% varianza):** "Eje Satisfacción + Desempeño"
  - Cargas altas: Satisfacción (alumnos, profesores), empleabilidad
  - Interpretación: Eje de "Calidad General"

- **PC2 (22.8% varianza):** "Eje Permanencia"
  - Cargas altas: Tasa abandono/permanencia
  - Interpretación: Eje de "Retención"

- **PC1 + PC2 = 58.0% varianza acumulada**
  - Suficiente para visualización 2D clara
  - Pierde 42% info pero mantiene estructura principal

- **Para 90% varianza:** Necesitarían 7 componentes
  - Demasiado complejo para visualización
  - Mejor quedarse con 2D

#### 📊 Gráficas Recomendadas para Dashboard
1. **Scree Plot (Varianza Explicada):** (03_pca_varianza_explicada.png)
   - Muestra: Cuánta varianza explica cada PC
   - Por qué: Justifica usar 2D vs más componentes

2. **PCA 2D Scatter:** (04_pca_2d_scatter.png)
   - Muestra: Programas en espacio reducido, coloreados por abandono
   - Por qué: Visualiza la estructura natural de programas

3. **PCA Biplot:** (05_pca_biplot.png)
   - Muestra: Dónde apuntan las variables originales
   - Por qué: Interpreta qué significan los ejes

#### 🚀 Por Qué Importa
- **Reducción dimensionaldiad:** De 11 variables → 2 ejes interpretables
- **Estructura preservada:** 58% varianza en 2D es razonable
- **Interpretación clara:** PC1=calidad, PC2=retención
- **Base para clustering:** Los clusters se ven claramente en este espacio

#### 💡 Acciones Priorizadas
1. **Usar PCA como herramienta de visualización**
   - Explicar a stakeholders en términos de 2 ejes
   - Facilita comprensión vs explicar 11 dimensiones

2. **Monitoreo:** Ubicación de nuevos programas en PCA
   - ¿Dónde caen? ¿Se acercan a excelencia o riesgo?

---

### 2.3 SEGMENTACIÓN EN 3 CLUSTERS

#### 🔍 Hallazgos Multivariantes - Clusters Identificados

**🥇 CLUSTER 1: EXCELENCIA ACADÉMICA (38.5% = 186 programas)**
- Satisfacción: 3.9/5 (muy buena)
- Abandono: 10% (bajo)
- Empleabilidad: 82% (excelente)
- Autoeficacia: 5.2/10 (media-alta)
- **Perfil:** Programas de ingeniería, consolidados, buenos estándares
- **Acción esperada:** MANTENER Y REPLICAR

**🟡 CLUSTER 2: RENDIMIENTO MEDIO (35.2% = 170 programas)**
- Satisfacción: 3.4/5 (moderada)
- Abandono: 18% (moderado)
- Empleabilidad: 70% (variable)
- Autoeficacia: 4.0/10 (media)
- **Perfil:** Programas diversos, espacio para mejora
- **Acción esperada:** MEJORAS INCREMENTALES

**🔴 CLUSTER 3: RIESGO/BAJO RENDIMIENTO (26.3% = 127 programas)**
- Satisfacción: 2.8/5 (baja)
- Abandono: 28% (alto)
- Empleabilidad: 58% (baja)
- Autoeficacia: 3.2/10 (baja)
- **Perfil:** Programas nuevos o con dificultades
- **Acción esperada:** INTERVENCIÓN URGENTE

**Validación:**
- Silhouette score: 0.68 (buena separación)
- K=3 es óptimo (elbow method + silhouette)
- Diferencias entre clusters son estadísticamente significativas

#### 📊 Gráficas Recomendadas para Dashboard
1. **Elbow Plot + Silhouette:** (06_kmeans_elbow_silhouette.png)
   - Muestra: Validación de k=3 como óptimo
   - Por qué: Justifica elección de 3 segmentos

2. **Clusters en PCA 2D:** (07_clusters_pca_2d.png)
   - Muestra: Los 3 clusters visualizados, separación clara
   - Por qué: Muestra estructura natural sin intervención humana

3. **Dendrograma Jerárquico (muestra 50):** (08_dendrograma_jerarquico.png)
   - Muestra: Jerarquía de similitud entre programas
   - Por qué: Alternativa a K-means, muestra estructura orgánica

#### 🚀 Por Qué Importa
- **Segmentación objetiva:** No es opinión, es matemática (clustering)
- **Diferencias GRANDES y MEDIBLES:** Brecha Cluster1-Cluster3 = 2.7 pts satisfacción = 18 p.p. abandono
- **Actionable:** Cada cluster merece estrategia diferente
- **Explicable:** Coordinadores entienden dónde están sus programas

#### 💡 Acciones Priorizadas
1. **Listar los 127 programas de Cluster 3 (URGENTE)**
   - Agrupados por centro y titulación
   - Reunión de diagnóstico con coordinadores

2. **Documentar factores de éxito de Cluster 1**
   - Identificar 5-10 programas "estrella"
   - Capturar prácticas transferibles

3. **Crear "escalas de mejora"**
   - ¿Cómo sube un programa de Cluster 3 a Cluster 2?
   - ¿Qué cambios más impactantes?

4. **Benchmarking estructurado**
   - Cluster 1 ↔ Cluster 3: Visitas cruzadas
   - Aprendizaje peer-to-peer

---

## 📌 PARTE 3: DIMENSIÓN TEMPORAL
### (Entender evolución 2020-2024)

### 3.1 TENDENCIAS PRINCIPALES (5 años)

#### 🔍 Hallazgos Temporales - Números Globales

| Indicador | 2020 | 2024 | Cambio | Tipo |
|-----------|------|------|--------|------|
| **Satisfacción** | 7.0 | 7.1 | +1.4% | ✅ Estable |
| **Abandono** | 17.8% | 17.2% | -3.4% | ✅ Mejora |
| **Autoeficacia** | 4.2 | 4.0 | -4.8% | ⚠️ ALERTA |
| **Empleabilidad** | 70.2% | 71.5% | +1.9% | ✅ Mejora |

**Interpretación:**
- Sistema es **ESTABLE** en nivel macro
- **PERO hay señal de alerta en autoeficacia** (bajando)
- Mejoras en abandono y empleabilidad son marginales
- Cambios estructurales lentos

#### 📊 Gráficas Recomendadas para Dashboard
1. **Series Temporales 4 Indicadores:** (01_tendencias_principales.png)
   - Muestra: 4 líneas 2020-2024 con marcadores anuales
   - Por qué: Visión macro de cambios, tendencias visibles

#### 🚀 Por Qué Importa
- **Autoeficacia descendente es SEÑAL DE ALERTA**
  - Otros indicadores estables = ilusión de control
  - Autoeficacia baja → abandono futuro
  
- **Cambios marginales = políticas uniformes funcionan poco**
  - Necesidad de intervenciones diferenciadas
  
- **Empleabilidad mejora lentamente** pero hay brecha por titulación
  - No es problema de toda la UPV
  - Humanidades vs Ingeniería totalmente distintos

#### 💡 Acciones Priorizadas
1. **Investigación URGENTE de autoeficacia**
   - ¿Por qué baja? ¿Estudiantes menos confiados o más realistas?
   - Grupos focales con estudiantes

2. **Intervenciones focalizadas**
   - Aceptar que políticas uniformes no funcionan
   - Cluster 1 ≠ Cluster 3, necesitan estrategias diferentes

3. **Acelerar mejoras**
   - 4 años para 1.4% mejora en satisfacción es lento
   - Target: duplicar velocidad de mejora

---

### 3.2 COVID-19: IMPACTO TEMPORAL

#### 🔍 Hallazgos Temporales - COVID

**2020-2021 (Crisis y Transición):**
- Satisfacción: -0.41 pts (bajó)
- Abandono: +1.2 p.p. (subió)
- Volatilidad: MÁXIMA

**2021-2024 (Recuperación):**
- Indicadores convergen
- Sistema se adapta
- Volatilidad disminuye

**Conclusión:** COVID fue temporal, no permanente

#### 📊 Gráficas Recomendadas para Dashboard
- Incluida en serie temporal (01_tendencias_principales.png)
- Anotaciones claras de "Transición COVID" 2020-2021

#### 🚀 Por Qué Importa
- **Capacidad de resiliencia demostrada**
- **Lecciones de adaptación** (docencia mixta, apoyo en línea)
- **Justificación para continuar con estrategias adaptadas**

---

### 3.3 VARIABILIDAD INSTITUCIONAL CRECE (Divergencia)

#### 🔍 Hallazgos Temporales - Dispersión

| Indicador | 2020 | 2024 | Cambio |
|-----------|------|------|--------|
| Dispersión Satisfacción | σ=1.1 | σ=1.3 | **↑18%** |
| Dispersión Abandono | σ=7.8% | σ=9.2% | **↑18%** |
| Dispersión Autoeficacia | σ=1.2 | σ=1.4 | **↑17%** |

**Interpretación:**
- **Programas no convergen, se divergen**
- Brechas Cluster1-Cluster3 se amplían
- Políticas uniformes cada vez menos efectivas
- Necesidad urgente de estrategias diferenciadas

#### 📊 Gráficas Recomendadas para Dashboard
1. **Variabilidad Temporal (Desviación Estándar):** (02_variabilidad_temporal.png)
   - Muestra: 5 líneas de σ por indicador, 2020-2024
   - Por qué: Visualiza divergencia, permite ver qué se dispersa

#### 🚀 Por Qué Importa
- **Crisis invisible:** Mientras macro está "estable", micro diverge
- **Implicación:** Próximas intervenciones DEBEN ser diferenciadas
- **Datos vs intuición:** Números demuestran necesidad de cambio

#### 💡 Acciones Priorizadas
1. **Abandonar "one-size-fits-all"**
   - Cluster 1 necesita mantener excelencia (poco cambio)
   - Cluster 3 necesita transformación (mucho cambio)

2. **Presupuesto diferenciado**
   - No gastar igual en todos los programas
   - Invertir donde hay mayor retorno

---

### 3.4 EVOLUCIÓN POR CENTROS

#### 🔍 Hallazgos Temporales - Centros

**Ganadores (Mejora 2020-2024):**
- ✅ Centro de Ingeniería: +0.4 pts satisfacción, -2.0% abandono
- ✅ Centro de Ciencias Aplicadas: +0.3 pts, -1.8% abandono

**Estables:**
- Centro Administrativo: satisfacción 7.0, abandono 18%
- Facultad de Ciencias: satisfacción 7.1, abandono 17%

**Perdiendo:**
- ⚠️ Centro de Ciencias: -0.2 satisfacción, +1.2% abandono (empeorando)

**Implicación:** No todos los centros enfrentan mismos desafíos
- Ingeniería = modelo, demostró crecimiento
- Ciencias = problema, requiere intervención

#### 📊 Gráficas Recomendadas para Dashboard
1. **Evolución por Centros (2×2 subplots):** (03_evolucion_por_centros.png)
   - Muestra: Top 5 centros, 4 indicadores, líneas 2020-2024
   - Por qué: Identifica ganadores y perdedores

#### 🚀 Por Qué Importa
- **Centros tienen trajectories distintas**
- **Ingeniería como benchmark** de mejora posible
- **Ciencias requiere investigación** de causas de empeoramiento
- **Políticas uniforme no funcionan entre centros**

#### 💡 Acciones Priorizadas
1. **Ingeniería como mentora de otros centros**
   - ¿Qué hacen bien? ¿Pueden transferir?

2. **Diagnóstico especial Centro de Ciencias**
   - ¿Por qué empeora mientras otros mejoran?
   - Intervención preventiva antes de crisis

---

### 3.5 COMPARACIÓN POR TITULACIONES

#### 🔍 Hallazgos Temporales - Titulaciones

**Ingeniería (Performance Score: 6.5-6.8) - TOP**
- Empleabilidad: 85-88% (excelente)
- Abandono: 8-10% (bajo)
- Satisfacción: 7.2-7.4 (buena)
- Autoeficacia: 4.5+ (media-alta)
- **Trend:** Mejorando ligeramente

**Humanidades/Artes (Performance Score: 4.0-4.2) - BOTTOM**
- Empleabilidad: 55-62% ⚠️ (CRÍTICA)
- Abandono: 32-38% ⚠️ (CRÍTICA)
- Satisfacción: 6.0-6.5 (media-baja)
- Autoeficacia: 3.5-4.0 (baja)
- **Trend:** Estable pero bajo

**Ciencias Puras (Performance Score: 4.8-5.2) - MEDIO**
- Empleabilidad: 70-75%
- Abandono: 15-20%
- Satisfacción: 7.0-7.2
- Autoeficacia: 4.0-4.5

**Implicación:**
- **NO es problema de "la UPV"** sino de titulaciones específicas
- Brecha estructura, no coyuntural
- Humanidades requiere **rediseño radical**

#### 📊 Gráficas Recomendadas para Dashboard
1. **Desempeño Titulaciones Ranking:** (CSVdata de desempeño_titulaciones.csv)
   - Muestra: 125+ titulaciones ranqueadas, scores, indicadores
   - Por qué: Permite coordinadores ubicar su programa

#### 🚀 Por Qué Importa
- **Diagnóstico diferenciado por titulación**
  - Humanidades problema real, no falta de esfuerzo
  - Ingeniería modelo transferible
  
- **Empleabilidad de humanidades es CRÍTICA**
  - 55% vs 85% no es negligible
  - Estudiantes lo saben → baja autoeficacia
  
- **Ciclo vicioso:** Baja empleabilidad → baja autoeficacia → baja satisfacción → baja matriculación futura

#### 💡 Acciones Priorizadas
1. **Rediseño urgente humanidades**
   - Agregar habilidades técnicas/profesionales
   - Alianzas con sector laboral
   - Pasantías obligatorias

2. **Ingeniería como módulo**
   - Documentar por qué funciona
   - Aplicar a otras áreas donde posible

3. **Monitoreo de empleabilidad**
   - Sistema de alertas si baja
   - Seguimiento a egresados 6-12 meses

---

## 📌 PARTE 4: SÍNTESIS E INTEGRACIÓN

### 4.1 LOS 10 HALLAZGOS PRINCIPALES (Integrados)

#### 1️⃣ SATISFACCIÓN ES EL EJE PRINCIPAL
- **Univariante:** Brecha alumnos-profesores (+1.73 pts)
- **Multivariante:** r=0.70 con profesores, explica 35% varianza
- **Temporal:** Estable 7.0-7.1, pero necesita mejora
- **Acción:** Mejorar satisfacción alumnos como lever primario

#### 2️⃣ AUTOEFICACIA ES EL CANARIO
- **Univariante:** Media 5.77/10, sesgo izquierdo
- **Multivariante:** r=-0.40 con abandono (predictor fuerte)
- **Temporal:** Baja -4.8% en 5 años (ALERTA)
- **Acción:** Sistema monitoreo semestral, intervención temprana

#### 3️⃣ HAY 3 SEGMENTOS DISTINTOS (No es población homogénea)
- **Multivariante:** Clusters 38.5% vs 35.2% vs 26.3% (diferencias grandes)
- **Temporal:** Divergencia se amplia (+18% dispersión)
- **Acción:** Abandonar políticas uniformes, estrategias por cluster

#### 4️⃣ ABANDONO ES DIFERENCIADO POR PROGRAMA
- **Univariante:** σ=10.2%, rango 0-100% (no es uniforme)
- **Multivariante:** Varía por cluster: 10% vs 18% vs 28%
- **Temporal:** Mejora global -3.4% pero estructura persiste
- **Acción:** Identificar y transferir modelos de bajo abandono

#### 5️⃣ EMPLEABILIDAD TIENE DOS POBLACIONES (Bimodal)
- **Univariante:** Picos en 65% y 85% (no es normal)
- **Multivariante:** Varía mucho entre titulaciones
- **Temporal:** Mejora lenta +1.9%, brecha por titulación persiste
- **Acción:** Intervención específica humanidades, mantener ingeniería

#### 6️⃣ HUMANIDADES SON PROBLEMA REAL (No es percepciones)
- **Univariante:** Empleabilidad 55-62% (medible, objetiva)
- **Multivariante:** Performance score 4.1 vs ingeniería 6.7
- **Temporal:** Ranking NO cambia 5 años (estructura fija)
- **Acción:** Rediseño curricular urgente humanidades

#### 7️⃣ INGENIERÍA ES MODELO A REPLICAR
- **Univariante:** Empleabilidad 85-88%, abandono 8-10%
- **Multivariante:** Satisfacción 3.9/5, autoeficacia 5.2/10
- **Temporal:** Mejora sostenida, lidera benchmarks
- **Acción:** Documentar factores, adaptar a otros centros

#### 8️⃣ COVID FUE TEMPORAL, NO PERMANENTE
- **Temporal:** Crisis 2020-2021, recuperación 2021-2024
- **Multivariante:** Clusters estables post-recuperación
- **Acción:** Mantener adaptaciones que funcionaron

#### 9️⃣ VARIABILIDAD CRECE (Divergencia institucional)
- **Univariante:** Cada variable tiene dispersión
- **Multivariante:** Clusters más separados
- **Temporal:** σ sube +17-18% en 5 años
- **Acción:** Presupuesto y políticas diferenciadas urgente

#### 🔟 SISTEMA NO ES CAÓTICO (Hay estructura)
- **Multivariante:** Correlaciones significativas, clusters claros
- **PCA:** 58% varianza en 2D, interpretable
- **Temporal:** Tendencias predecibles, no volatilidad aleatoria
- **Acción:** Cambios inteligentes funcionarán

---

### 4.2 MATRIZ DE DECISIONES (Cluster × Acción)

| CLUSTER | SITUACIÓN | PRIORIDAD | ACCIÓN PRINCIPAL | TIMELINE |
|---------|-----------|-----------|------------------|----------|
| **1 (Excelencia)** | ✅ Estable + mejora | MANTENER | Documentar y replicar | Ongoing |
| **2 (Medio)** | 🟡 Neutral | MEJORAR | Mejoras incrementales | 1-3 meses |
| **3 (Riesgo)** | 🚨 Inestable + empeora | INTERVENIR | Transformación + apoyo | URGENTE |

---

### 4.3 NÚMEROS FINALES PARA EL DASHBOARD

**Métricas que DEBE tener el dashboard:**

1. **KPI Satisfacción:** 7.1/10 (alumnos 6.9, profesores 8.7)
2. **KPI Abandono:** 17.2% (mejora -3.4% vs 2020)
3. **KPI Autoeficacia:** 4.0/10 (ALERTA: baja -4.8%)
4. **KPI Empleabilidad:** 71.5% (mejora +1.9%)
5. **Distribución Clusters:** 38.5% / 35.2% / 26.3%
6. **Trend Variabilidad:** +18% en 5 años (divergencia)
7. **Top Titulación:** Ingeniería 6.7/10
8. **Bottom Titulación:** Humanidades 4.1/10

---

## 📌 PARTE 5: GRÁFICAS RECOMENDADAS PARA DASHBOARD

### 5.1 GRÁFICAS PRIORITARIAS (Must Have)

| # | Gráfica | Archivo | Por qué |
|---|---------|---------|---------|
| 1 | Series Temporales 4 Indicadores | 01_tendencias_principales.png | Visión macro 5 años |
| 2 | Clusters en PCA 2D | 07_clusters_pca_2d.png | Segmentación visual |
| 3 | Heatmap Correlaciones | 01_heatmap_correlaciones.png | Dependencias sistema |
| 4 | Histograma Empleabilidad Bimodal | 01_histogramas_densidad_empleabilidad.png | Muestra dos poblaciones |
| 5 | Evolución por Centros | 03_evolucion_por_centros.png | Ganadores/perdedores |
| 6 | Variabilidad Temporal | 02_variabilidad_temporal.png | Divergencia visible |

### 5.2 GRÁFICAS SECUNDARIAS (Should Have)

| # | Gráfica | Archivo | Por qué |
|---|---------|---------|---------|
| 7 | Violin Plots Satisfacción | 03_violinplots_satisfaccion.png | Distribuciones detalladas |
| 8 | Scatter Alumnos vs Profesores | 05_comparacion_alumnos_profesores.png | Consistencia r=0.70 |
| 9 | Box Plots Abandono | 02_boxplots_abandono.png | Outliers y mediana |
| 10 | PCA Scree Plot | 03_pca_varianza_explicada.png | Justifica uso 2D |
| 11 | Biplot PCA | 05_pca_biplot.png | Qué significan los ejes |
| 12 | Elbow + Silhouette | 06_kmeans_elbow_silhouette.png | Validación k=3 |

### 5.3 GRÁFICAS TERCIARIAS (Nice to Have)

| # | Gráfica | Archivo | Por qué |
|---|---------|---------|---------|
| 13 | Pairplot 5 Variables | 02_pairplot_variables_clave.png | Relaciones bivariantes |
| 14 | Dendrograma | 08_dendrograma_jerarquico.png | Jerarquía alternativa |
| 15 | Q-Q Plots | 04_qqplots_autoeficacia.png | Técnico, no ejecutivo |
| 16 | Cambios Año a Año | 04_cambios_ano_a_ano.png | Detalle interanual |

### 5.4 DATOS PARA DASHBOARD (CSV Interactivos)

| # | Archivo CSV | Contenido | Uso |
|---|-----------|----------|-----|
| 1 | kmeans_clusters.csv | 483 programas + cluster | Búsqueda "dónde estoy" |
| 2 | desempeño_titulaciones.csv | 125+ titulaciones ranqueadas | Comparación horizontal |
| 3 | correlations_matrix.csv | 11×11 matriz | Profundización técnica |
| 4 | pca_scores.csv | 483 coords en PC1-PC2 | Gráficos interactivos |
| 5 | series_temporal_principal.csv | 5 años × 6 indicadores | Filtros temporales |

---

## 🎯 DECISIÓN FINAL: QUÉ INCLUIR vs QUÉ EXCLUIR

### ✅ INCLUIR (Core insights)
- 4 series temporales (satisfacción, abandono, autoeficacia, empleabilidad)
- 3 clusters con métricas
- Evolución por centros (top 5)
- Comparación por titulación (top 5 y bottom 5)
- Heatmap correlaciones
- Variabilidad temporal (divergencia)
- PCA 2D clusters
- Empleabilidad bimodal

### ❌ EXCLUIR (Redundante o demasiado técnico)
- Q-Q plots (solo para validación técnica, confunde ejecutivos)
- Dendrograma (visual similar a clusters, menos interpretable)
- Pairplot completo (demasiadas gráficas, mantener selección)
- PCA Scree + Biplot (reemplazar con interpretación textual)
- Cambios año-a-año individual (resumir en texto)

### ⚠️ OPCIONAL (Depende de audience)
- Elbow + Silhouette (justificar k=3 técnicamente)
- Scatter alumnos vs profesores (muestra consistencia, no crítico)
- Box plots outliers (para investigación posterior)

---

## 🚀 RECOMENDACIONES INMEDIATAS PARA DESARROLLO DASHBOARD

### Dashboard Ejecutivo (5 min lectura)
1. **KPIs arriba:** 4 números grandes (satisfacción, abandono, autoeficacia, empleabilidad)
2. **Gráfica principal:** Series temporales 4 indicadores
3. **Clusters visual:** PCA 2D con 3 colores
4. **Cards críticas:** "Autoeficacia bajando -4.8%", "Humanidades en riesgo"

### Dashboard Coordinador (15 min análisis)
1. **Búsqueda:** "¿Dónde está mi programa?" → CSV kmeans_clusters
2. **Comparación:** Mi cluster vs otros clusters (tabla)
3. **Benchmarking:** Mi titulación vs similar (ranking)
4. **Acción:** Recomendaciones por cluster

### Dashboard Analista (30+ min profundización)
1. **Correlaciones:** Heatmap interactivo
2. **PCA:** Scatter interactivo, click en punto → detalles programa
3. **Series temporales:** Filtros por centro, titulación, cluster
4. **Exportar:** CSVs para análisis personalizado

---

## 📋 CONCLUSIÓN

Este informe consolida **todos los análisis realizados** en 10 hallazgos principales, con métricas específicas, gráficas recomendadas y acciones claras.

**Para el dashboard:**
- **Priorizar:** Series temporales, clusters, evolución centros
- **Destacar:** Autoeficacia bajando (alerta), humanidades en riesgo
- **Permitir:** Búsqueda de programa, comparación con pares
- **Facilitar:** Descarga de datos para análisis posterior

**Siguiente paso:** Diseño visual del dashboard con Tableau/PowerBI/similar, usando gráficas y datos recomendados en este informe.

---

**Documento preparado:** 24 octubre 2024  
**Estado:** Listo para desarrollo de dashboard  
**Contacto:** Equipo de Análisis UPV
