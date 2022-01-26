const inputTexto = document.querySelector("#fentrada")

const inputEnviar = document.querySelector("#fsubmit1")

const inputDeletar = document.querySelector("#fsubmit2")

function imprimeResultado(cliente) {
    document.querySelector("#resposta-filtro").innerHTML =
        `
    ID: ${cliente.id} <br />
    Nome: ${cliente.name} <br />
    Email: ${cliente.email} <br />
    `
}

function limpaResultado() {
    document.querySelector("h3").innerHTML = ""
}

function imprimeResultadoNaoEncontrado() {
    limpaResultado()
    document.querySelector("h3").innerHTML = "Resultado não encontrado"
}
const searchInput = document.getElementById("search");
const selectOptions = document.getElementById("selectOptions");

var dadosCliente;
let recibo = 0

const exibirInfo = (params) => {
    document.getElementById('result').innerHTML = `
        <span>Id: ${params.id}</span>
        <span>Name: ${params.name}</span>
        <span>Email: ${params.email}</span>
    `;
}

function req() {
    document.getElementById('result').innerHTML = "";
    console.log(searchInput.value)
    clearTimeout(recibo);
    recibo = setTimeout(buscar, 2000);
    // console.log(`Meu recibo é ${recibo} `)
    function buscar() {
        if (searchInput.value.length > 2 || selectOptions.value == "id") {
            fetch("http://localhost:5501/dados")
                .then(res => res.json())
                .then(data => {
                    dadosCliente = data
                    switch (selectOptions.value) {
                        case "name":
                            Array.prototype.forEach.call(dadosCliente, (dadosCliente) => {
                                if (dadosCliente.name.includes(searchInput.value)) {
                                    exibirInfo(dadosCliente)
                                }
                            })
                            break;
                        case "email":
                            Array.prototype.forEach.call(dadosCliente, (dadosCliente) => {
                                if (dadosCliente.email.includes(searchInput.value)) {
                                    exibirInfo(dadosCliente)
                                }
                            })
                            break;
                        case "id":
                            Array.prototype.forEach.call(dadosCliente, (dadosCliente) => {
                                if (dadosCliente.id.includes(searchInput.value)) {
                                    exibirInfo(dadosCliente)
                                }
                            })
                            break;
                    }
                    console.log(`Seu valor é ${searchInput.value} e ${searchInput.value.length} é maior que 3!`)
                })


        } else {
            document.getElementById('result').innerHTML = "";
        }
    }
}

inputEnviar.addEventListener("click", (event) => {
    event.preventDefault();
    const id = document.querySelector("#fentradaid").valueAsNumber
    const name = document.querySelector("#fentradanome").value
    const email = document.querySelector("#fentradaemail").value
    document.querySelector("#resposta-adicionar").innerHTML = `Cliente ${name} adicionado :)`

    setTimeout(() => {
        document.querySelector("#resposta-adicionar").innerHTML = ``
        document.querySelector("#fentradaid").value = ``
        document.querySelector("#fentradanome").value = ``
        document.querySelector("#fentradaemail").value = ``
    }, 3000)
    const cliente = {
        id,
        name,
        email
    }

    const enviarCliente = JSON.stringify(cliente);

    fetch("http://localhost:5501/adicionar", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: enviarCliente
    })


})

inputDeletar.addEventListener("click", event => {
    event.preventDefault();
    const tipoDelete = document.querySelector('input[name="fdeletar"]:checked').value
    const valorDelete = document.querySelector('#fitemdeletar').value

    if (tipoDelete == "id") {
        var clienteDeletado = JSON.stringify({ "id": valorDelete })
    }
    if (tipoDelete == "name") {
        var clienteDeletado = JSON.stringify({ "name": valorDelete })
    }
    if (tipoDelete == "email") {
        var clienteDeletado = JSON.stringify({ "email": valorDelete })
    }
    document.querySelector("#resposta-deletar").innerHTML = `Cliente deletado!`

    setTimeout(() => {
        document.querySelector("#resposta-deletar").innerHTML = ``
    }, 2000)
    fetch("http://localhost:5501/deletar", {
        method: "DELETE",
        body: clienteDeletado,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
})