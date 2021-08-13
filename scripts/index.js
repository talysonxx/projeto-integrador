let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: -3.8168435203245368, lng: -49.66447686294523},
        /*
            níveis de zoom:
            1: Mundo
            5: Massa terrestre/continente
            10: Cidade
            15: Ruas
            20: Edifícios
        */
        zoom: 15,
        title: 'Tucuruí - PA',
    });


    // autocompletar
    let lugar = document.getElementById('lugar')
    let autocomplete
    autocomplete = new google.maps.places.Autocomplete(
        lugar,
        {
            componentRestrictions: {'country': ['BR']},
            fields: ['geometry', 'name'],
            types: ['establishment']
        }
    )

    // marker
    new google.maps.Marker({
        position: {lat: -3.819345274440888, lng: -49.66367311377041},
        map,
        title: 'Hello word!',
    })

    // marcar
    autocomplete.addEventListener('place_changed', () => {
        window.alert('lugar mudou')
        // const place = autocomplete.getPlace()
        // new google.maps.Marker(
        //     {
        //         position: place.geometry.location,
        //         title: place.name,
        //         map: map,
        //     }
        // )
    })
}