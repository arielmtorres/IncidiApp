import { cargarGraficoIncidentes } from './grafico_incidentes.js';

// ✅ Función que inicializa la pantalla de inicio
export function initInicio() {
  console.log('Inicio cargado correctamente');

  // ✔️ Asegura que el HTML ya fue cargado por loadComponent en incidenapp.js
  cargarGraficoIncidentes();
}
