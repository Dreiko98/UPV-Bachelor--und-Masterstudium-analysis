export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // UPVision Light Mode Palette - Tonos Pasteles
        primary: '#56CCF2',      // Azul cielo suave (logo)
        secondary: '#6FCF97',    // Verde menta (éxito/excelencia)
        success: '#6FCF97',      // Verde menta
        warning: '#F2C94C',      // Amarillo suave (intermedio)
        danger: '#FF8A80',       // Coral suave (riesgo)
        light: '#F8FAFC',        // Gris perla
        dark: '#1E293B',         // Texto oscuro
        medium: '#64748B',       // Texto medio
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '20px',
      },
    },
  },
  plugins: [],
}
