/******************************
 *  tabla.js – Incidencias (CouchDB → DataTables)
 ******************************/

const DEBUG_MODE = "INFO"; // "INFO" | "NONE"
const BASE_URL = "http://127.0.0.1:5984";
const DATABASE_INCIDENCIAS_NAME = "incidencias";

// ⚠️ Cambiá si tu usuario/clave son otros
const COUCH_USER = "admin";
const COUCH_PASS = "admin";

addEventListener("DOMContentLoaded", async () => {
  const $tabla = document.getElementById("totalIncidencias");

  try {
    const requestUri = `${BASE_URL}/${DATABASE_INCIDENCIAS_NAME}/_all_docs?include_docs=true`;
    const incidencias = await getDocs(requestUri, COUCH_USER, COUCH_PASS);

    // Rellenar la tabla
    $tabla.innerHTML = createTable(incidencias);

    // Inicializar DataTables (después de inyectar el HTML)
    setTimeout(() => {
      $("#totalIncidencias").DataTable({
        language: {
          url: "//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json",
        },
        pageLength: 10,
        // Orden por ID de incidencia (columna 0) asc
        order: [[0, "asc"]],
        // Si querés scrolling en vez de paginación:
        // scrollX: true,
        // scrollY: 400,
      });
    }, 0);
  } catch (err) {
    console.error("Error cargando incidencias:", err);
    if ($tabla) {
      $tabla.innerHTML =
        `<tbody><tr><td colspan="11" style="color:red">` +
        `No se pudieron cargar las incidencias. Revisá consola, CORS y credenciales.` +
        `</td></tr></tbody>`;
    }
  }
});

/* ---------- UI builders ---------- */
function createTable(datas) {
  // Encabezados según tu documento de CouchDB
  let thead = `
    <thead>
      <tr>
        <th>ID Incidencia</th>
        <th>Nivel</th>
        <th>Escuela</th>
        <th>Sección</th>
        <th>Subgrupo</th>
        <th>Área</th>
        <th>Fecha</th>
        <th>Proveedor</th>
        <th>CUIT</th>
        <th>Estado</th>
        <th>_id</th>
      </tr>
    </thead>
  `;

  let tbody = "<tbody>";

  for (const doc of datas) {
    // Normalizo por si falta algún campo
    const row = {
      id_incidencia: doc.id_incidencia ?? "",
      nivel: doc.nivel ?? "",
      escuela: doc.escuela ?? "",
      seccion: doc.seccion ?? "",
      subgrupo: doc.subgrupo ?? "",
      area: doc.area ?? "",
      fecha: doc.fecha ?? "", // ej. "05/06/2025"
      proveedor: doc.proveedor ?? "",
      cuit: doc.cuit ?? "",
      estado: doc.estado ?? "",
      _id: doc._id ?? "",
    };

    tbody += `
      <tr>
        <td>${escapeHTML(row.id_incidencia)}</td>
        <td>${escapeHTML(row.nivel)}</td>
        <td>${escapeHTML(row.escuela)}</td>
        <td>${escapeHTML(row.seccion)}</td>
        <td>${escapeHTML(row.subgrupo)}</td>
        <td>${escapeHTML(row.area)}</td>
        <td>${escapeHTML(row.fecha)}</td>
        <td>${escapeHTML(row.proveedor)}</td>
        <td>${escapeHTML(row.cuit)}</td>
        <td>${escapeHTML(row.estado)}</td>
        <td>${escapeHTML(row._id)}</td>
      </tr>
    `;
  }

  tbody += "</tbody>";

  return thead + tbody;
}

/* ---------- HTTP helpers ---------- */
async function httpMethod(url, method, body, headers) {
  if (body != null) {
    body = JSON.stringify(body);
    if (DEBUG_MODE === "INFO") console.log("Body request recibido:", body);
  }

  const res = await fetch(url, {
    method,
    body,
    headers,
  });

  if (DEBUG_MODE === "INFO") {
    console.log("Fetch status:", res.status, res.statusText);
  }

  if (!res.ok) {
    // Lanzar error con detalle de CouchDB para depurar
    const text = await res.text();
    throw new Error(`HTTP ${res.status} – ${text}`);
  }

  return await res.json();
}

function createHeaders(username, password) {
  const headers = new Headers();
  headers.set("Authorization", "Basic " + btoa(`${username}:${password}`));
  headers.set("Accept", "application/json");
  headers.set("Content-Type", "application/json; charset=UTF-8");
  return headers;
}

async function getDocs(uri, username, password) {
  const headers = createHeaders(username, password);
  const data = await httpMethod(uri, "GET", null, headers);
  if (DEBUG_MODE === "INFO") console.log("Respuesta _all_docs:", data);
  // Devuelvo sólo los docs
  return (data.rows || []).map((row) => row.doc).filter(Boolean);
}

/* ---------- util ---------- */
function escapeHTML(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
