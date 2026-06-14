
// Modo DEBUG
document.body.style.background = '#222';

const debugLog = document.createElement('pre');
debugLog.id = 'debugLog';
debugLog.style.color = '#0ff';
debugLog.style.padding = '1rem';
debugLog.style.fontFamily = 'monospace';
debugLog.style.background = '#111';
debugLog.style.maxHeight = '50vh';
debugLog.style.overflowY = 'auto';
document.body.appendChild(debugLog);

function logDebug(msg) {
  console.log(msg);
  debugLog.textContent += msg + "\n";
}

logDebug('Iniciando modo debug...');

try {
  logDebug('Cargando vehicle data...');
  const vehicle = data.vehicle;
  logDebug(`Vehicle: ${vehicle.name} - ${vehicle.year} - ${vehicle.plate}`);
  document.getElementById('vehicle-name').innerText = `${vehicle.name} - ${vehicle.year} - ${vehicle.plate}`;

  const dashboard = document.getElementById('dashboard');
  const maintenanceList = document.getElementById('maintenance-list');

  if(!dashboard || !maintenanceList) {
    logDebug('ERROR: dashboard o maintenanceList no encontrado.');
  } else {
    logDebug('Dashboard y mantenimiento encontrados.');
  }

  let total = data.items.length;
  let dueSoon = data.items.filter(i => i.intervalKm && i.intervalKm <= 5000).length;
  const divDash = document.createElement('div');
  divDash.innerHTML = `<strong>Próximas mantenciones:</strong> ${dueSoon} / ${total}`;
  dashboard.appendChild(divDash);

  data.items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'maintenance-item';
    div.innerHTML = `<strong>${item.name}</strong> - Próximo: ${item.intervalKm || 'n/a'} km / ${item.intervalMonths || 'n/a'} meses<br>${item.note || ''}`;
    maintenanceList.appendChild(div);
  });

  logDebug('Renderización completada.');
} catch(e) {
  logDebug('ERROR de JS: ' + e.message);
  console.error(e);
}
