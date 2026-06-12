
const vehicle = data.vehicle;
document.getElementById('vehicle-name').innerText = `${vehicle.name} - ${vehicle.year} - ${vehicle.plate}`;

const maintenanceList = document.getElementById('maintenance-list');
data.items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'maintenance-item';
    div.innerHTML = `<strong>${item.name}</strong> - Próximo: ${item.intervalKm || 'n/a'} km / ${item.intervalMonths || 'n/a'} meses<br>${item.note || ''}`;
    maintenanceList.appendChild(div);
});
