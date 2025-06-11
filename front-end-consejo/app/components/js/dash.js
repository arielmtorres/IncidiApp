

function cargarDashboard() {
  fetch('./dashboard.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('view-container').innerHTML = html;
      // ✅ Ejecutar después de que el HTML fue insertado
      mostrarFechaHoy('fecha-hoy');
    });
}
