const characters = [];
async function fetchById() {
    const apiFetch = await fetch(`https://rickandmortyapi.com/api/character/${id.value}`)
    const result = await apiFetch.json()
    characters.push(result.name)
    fetchByName(characters)
    resultTxt.innerHTML = `<img src="${result.image}"/> <p>${result.name} </p>`
    
}

async function fetchByName(characters) {
    const lastIndex = characters.length - 1;
    const characterName = characters[lastIndex].replace(" ", "+");

    const apiFetch = await fetch(`https://rickandmortyapi.com/api/character/?name=${characterName}`)
    const result = await apiFetch.json();

    console.log(result)
 
}

const id = document.getElementById('id')
const btn = document.getElementById('btn')
const resultTxt = document.getElementById('result')
btn.addEventListener(`click`, fetchById)
