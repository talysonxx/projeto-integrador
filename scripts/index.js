let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: -3.760604, lng: -49.755880},
    /*
        níveis de zoom:
        1: Mundo
        5: Massa terrestre/continente
        10: Cidade
        15: Ruas
        20: Edifícios
    */
    zoom: 8,
    title: 'Tucuruí - PA',
  });
}