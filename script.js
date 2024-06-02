function displayTravelInfo(info) {
    const travelInfoDiv = document.getElementById('travelInfo');
    
    travelInfoDiv.innerHTML = `
        <p><strong>Weather:</strong> ${info.weather}</p>
        <p><strong>Traffic:</strong> ${info.traffic}</p>
        <p><strong>Alternative Routes:</strong></p>
        <ul>
            ${info.alternativeRoutes.map(route => `<li>${route}</li>`).join('')}
        </ul>
    `;
}

function getTravelInfo(origin, destination) {
    // Mock data - Replace this with actual API calls to OpenWeatherMap and Google Maps
    const travelInfo = {
        weather: 'Sunny, 25°C',
        traffic: 'Moderate traffic on main roads',
        alternativeRoutes: ['Route 1: via Highway 5', 'Route 2: via Main Street']
    };
    displayTravelInfo(travelInfo);
}

document.getElementById('searchBtn').addEventListener('click', function() {
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    
    if (origin && destination) {
        // Fetch travel information
        getTravelInfo(origin, destination);
    } else {
        alert('Please enter both origin and destination.');
    }
});




