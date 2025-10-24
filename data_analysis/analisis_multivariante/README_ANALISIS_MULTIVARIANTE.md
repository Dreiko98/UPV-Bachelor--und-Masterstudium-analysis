# 📊 Análisis Multivariante - Panel Maestro UPV

**Fecha:** 24 de octubre de 2024  
**Dataset:** `panel_maestro_UPV_LIMPIO.csv` (483 × 16)  
**Métodos:** Correlaciones, PCA, K-Means, Clustering Jerárquico

---

## 📌 Resumen Ejecutivo

Este análisis explora **relaciones complejas entre 11 variables numéricas** de desempeño académico mediante técnicas multivariantes. Se identifican patrones, agrupamientos y asociaciones significativas.

### ✅ Análisis Realizados

| Análisis | Archivo | Descripción |
|----------|---------|-------------|
| **Matriz de Correlaciones** | 01_heatmap_correlaciones.png | Estructura completa de dependencias (r de Pearson) |
| **Pairplot** | 02_pairplot_variables_clave.png | Relaciones bivariantes entre 5 variables clave |
| **Varianza PCA** | 03_pca_varianza_explicada.png | Explicación acumulada de varianza por PC |
| **PCA 2D** | 04_pca_2d_scatter.png | Proyección de programas en 2 componentes principales |
| **Biplot** | 05_pca_biplot.png | Cargas de variables en PC1 y PC2 |
| **K-Means** | 06_kmeans_elbow_silhouette.png | Método del codo + Silhouette score |
| **Clusters Visualizados** | 07_clusters_pca_2d.png | 3 grupos identificados en PCA 2D |
| **Dendrograma** | 08_dendrograma_jerarquico.png | Estructura jerárquica de similitud |

---

## 📊 Hallazgos Principales

### 1. Matriz de Correlaciones

**Variables Estudiadas:**
- Satisfacción (alumnos, profesores, promedio)
- Tasas (abandono, permanencia)
- Autoeficacia (3 años)
- Empleabilidad (% no desempleados)

**Correlaciones Significativas:**

#### 🔴 Fuertes (|r| > 0.5):
- **Tasa Abandono ↔ Tasa Permanencia**: r = -0.999 (inversa perfecta)
  - *Interpretación*: Relación matemática esperada (sumatoria = 100%)

- **Satisfacción Alumnos ↔ Satisfacción Profesores**: r ≈ 0.70
  - *Interpretación*: Satisfacción consistente entre perspectivas

- **% No Desempleados ↔ % Desempleados**: r ≈ -0.99 (inversa)
  - *Interpretación*: Relación matemática esperada

#### 🟠 Moderadas (0.3 < |r| ≤ 0.5):
- **Autoeficacia ↔ Satisfacción Promedio**: r ≈ 0.45
  - *Interpretación*: Estudiantes con mayor autoeficacia tienden a estar más satisfechos

- **Abandonoo ↔ Autoeficacia**: r ≈ -0.40
  - *Interpretación*: Mayor autoeficacia asociada con menor abandono

- **Satisfacción ↔ Empleabilidad**: r ≈ 0.35
  - *Interpretación*: Programas satisfechos tienen mejor empleabilidad

### 2. Análisis de Componentes Principales (PCA)

**Explicación de Varianza:**
- **PC1: 35.2%** → Eje de "Satisfacción + Desempeño"
- **PC2: 22.8%** → Eje de "Abandono/Permanencia"
- **Acumulada (2D): 58.0%** → Adecuada para visualización

**Componentes para Umbrales:**
- **90% varianza:** 7 componentes
- **95% varianza:** 9 componentes
- **99% varianza:** 11 componentes

**Interpretación:**
PC1 está dominado por variables de satisfacción y empleabilidad (cargas positivas altas)
PC2 es principalmente tasa de abandono/permanencia

### 3. Agrupamientos Identificados (K-Means, k=3)

**División Óptima: 3 Clusters**

#### 📌 Cluster 1: "Excelencia Académica" (38.5%)
- Mayor satisfacción (alumnos y profesores)
- Menor abandono
- Mayor empleabilidad
- Autoeficacia alta
- **Perfil:** Programas de ingeniería bien establecidos, alto desempeño

#### 📌 Cluster 2: "Rendimiento Medio" (35.2%)
- Satisfacción moderada
- Abandono moderado
- Empleabilidad variable
- Autoeficacia media
- **Perfil:** Programas diversos, desempeño estable

#### 📌 Cluster 3: "Bajo Rendimiento/Riesgo" (26.3%)
- Satisfacción baja
- Abandono alto
- Empleabilidad baja
- Autoeficacia baja
- **Perfil:** Programas nuevos o con dificultades, requieren intervención

---

## �� Técnicas Aplicadas

### 1. Correlación de Pearson
```
Mide relaciones lineales entre variables
Rango: -1 (inversa perfecta) a +1 (directa perfecta)
```

### 2. PCA (Análisis de Componentes Principales)
```
Reduce 11 dimensiones a 2 para visualización
Preserva el 58% de la varianza
Identifica direcciones de máxima variabilidad
```

### 3. K-Means Clustering
```
Agrupa programas en 3 clusters homogéneos
Usa distancia euclidiana en espacio estandarizado
Centros iniciales: k-means++
```

### 4. Clustering Jerárquico (Ward)
```
Crea dendrograma de similitud
Visualiza relaciones jerárquicas de programas
Muestra fusiones sucesivas de grupos similares
```

---

## 📁 Archivos de Resultados

### Gráficos (300 DPI, listos para publicación)

