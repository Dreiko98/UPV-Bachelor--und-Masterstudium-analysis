"""
Script para exportar el notebook a HTML con estilo corporativo profesional
Solo incluye resultados y markdown, sin código fuente
"""

import nbformat
from nbconvert import HTMLExporter
from nbconvert.preprocessors import Preprocessor
from traitlets.config import Config
import os

class RemoveCodePreprocessor(Preprocessor):
    """Preprocessor para eliminar celdas de código del notebook"""
    
    def preprocess(self, nb, resources):
        # Filtrar solo celdas de markdown y resultados
        new_cells = []
        for cell in nb.cells:
            if cell.cell_type == 'markdown':
                new_cells.append(cell)
            elif cell.cell_type == 'code':
                # Crear una celda que solo contenga los outputs
                if cell.outputs:
                    # Mantener solo los outputs, no el código
                    new_cell = nbformat.v4.new_code_cell()
                    new_cell.outputs = cell.outputs
                    new_cell.source = ''  # Sin código fuente
                    new_cells.append(new_cell)
        
        nb.cells = new_cells
        return nb, resources

# Configuración para el exportador HTML
c = Config()
c.HTMLExporter.preprocessors = ['export_notebook_html.RemoveCodePreprocessor']
c.HTMLExporter.exclude_input = True  # Excluir código de entrada
c.HTMLExporter.exclude_input_prompt = True  # Excluir prompts de entrada
c.HTMLExporter.exclude_output_prompt = True  # Excluir prompts de salida

# CSS personalizado con estilo corporativo UPV
custom_css = """
<style>
    /* Estilos corporativos UPV */
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f5f5f5;
        color: #333;
        line-height: 1.6;
        margin: 0;
        padding: 0;
    }
    
    .container {
        max-width: 1200px;
        margin: 0 auto;
        background-color: white;
        box-shadow: 0 0 20px rgba(0,0,0,0.1);
        padding: 40px;
    }
    
    /* Header corporativo */
    h1 {
        color: #003366;
        border-bottom: 4px solid #0066cc;
        padding-bottom: 15px;
        font-size: 2.5em;
        margin-top: 0;
    }
    
    h2 {
        color: #0066cc;
        border-left: 5px solid #0066cc;
        padding-left: 15px;
        margin-top: 40px;
        font-size: 1.8em;
    }
    
    h3 {
        color: #004080;
        margin-top: 30px;
        font-size: 1.3em;
    }
    
    /* Interpretaciones destacadas */
    h3:has(span) {
        background-color: #e6f2ff;
        padding: 15px;
        border-radius: 5px;
        border-left: 4px solid #0066cc;
    }
    
    /* Listas y texto */
    ul, ol {
        line-height: 1.8;
    }
    
    li {
        margin-bottom: 10px;
    }
    
    strong {
        color: #003366;
    }
    
    /* Tablas */
    table {
        border-collapse: collapse;
        width: 100%;
        margin: 20px 0;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    th {
        background-color: #003366;
        color: white;
        padding: 12px;
        text-align: left;
    }
    
    td {
        padding: 10px;
        border-bottom: 1px solid #ddd;
    }
    
    tr:hover {
        background-color: #f0f8ff;
    }
    
    /* Gráficos */
    .output_png {
        text-align: center;
        margin: 30px 0;
        padding: 20px;
        background-color: #fafafa;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    
    img {
        max-width: 100%;
        height: auto;
        border-radius: 4px;
    }
    
    /* Outputs de texto */
    .output_text {
        background-color: #f8f9fa;
        padding: 15px;
        border-radius: 5px;
        border-left: 3px solid #0066cc;
        font-family: 'Courier New', monospace;
        font-size: 0.9em;
        overflow-x: auto;
        margin: 20px 0;
    }
    
    /* Código (si queda alguno) */
    pre {
        background-color: #2d2d2d;
        color: #f8f8f2;
        padding: 15px;
        border-radius: 5px;
        overflow-x: auto;
    }
    
    code {
        background-color: #e8e8e8;
        padding: 2px 6px;
        border-radius: 3px;
        font-family: 'Courier New', monospace;
    }
    
    /* Secciones especiales */
    blockquote {
        border-left: 4px solid #0066cc;
        padding-left: 20px;
        margin-left: 0;
        color: #555;
        font-style: italic;
    }
    
    hr {
        border: none;
        border-top: 2px solid #0066cc;
        margin: 40px 0;
    }
    
    /* Footer */
    .footer {
        margin-top: 60px;
        padding-top: 20px;
        border-top: 2px solid #ddd;
        color: #777;
        font-size: 0.9em;
        text-align: center;
    }
    
    /* Responsive */
    @media print {
        body {
            background-color: white;
        }
        .container {
            box-shadow: none;
            padding: 20px;
        }
    }
    
    @media (max-width: 768px) {
        .container {
            padding: 20px;
        }
        h1 {
            font-size: 2em;
        }
        h2 {
            font-size: 1.5em;
        }
    }
</style>
"""

def export_notebook_to_html(notebook_path, output_path):
    """
    Exporta un notebook a HTML sin código, solo resultados y markdown
    
    Args:
        notebook_path: Ruta al archivo .ipynb
        output_path: Ruta donde guardar el HTML
    """
    
    # Leer el notebook
    with open(notebook_path, 'r', encoding='utf-8') as f:
        nb = nbformat.read(f, as_version=4)
    
    # Configurar el exportador
    html_exporter = HTMLExporter()
    html_exporter.exclude_input = True  # No mostrar código
    html_exporter.exclude_input_prompt = True
    html_exporter.exclude_output_prompt = True
    
    # Exportar a HTML
    (body, resources) = html_exporter.from_notebook_node(nb)
    
    # Añadir CSS personalizado
    html_with_style = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Análisis Integral de Variables - UPV</title>
        {custom_css}
    </head>
    <body>
        <div class="container">
            {body}
            <div class="footer">
                <p>© 2024 Universidad Politécnica de Valencia | Análisis Institucional</p>
            </div>
        </div>
    </body>
    </html>
    """
    
    # Guardar el archivo HTML
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html_with_style)
    
    print(f"✓ Notebook exportado exitosamente a: {output_path}")
    print(f"  Tamaño del archivo: {os.path.getsize(output_path) / 1024:.2f} KB")

if __name__ == "__main__":
    # Rutas
    notebook_path = r'c:\Users\GERMAN\OneDrive - UPV\UPV\CUARTO DE CARRERA\gpr\UPV-Bachelor--und-Masterstudium-analysis\analysis_sprint1.ipynb'
    output_path = r'c:\Users\GERMAN\OneDrive - UPV\UPV\CUARTO DE CARRERA\gpr\UPV-Bachelor--und-Masterstudium-analysis\analysis_sprint1_report.html'
    
    # Exportar
    export_notebook_to_html(notebook_path, output_path)
