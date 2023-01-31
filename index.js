const input = document.getElementById('camp-search')

const btnSubmit = document.getElementById('btn-search')

const cards = document.querySelector('.list-card')

function createCards(response) {

    if (response.length === 0) {
        alert('Nenhum resultado encontrado!, tente novamente!')
    }

    response.forEach(item => {
        const createLi = document.createElement('li')
            createLi.innerHTML = `
                <div class="card-header">
                    <h3>${item.title}</h3>
                </div>
                <div class="card-body">
                    <p>${item.snippet}</p>
                </div>
                <div class="card-footer">
                    <a href="https://en.wikipedia.org/?curid=${item.pageid}" target="_blank">Leia mais...</a>
                </div>
            `
            cards.appendChild(createLi)
    })
}

btnSubmit.addEventListener('click', (e) => {
    cards.innerHTML = ''

    e.preventDefault()

    let srSearch = input.value

    const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=${srSearch}&format=json`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let response = data.query.search
            console.log(response)
            createCards(response)
        })
})