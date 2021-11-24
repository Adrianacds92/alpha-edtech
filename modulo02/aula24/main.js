let body = document.querySelector("body")

function fillHeader() {
    
    let titulo = document.createElement("h2")
    titulo.innerHTML = "Abelha"
    titulo.setAttribute ("id","titulo")
    body.appendChild(titulo)
}
function fillMainSection() {
    let subtitulo = document.createElement("h2")
    subtitulo.innerHTML = "Me identifico mais com a Abelha"
    subtitulo.setAttribute ("id","subtitulo")
    body.appendChild(subtitulo)

    let descricao = document.createElement("h2")
    descricao.innerHTML = "Abelhas são insetos voadores, conhecidos pelo seu importante papel na polinização. Pertencem à ordem Hymenoptera, da superfamília Apoidea, subgrupo Anthophila, e são aparentados das vespas e formigas"
    descricao.setAttribute ("id","descricao")
    body.appendChild(descricao)

    let conteiner = document.createElement("div")
    conteiner.classList.add("conteiner")

    let info = document.createElement("div")
    info.classList.add("info")

   let curiosidades = document.createElement("p")
   curiosidades.innerHTML = "CURIOSIDADES SOBRE AS ABELHAS"
   curiosidades.classList.add("curiosidades")
   info.appendChild(curiosidades)

   let lista = document.createElement("ul")
   lista.innerHTML = "<li>Uma abelha campeira visita 10 flores por minuto em busca do pólen e do néctar.</li> <li>Ela faz, em média, 40 voos diários, pousando em 40 mil flores. <li> Uma abelha produz 5 gramas de mel por ano. Para produzir um quilo de mel, as abelhas precisam visitar 5 milhões de flores.</li> <li> Uma colmeia abriga cerca de 50 mil abelhas. Tem uma rainha, alguns zangões e milhares de operárias.</li> <li> Se nascem duas rainhas ao mesmo tempo, elas lutam até que uma morra.</li> <li>. Uma abelha carrega o peso equivalente a 300 vezes o seu.</li>"
   info.appendChild(lista)


   let link = document.createElement("a")
   link.setAttribute("href","https://www.semabelhasemalimento.com.br/10-curiosidades-sobre-as-abelhas/")
   link.innerHTML = "Saiba mais sobre as Abelhas"
   info.appendChild(link)

   let img = document.createElement("div")
   img.classList.add("img")

   let imagem = document.createElement("img")
   imagem.setAttribute("src","abelha.jpg")
   img.appendChild(imagem)


   conteiner.appendChild(info)
   conteiner.appendChild(img)
   body.appendChild(conteiner)

}
fillHeader()
fillMainSection()