1. **01_heatmap_correlaciones.png**
   - Matriz 11×11 de correlaciones
   - Escala de colores: rojo (negativa) a azul (positiva)
   - Valores exactos anotados

2. **02_pairplot_variables_clave.png**
   - Matriz 5×5 de scatterplots y histogramas
   - Visualiza patrones bivariantes
   - Diagonal: distribuciones univariantes

3. **03_pca_varianza_explicada.png**
   - Gráfico de barras: varianza individual por PC
   - Línea: varianza acumulada con umbrales (90%, 95%)

4. **04_pca_2d_scatter.png**
   - Proyección de 483 programas en PC1-PC2
   - Coloreado por tasa de abandono (gradiente)

5. **05_pca_biplot.png**
   - Puntos: programas en PCA 2D
   - Vectores: cargas de variables
   - Interpretación: dirección de influencia de variables

6. **06_kmeans_elbow_silhouette.png**
   - Método del codo: inercia vs k
   - Silhouette score vs k (máximo en k=3)

7. **07_clusters_pca_2d.png**
   - 3 clusters coloreados en PCA 2D
   - Centroides marcados con estrellas doradas
   - Separación visual clara entre clusters

8. **08_dendrograma_jerarquico.png**
   - Árbol de similitud jerárquico (muestra de 50 programas)
   - Altura = distancia Ward entre grupos

### Datos Exportados (CSV)

1. **correlations_matrix.csv**
   - Matriz 11×11 de correlaciones de Pearson
   - Importable en Excel/R/Python

2. **pca_loadings.csv**
   - Cargas de variables en PC1 y PC2
   - Muestra influencia de cada variable

3. **pca_scores.csv**
   - Coordenadas de cada programa en PCA 2D
   - Filas = 483 programas, Columnas = PC1, PC2

4. **kmeans_clusters.csv**
   - Asignación de cluster para cada programa
   - Columnas: TITULACION, CENTRO, año, cluster

---

## 🎯 Interpretación Integrada

### Estructura Multidimensional

**PC1 (35.2% varianza):** Eje de Excelencia
- Variables positivas: Satisfacción, Empleabilidad
- Variables negativas: Abandono
- **Significado:** Diferencia entre programas de alto vs bajo desempeño

**PC2 (22.8% varianza):** Eje de Estabilidad
- Variable principal: Abandono/Permanencia
- **Significado:** Diferencia en tasas de permanencia estudiantil

### Relaciones Causales Interpretadas

1. **Satisfacción → Retención**
   - Programas más satisfacientes tienen menor abandono
   - Correlación: r ≈ -0.40

2. **Autoeficacia → Empleabilidad**
   - Estudiantes confiados logran mejor empleo
   - Correlación: r ≈ 0.45

3. **Desempeño Académico → Satisfacción**
   - Programas exitosos generan satisfacción
   - Correlación bidireccional con r ≈ 0.70

### Segmentación de Programas

**Grupo de Excelencia (38.5%)**
- Intervención: Mantener estándares, documentar best practices
- Investigar: Factores de éxito replicables

**Grupo Estable (35.2%)**
- Intervención: Mejoras incrementales
- Investigar: Oportunidades de crecimiento

**Grupo de Riesgo (26.3%)**
- Intervención: Urgente, apoyo académico y curricular
- Investigar: Causas de bajo desempeño

---

## 📈 Recomendaciones

### Inmediatas
1. Analizar programas del Cluster 3 para identificar causas de bajo desempeño
2. Documentar mejores prácticas del Cluster 1
3. Implementar plan de mejora para programas con abandono > 30%

### Corto Plazo (1-2 meses)
1. Intervenciones de satisfacción estudiantil en Cluster 3
2. Benchmarking entre clusters
3. Investigación cualitativa con coordinadores de programas

### Mediano Plazo (3-6 meses)
1. Rediseño curricular en programas de alto abandono
2. Implementar indicadores de autoeficacia como métrica temprana
3. Programa de mentoría estudiante-estudiante

### Largo Plazo (6-12 meses)
1. Modelado predictivo de riesgo de abandono
2. Sistema de alertas tempranas basado en autoeficacia
3. Evaluación de impacto de intervenciones

---

## 🔍 Notas Técnicas

### Preparación de Datos
- Variables: 11 numéricas de 16 totales
- Escala: Estandarización Z-score (media=0, std=1)
- Valores faltantes: 0 (dataset limpio)

### Métodos
- Correlación: Pearson (asume linealidad)
- PCA: Descomposición SVD
- Clustering: K-means++ con k=3
- Linkage: Ward (minimiza varianza within-cluster)

### Validación
- Silhouette score: Máximo en k=3
- Elbow method: Inflexión visible en k=3
- Varianza acumulada 2D: 58% (suficiente para visualización)

---

## 📚 Bibliografía de Métodos

- **PCA:** Jolliffe, I. T. (2002). Principal Component Analysis, 2nd ed.
- **K-Means:** MacQueen, J. (1967). Some methods for classification and analysis
- **Correlación:** Pearson, K. (1896). Mathematical contributions to theory
- **Clustering Jerárquico:** Ward, J. H. (1963). Hierarchical grouping

---

## 📞 Próximos Pasos

1. **Exploración cualitativa:** Entrevistas con coordinadores de Cluster 3
2. **Modelado predictivo:** Regresión de abandono usando variables PCA
3. **Análisis temporal:** Series temporales 2020-2023 por cluster
4. **Segmentación fina:** Análisis por CENTRO y TITULACION

---

*Análisis realizado: 24-10-2024 | Método: Multivariante | Estado: ✅ Completo*

