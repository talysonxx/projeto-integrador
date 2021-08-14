let map
// inicar mapa
function initMap() {
    // adiciona o mapa, primeiro parâmetro local onde vai ser adicionado, no segundo um objeto com as configurações do para, como localização, zoom, título
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

    // sempre que o local do input for mudado, ele adiciona um marker e move o mapa para a localização do mesmo
    autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace()
        // new google.maps.Marker(
        //     {
        //         position: place.geometry.location,
        //         title: place.name,
        //         map: map,
        //     }
        // )
        adicionarMarker(place.geometry.location, place.name)
        map.panTo(place.geometry.location)
    })


    

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

    // adicionar um marker sempre que chamado. Apesar de que no caso de ser chamado atráves do forEach o parâmetro latLng recebe um obj com mais de dois atributos, ele só pega os dois primeiros (lat e lng)
    function adicionarMarker(latLng, title){
        new google.maps.Marker({
            position: latLng,
            map,
            title,
            icon: image
        })
    }

    // vai passando por todos os 'lugares' do array, pegando sua localização e passando como parâmetro na função adicionarMarker 
    lugares.forEach(lugar => {
        // new google.maps.Marker(
        //     {
        //         position: lugar,
        //         map,
        //         title: lugar.title,
        //         icon: image
        //     }
        // )
        adicionarMarker(lugar, lugar.title)
    })
    // quando o mapa for clicado, chama a função adicionarMarker passando o primeiro parâmetro como a localização (lat e long) e o titulo da marcação
    let cont = 1
    map.addListener('click', function(event){
        adicionarMarker(event.latLng, `Marcação ${cont}`)
        cont++
    })


    // eventos
    // propriedade_change; zoom_change
    // map.addListener('zoom_changed', function(){
    //     console.log('aoooba')
    // })
}
