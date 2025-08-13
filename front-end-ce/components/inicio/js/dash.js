import { cargarGraficoIncidentes } from './grafico_incidentes.js';

// ✔️ Cargar el componente HTML
loadComponent('./components/inicio/html/index.html', 'principalBody', () => {
    // ✔️ Cuando el HTML está cargado, entonces dibujo el gráfico
    cargarGraficoIncidentes();
});