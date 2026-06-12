
const vehicle = data.vehicle;
document.getElementById('vehicle-name').innerText = `${vehicle.name} - ${vehicle.year} - ${vehicle.plate}`;

const dashboard = document.getElementById('dashboard');
const maintenanceList = document.getElementById('maintenance-list');

// Estado general (simplificado)
let total = data.items.length;
let dueSoon = data.items.filter(i => i.intervalKm && i.intervalKm <= 5000).length;
const divDash = document.createElement('div');
divDash.innerHTML = `<strong>Próximas mantenciones:</strong> ${dueSoon} / ${total}`;
dashboard.appendChild(divDash);

// Listado de mantenciones
data.items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'maintenance-item';
    div.innerHTML = `<strong>${item.name}</strong> - Próximo: ${item.intervalKm || 'n/a'} km / ${item.intervalMonths || 'n/a'} meses<br>${item.note || ''}`;
    maintenanceList.appendChild(div);
});
