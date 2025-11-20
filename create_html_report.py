"""
Script mejorado para exportar notebook a HTML profesional
Incluye logo, mejor formato y navegación
"""

import nbformat
from nbconvert import HTMLExporter
import os

def create_professional_html(notebook_path, output_path):
    """Exporta notebook a HTML con estilo profesional UPV"""
    
    # Leer el notebook
    with open(notebook_path, 'r', encoding='utf-8') as f:
        nb = nbformat.read(f, as_version=4)
    
    # Configurar exportador
    html_exporter = HTMLExporter()
    html_exporter.exclude_input = True
    html_exporter.exclude_input_prompt = True
    html_exporter.exclude_output_prompt = True
    
    # Exportar
    (body, resources) = html_exporter.from_notebook_node(nb)
    
    # HTML completo con estilo profesional
    html_content = f"""<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Análisis Integral de Variables - UPV</title>
    <style>
        /* Reset y fuentes */
        * {{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }}
        
        body {{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            color: #2c3e50;
            line-height: 1.8;
            padding: 20px;
        }}
        
        /* Contenedor principal */
        .main-container {{
            max-width: 1400px;
            margin: 0 auto;
            background: white;
            box-shadow: 0 10px 40px rgba(0,0,0,0.15);
            border-radius: 10px;
            overflow: hidden;
        }}
        
        /* Header con logo */
        .header {{
            background: linear-gradient(135deg, #003366 0%, #0066cc 100%);
            color: white;
            padding: 40px;
            text-align: center;
            border-bottom: 5px solid #ffcc00;
        }}
        
        .header h1 {{
            font-size: 2.8em;
            margin-bottom: 10px;
            font-weight: 300;
            letter-spacing: 1px;
        }}
        
        .header .subtitle {{
            font-size: 1.2em;
            opacity: 0.9;
            font-weight: 300;
        }}
        
        /* Contenido */
        .content {{
            padding: 50px 60px;
        }}
        
        /* Títulos */
        h1 {{
            color: #003366;
            font-size: 2.5em;
            margin: 40px 0 20px 0;
            padding-bottom: 15px;
            border-bottom: 3px solid #0066cc;
        }}
        
        h2 {{
            color: #0066cc;
            font-size: 2em;
            margin: 50px 0 25px 0;
            padding-left: 20px;
            border-left: 6px solid #0066cc;
            background: linear-gradient(90deg, #e6f2ff 0%, transparent 100%);
            padding: 15px 20px;
            border-radius: 0 8px 8px 0;
        }}
        
        h3 {{
            color: #004080;
            font-size: 1.5em;
            margin: 35px 0 20px 0;
            padding: 12px 20px;
            background: #f0f8ff;
            border-left: 4px solid #0066cc;
            border-radius: 4px;
        }}
        
        h3::before {{
            content: "📊 ";
            margin-right: 8px;
        }}
        
        /* Párrafos y listas */
        p {{
            margin: 15px 0;
            text-align: justify;
        }}
        
        ul, ol {{
            margin: 20px 0 20px 40px;
        }}
        
        li {{
            margin: 12px 0;
            line-height: 1.8;
        }}
        
        strong {{
            color: #003366;
            font-weight: 600;
        }}
        
        /* Outputs de texto (estadísticas) */
        .output_text {{
            background: #f8f9fa;
            border: 1px solid #dee2e6;
            border-radius: 8px;
            padding: 25px;
            margin: 25px 0;
            font-family: 'Consolas', 'Monaco', monospace;
            font-size: 0.95em;
            overflow-x: auto;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }}
        
        .output_text pre {{
            margin: 0;
            white-space: pre-wrap;
            word-wrap: break-word;
        }}
        
        /* Contenedor de gráficos */
        .output_png {{
            text-align: center;
            margin: 40px 0;
            padding: 30px;
            background: #fafbfc;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        }}
        
        .output_png img {{
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }}
        
        /* Tablas */
        table {{
            width: 100%;
            border-collapse: collapse;
            margin: 25px 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            border-radius: 8px;
            overflow: hidden;
        }}
        
        th {{
            background: linear-gradient(135deg, #003366 0%, #0066cc 100%);
            color: white;
            padding: 15px;
            text-align: left;
            font-weight: 600;
            text-transform: uppercase;
            font-size: 0.9em;
            letter-spacing: 0.5px;
        }}
        
        td {{
            padding: 12px 15px;
            border-bottom: 1px solid #e9ecef;
        }}
        
        tr:hover {{
            background: #f0f8ff;
            transition: background 0.3s ease;
        }}
        
        tr:nth-child(even) {{
            background: #f8f9fa;
        }}
        
        /* Separadores */
        hr {{
            border: none;
            height: 3px;
            background: linear-gradient(90deg, transparent, #0066cc, transparent);
            margin: 50px 0;
        }}
        
        /* Blockquotes */
        blockquote {{
            border-left: 5px solid #0066cc;
            background: #f0f8ff;
            padding: 20px 25px;
            margin: 25px 0;
            border-radius: 0 8px 8px 0;
            font-style: italic;
            color: #555;
        }}
        
        /* Footer */
        .footer {{
            background: #2c3e50;
            color: white;
            padding: 30px;
            text-align: center;
            margin-top: 60px;
        }}
        
        .footer p {{
            margin: 8px 0;
            opacity: 0.9;
        }}
        
        /* Badges */
        .badge {{
            display: inline-block;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.85em;
            font-weight: 600;
            margin: 5px;
        }}
        
        .badge-primary {{
            background: #0066cc;
            color: white;
        }}
        
        .badge-success {{
            background: #28a745;
            color: white;
        }}
        
        .badge-warning {{
            background: #ffc107;
            color: #333;
        }}
        
        /* Navegación fija (índice) */
        .nav-index {{
            position: fixed;
            right: 20px;
            top: 100px;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            max-width: 250px;
            display: none; /* Oculto en móvil */
        }}
        
        @media (min-width: 1600px) {{
            .nav-index {{
                display: block;
            }}
        }}
        
        .nav-index h4 {{
            color: #003366;
            margin-bottom: 15px;
            font-size: 1em;
        }}
        
        .nav-index a {{
            display: block;
            color: #0066cc;
            text-decoration: none;
            padding: 8px 0;
            border-bottom: 1px solid #e9ecef;
            transition: padding-left 0.3s ease;
        }}
        
        .nav-index a:hover {{
            padding-left: 10px;
            color: #003366;
        }}
        
        /* Responsive */
        @media print {{
            body {{
                background: white;
                padding: 0;
            }}
            .main-container {{
                box-shadow: none;
                border-radius: 0;
            }}
            .nav-index {{
                display: none;
            }}
        }}
        
        @media (max-width: 768px) {{
            .header {{
                padding: 25px 20px;
            }}
            .header h1 {{
                font-size: 2em;
            }}
            .content {{
                padding: 30px 25px;
            }}
            h1 {{
                font-size: 1.8em;
            }}
            h2 {{
                font-size: 1.5em;
            }}
            h3 {{
                font-size: 1.2em;
            }}
        }}
    </style>
</head>
<body>
    <div class="main-container">
        <!-- Header -->
        <div class="header">
            <h1>📊 Análisis Integral de Variables</h1>
            <div class="subtitle">Universidad Politécnica de Valencia (UPV)</div>
            <div class="subtitle" style="margin-top: 10px; font-size: 0.9em;">
                Bachelor & Masterstudium | Panel Maestro 2020-2023
            </div>
        </div>
        
        <!-- Contenido del notebook -->
        <div class="content">
            {body}
        </div>
        
        <!-- Footer -->
        <div class="footer">
            <p><strong>Universidad Politécnica de Valencia</strong></p>
            <p>Análisis Institucional | Noviembre 2024</p>
            <p style="margin-top: 15px; font-size: 0.9em; opacity: 0.7;">
                Este informe contiene información confidencial de uso interno
            </p>
        </div>
    </div>
</body>
</html>"""
    
    # Guardar archivo
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    file_size = os.path.getsize(output_path) / 1024
    print(f"\n{'='*80}")
    print(f"✓ EXPORTACIÓN EXITOSA")
    print(f"{'='*80}")
    print(f"  📄 Archivo: {os.path.basename(output_path)}")
    print(f"  📁 Ubicación: {os.path.dirname(output_path)}")
    print(f"  💾 Tamaño: {file_size:.2f} KB")
    print(f"\n  🌐 Para ver el informe, abre el archivo HTML en tu navegador")
    print(f"{'='*80}\n")

if __name__ == "__main__":
    notebook_path = r'c:\Users\GERMAN\OneDrive - UPV\UPV\CUARTO DE CARRERA\gpr\UPV-Bachelor--und-Masterstudium-analysis\analysis_sprint1.ipynb'
    output_path = r'c:\Users\GERMAN\OneDrive - UPV\UPV\CUARTO DE CARRERA\gpr\UPV-Bachelor--und-Masterstudium-analysis\Informe_Analisis_UPV.html'
    
    create_professional_html(notebook_path, output_path)
