
const map = L.map('map').setView([39.925533, 32.866287], 11); // Ankara

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const regions = [

  { name: 'Altındağ', lat: 39.9582, lng: 32.9020 },
  { name: 'Karapürçek', lat: 39.973454, lng: 32.972668 }, // Bu Karapürçek Sakarya'daki olabilir, Ankara'daki semt için net veri bulunamadı
  { name: 'Hüseyin Gazi Çevreleri', lat: 39.966279, lng: 32.948825 },
  { name: 'Aydınlık Evler', lat: 39.9638, lng: 32.8885 },
  { name: 'Keçiören', lat: 39.979321, lng: 32.867866 },
  { name: 'Pursaklar', lat: 40.0488, lng: 32.8953 },
  { name: 'Yenimahalle', lat: 39.961774, lng: 32.811450 },
  { name: 'Mamak', lat: 39.9387, lng: 32.9205 },
  { name: 'Etimesgut', lat: 39.9408, lng: 32.6683 },
  { name: 'Sincan', lat: 39.9557, lng: 32.5727 },
  { name: 'Eryaman', lat: 39.9889, lng: 32.6155 },
  { name: 'Çankaya', lat: 39.924168, lng: 32.887058 },
  { name: 'Batıkent', lat: 39.9499, lng: 32.7333 },
  { name: 'Ümitköy', lat: 39.8833, lng: 32.7000 },
  { name: 'Çayyolu', lat: 39.8667, lng: 32.6833 }


];

regions.forEach(region => {
  const marker = L.marker([region.lat, region.lng]).addTo(map);
  marker.bindPopup(`<b>${region.name}</b> bölgesinde hizmet veriyoruz.`);
});