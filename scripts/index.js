let map
// inicar mapa
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
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
        title: 'Tucuruí - PA'
    })





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




    // marcar (tentativa)
    // autocomplete.addEventListener('place_changed', () => {
    //     const place = autocomplete.getPlace()
    //     new google.maps.Marker(
    //         {
    //             position: place.geometry.location,
    //             title: place.name,
    //             map: map,
    //         }
    //     )
    // })


    

    // marker
    const lugares = [
        {
            lat: -3.819345274440888,
            lng: -49.66367311377041,
            title: 'Novo IFPA'
            
        },
        {
            lat: -4.241608,
            lng: -49.961771,
            title: "Novo Repartimento"
        },
        {
            lat: -3.831480315169525,
            lng: -49.676627024159885,
            title: 'Vila Permanente'
        }
    ]
    const image = 'https://cdn.discordapp.com/attachments/799379659347066922/875823943372664902/image-100px.jpg'
    lugares.forEach(lugar => {
        new google.maps.Marker(
            {
                position: lugar,
                map,
                title: lugar.title,
                icon: image
            }
        )
    })
}
