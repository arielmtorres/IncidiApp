//SIDEBAR HOVER
function activarSidebarHover() {
  const buttons = document.querySelectorAll('.sidebar-button');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });
}


// SPA loader
async function loadComponent(componentPath, targetId, callback) {
  try {
    const res = await fetch(componentPath);
    const html = await res.text();
    document.getElementById(targetId).innerHTML = html;
    if (callback) callback(); // ejecutar código después de cargar
  } catch (error) {
    console.error(`Error cargando ${componentPath}:`, error);
  }
}

// Cargar menú (sidebar fijo)
loadComponent('app/components/sidebar.html', 'sidebar-container', activarSidebarHover);






// En utils.js
export function mostrarFechaHoy(idElemento) {

}


// Cargar pantalla principal por defecto con fecha
loadComponent('app/components/dashboard.html', 'view-container', () => {
  mostrarFechaHoy('fecha-hoy');
});

// SPA navigation
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
        loadComponent('app/components/incidencias.html', 'view-container', configurarModal);
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
        loadComponent('app/components/provEdit.html', 'view-container');
        break;

      case 'BORRAR':
        loadComponent('app/components/provElim.html', 'view-container');
        break;

      case 'TRAZABILIDAD':
        loadComponent('app/components/trazabilidad.html', 'view-container', () => {
          initTrazabilidad(); // ✅ Ahora se llama después de que el HTML se haya cargado
        });
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

// Modal config, llamado solo cuando se carga el contenido que lo necesita
function configurarModal() {
  const btnAbrir = document.getElementById('btn-asignar');
  const modal = document.getElementById('modal-proveedor');
  const btnCerrar = document.getElementById('btn-cerrar-modal');
  const btnAsignar = document.getElementById('btn-confirmar-asignacion');

  if (!btnAbrir || !modal) return;

  btnAbrir.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  btnCerrar?.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  btnAsignar?.addEventListener('click', () => {
    modal.style.display = 'none';
    // Lógica para guardar
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// Dropdown avatar
const avatar = document.getElementById("avatar");
const dropdown = document.getElementById("user-dropdown");

if (avatar && dropdown) {
  avatar.addEventListener("click", () => {
    dropdown.classList.toggle("hidden");
  });
}

// Tabla seleccionable al cargar resumen
document.addEventListener("DOMContentLoaded", function () {
  const filas = document.querySelectorAll("table.resumen tbody tr");

  filas.forEach((fila) => {
    fila.addEventListener("click", function () {
      filas.forEach((f) => f.classList.remove("selected"));
      this.classList.add("selected");
    });
  });
});


//HOVER DE BOTONES DE SIDEBAR



  document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los botones del sidebar
    const buttons = document.querySelectorAll('.sidebar-button');

    buttons.forEach(button => {
      button.addEventListener('click', function () {
        // Quitar clase 'active' de todos los botones
        buttons.forEach(btn => btn.classList.remove('active'));

        // Agregar clase 'active' solo al botón clickeado
        this.classList.add('active');
      });
    });
  });
