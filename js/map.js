window.addEventListener('DOMContentLoaded', () => {
    const mapElement = document.getElementById('story-map-canvas');
    if (!mapElement) {
        return;
    }

    const map = L.map(mapElement).setView([-30.5595, 22.9375], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);
});

