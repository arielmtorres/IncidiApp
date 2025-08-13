export function cargarGraficoIncidentes() {
    console.log("Gráfico cargado correctamente");

    const ctx = document.getElementById('graficoIncidentes');

    if (!ctx) {
        console.error("No se encontró el canvas con id 'graficoIncidentes'");
        return;
    }

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Resuelto', 'En proceso', 'Alerta', 'No resuelto'],
            datasets: [{
                label: 'Incidencias',
                data: [3, 5, 2, 4], // 🔥 Datos de prueba
                backgroundColor: [
                    '#00a86b',
                    '#0078bf',
                    '#ffa500',
                    '#e74c3c'
                ],
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' },
                title: {
                    display: true,
                    text: 'Estado de las Incidencias'
                }
            }
        }
    });
}
