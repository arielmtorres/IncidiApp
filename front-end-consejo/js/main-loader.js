// SPA loader básico como Angular pero sin framework
async function loadComponent(componentPath, targetId) {
  const res = await fetch(componentPath);
  const html = await res.text();
  document.getElementById(targetId).innerHTML = html;
}

// Cargar menú (sidebar fijo)
loadComponent('app/components/sidebar.html', 'sidebar-container');

// Cargar pantalla principal por defecto
loadComponent('app/components/dashboard.html', 'view-container');

// Interacción sin usar botones aún conectados
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const texto = e.target.textContent.trim();

     switch (texto) {
      case 'INICIO':
        loadComponent('app/components/dashboard.html', 'view-container', () => {
          mostrarFechaHoy('fecha-hoy');
        });
        break;

      case 'INCIDENCIAS':
        loadComponent('app/components/incidencias.html', 'view-container');
        break;

      case 'NUEVA':
        loadComponent('app/components/inciNuev.html', 'view-container');
        break;

      case 'MODIFICAR':
        loadComponent('app/components/inciModi.html', 'view-container');
        break;

      case 'ELIMINAR':
        loadComponent('app/components/inciElim.html', 'view-container');
        break;

      case 'PROVEEDORES':
        console.log('Cargando proveedores...');
        loadComponent('app/components/proveedores.html', 'view-container', configurarModal);
        break;

      case 'NUEVO':
        loadComponent('app/components/provNuev.html', 'view-container');
        break;

      case 'EDITAR':
        loadComponent('app/components/provModi.html', 'view-container');
        break;

      case 'BORRAR':
        loadComponent('app/components/provElim.html', 'view-container');
        break;

      case 'TRAZABILIDAD':
        loadComponent('app/components/trazabilidad.html', 'view-container');
        break;

      case 'Ver Detalle':
        loadComponent('app/components/detalle.html', 'view-container');
        break;

      case 'VOLVER':
        loadComponent('app/components/dashboard.html', 'view-container');
        break;

      case 'CREAR':
        loadComponent('app/components/crear-novedad.html', 'view-container', configurarModal);
        break;
    }
  }
});




function cargarDashboard() {
  fetch('./dashboard.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('view-container').innerHTML = html;
      // ✅ Ejecutar después de que el HTML fue insertado
      mostrarFechaHoy('fecha-hoy');
    });
}









