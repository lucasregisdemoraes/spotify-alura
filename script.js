const searchInput = document.getElementById('search-input')
const resultArtist = document.getElementById('result-artist')
const resultPlaylist = document.getElementById('result-playlist')

function requestApi(searchTerm) {
    // falta fazer a filtragem pelo próprio request da URL
    // const url = `http://localhost:3003/artists?name_like=${searchTerm}`
    const url = `http://localhost:3003/artists`
    fetch(url)
        .then(response => response.json())
        .then(result => displayResults(result.filter(item => (item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ? true : false))))
    // .then(result => displayResults(result))

}

function displayResults(result) {
    resultPlaylist.classList.add("hidden")
    const artistName = document.getElementById("artist-name")
    const artistImage = document.getElementById("artist-img")

    result.forEach(element => {
        artistName.innerText = element.name
        artistImage.src = element.urlImg
    })

    resultArtist.classList.remove("hidden")
}

document.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLocaleLowerCase()
    if (searchTerm === "") {
        resultPlaylist.classList.add("hidden")
        resultArtist.classList.remove("hidden")
        return
    }
    requestApi(searchTerm)
})