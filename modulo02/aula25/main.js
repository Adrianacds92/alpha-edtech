function ambienteOtimo() {
    let img = document.querySelector(".pizzaria")
    img.classList.remove("none")
    img.setAttribute("src", "like.png")
}

function ambienteRuim() {
    let img = document.querySelector(".pizzaria")
    img.classList.remove("none")
    img.setAttribute("src", "dislike.png")
}
function pizzaOtimo() {
    let img = document.querySelector(".pizza")
    img.classList.remove("none")
    img.setAttribute("src", "like.png")
}

function pizzaRuim() {
    let img = document.querySelector(".pizza")
    img.classList.remove("none")
    img.setAttribute("src", "dislike.png")
}

function indicariaSim() {
    let img = document.querySelector(".indicaria")
    img.classList.remove("none")
    img.setAttribute("src", "like.png")
}
function indicariaNao() {
    let img = document.querySelector(".indicaria")
    img.classList.remove("none")
    img.setAttribute("src", "dislike.png")
}


function criarFeedback() {
    let card = criarElemento("div", "card__container")

    let nome = criarElemento("p", "card__texto")
    nome.innerHTML = `Nome: ${document.getElementById("fname").value}`
    card.appendChild(nome)

    let idade = criarElemento("p", "card__texto")
    idade.innerHTML = `Idade: ${document.getElementById("fage").value}`
    card.appendChild(idade)

    let ambiente = criarElemento("p", "card__texto")
    ambiente.innerHTML = "O que achou do ambiente da pizzaria? " + `${document.querySelector('input[name="ambiente"]:checked').value}`
    card.appendChild(ambiente)

    let pizza = criarElemento("p", "card__texto")
    pizza.innerHTML = "O que achou da pizza? " + `${document.querySelector('input[name="pizza"]:checked').value}`
    card.appendChild(pizza)


    let indicaria = criarElemento("p", "card__texto")
    indicaria.innerHTML = "Indicaria a amigos ou familiares? " + `${document.querySelector('input[name="indicaria"]:checked').value}`
    card.appendChild(indicaria)

    document.querySelector(".feedback").appendChild(card)
}

function criarElemento(elemento, classe) {
    let tag = document.createElement(elemento)
    tag.classList.add(classe)
    return tag
}
