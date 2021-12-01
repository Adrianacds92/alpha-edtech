let buttonSubmit = document.querySelector(".formulario_submit")
var valorTotal = 0


buttonSubmit.addEventListener("click", () => {
    var ficha = document.createElement("div")
    valorTotal = 0

    //ficha
    calcPao(ficha);
    calcHamburger(ficha);
    calcSalada(ficha);
    calcQueijo(ficha);

    //valor total na ficha
    var modeloValorTotal = document.createElement("p")
    modeloValorTotal.innerHTML = `Valor total: R$${valorTotal} `
    ficha.appendChild(modeloValorTotal)

    //ficha na página
    document.querySelector(".pedidos").appendChild(ficha)
})

function calcPao(ficha) {
    let pao = document.querySelector(".radio__pao:checked").value
    let fichaPao = document.createElement("p")
    if (pao === "frances") {
        valorTotal += 3
        fichaPao.textContent = "Pão Francês: R$3,00"
    } else if (pao === "australiano") {
        valorTotal += 8
        fichaPao.textContent = "Pão Australiano: R$8,00"
    } else {
        valorTotal += 6
        fichaPao.textContent = "Pão de Brichoe: R$6,00"
    }
    ficha.appendChild(fichaPao)
}

function calcHamburger(ficha) {
    let hamburguer = document.querySelector(".radio__hamburger:checked").value
    let fichaHamburguer = document.createElement("p")
    if (hamburguer === "picanha") {
        valorTotal += 13
        fichaHamburguer.textContent = "Hambúrguer de picanha: R$13,00"
    } else if (hamburguer === "costela") {
        valorTotal += 10
        fichaHamburguer.textContent = "Hambúrguer de costela: R$10,00"
    } else {
        valorTotal += 12
        fichaHamburguer.textContent = "Hambúrguer vegano: R$12,00"
    }

    ficha.appendChild(fichaHamburguer)

}

function calcSalada(ficha) {
    let salada = document.querySelector(".radio__salada:checked").value
    let fichaSalada = document.createElement("p")
    if (salada === "alface") {
        valorTotal += 1.50
        fichaSalada.textContent = "Alface: R$1,50"
    } else if (salada === "tomate") {
        valorTotal += 1.5
        fichaSalada.textContent = "Tomate: R$1,50"
    } else {
        valorTotal += 0
        fichaSalada.textContent = "Sem salada: R$0,00"
    }

    ficha.appendChild(fichaSalada)
}

function calcQueijo(ficha) {
    let queijo = document.querySelector(".radio__queijo:checked").value
    let fichaQueijo = document.createElement("p")
    if (queijo === "mussarela") {
        valorTotal += 3.50
        fichaQueijo.textContent = "Queijo Mussarela: R$3,50"
    } else if (queijo === "prato") {
        valorTotal += 3
        fichaQueijo.textContent = "Quejio Prato: R$3,00"
    } else {
        valorTotal += 5
        fichaQueijo.textContent = "Quejo Cheddar: R$5,00"
    }

    ficha.appendChild(fichaQueijo)
}