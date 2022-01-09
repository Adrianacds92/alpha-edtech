const client = [{
  name: "Adriana",
  price: 500,
  dueDate: "2019-08-02"
},
{
  name: "Adriana",
  price: 250,
  dueDate: "2019-03-02"
},
{
  name: "Adam",
  price: 400,
  dueDate: "2021-03-02"
},
{
  name: "Brenda",
  price: 400,
  dueDate: "2021-03-02"
},
{
  name: "Adam",
  price: 1400,
  dueDate: "2021-03-02"
},
{
  name: "Brenda",
  price: 4100,
  dueDate: "2021-03-02"
},
{
  name: "adrina",
  price: 300,
  dueDate: "2021-03-02"
},
{
  name: "Adam",
  price: 100,
  dueDate: "2021-03-02"
}
]

const arrClientsGrouping = client.reduce((clientsGrouping, currentClient) => {
  const nameOfClient = currentClient.name

  if (clientsGrouping[nameOfClient] == null) clientsGrouping[nameOfClient] = []

  clientsGrouping[nameOfClient].push(currentClient)

  return clientsGrouping
}, {})

const arrDueDateGrouping = client.reduce((dueDateGrouping, currentDueDate) => {
  const dueDateClient = currentDueDate.dueDate

  if (dueDateGrouping[dueDateClient] == null) dueDateGrouping[dueDateClient] = []

  dueDateGrouping[dueDateClient].push(currentDueDate)

  return dueDateGrouping
}, {})

console.log(arrDueDateGrouping)

function agrDate() {
  document.getElementById("resultClients").innerHTML = "";
  for (let propriedade in arrDueDateGrouping) {
    let somaTitulos = 0;
    let dateNow;
    //console.log(propriedade);

    arrDueDateGrouping[propriedade].forEach(function (obj, index) {

      // console.log(`Dt. Vencto.: ${obj.dueDate}`);
      // document.getElementById("resultClients").innerHTML= `<h1> ${obj.dueDate} </h1>`
      //console.log(`Valor: ${obj.price}`);
      somaTitulos += obj.price;
      if (obj.dueDate != dateNow) {
        document.getElementById("resultClients").innerHTML += `<h2>Data de vencimento: ${obj.dueDate} </h2>`;
        dateNow = obj.dueDate;
      }


      document.getElementById("resultClients").innerHTML += `<h2>Nome: ${obj.name} </h2>`
      document.getElementById("resultClients").innerHTML += `<h2>Preço:  ${obj.price} </h2>`


    });
    document.getElementById("resultClients").innerHTML += `<h2>Total:  ${somaTitulos} </h2>`
    document.getElementById("resultClients").innerHTML += `<h2>----------------- </h2>`
  }
  return true;
}

function agrCliente() {
  document.getElementById("resultClients").innerHTML = "";
  for (let propriedade in arrClientsGrouping) {
    let somaTitulos = 0;
    let nameNow;
    //console.log(propriedade);

    arrClientsGrouping[propriedade].forEach(function (obj, index) {

      // console.log(`Dt. Vencto.: ${obj.dueDate}`);
      // document.getElementById("resultClients").innerHTML= `<h1> ${obj.dueDate} </h1>`
      //console.log(`Valor: ${obj.price}`);
      somaTitulos += obj.price;
      if (obj.name != nameNow) {
        document.getElementById("resultClients").innerHTML += `<h2>Nome: ${obj.name} </h2>`
        nameNow = obj.name;
      }


      document.getElementById("resultClients").innerHTML += `<h2>Data de vencimento: ${obj.dueDate} </h2>`
      document.getElementById("resultClients").innerHTML += `<h2>Preço:  ${obj.price} </h2>`


    });
    document.getElementById("resultClients").innerHTML += `<h2>Total:  ${somaTitulos} </h2>`
    document.getElementById("resultClients").innerHTML += `<h2>----------------- </h2>`
  }
  return true;
}

let fees

function addClient() {
  let name = document.getElementById('name').value;
  let dueDate = document.getElementById('date').value;
  let price = parseFloat((document.getElementById('price').value)).toFixed(2);

  if (name == "" && date == "" && price == "") {
    return
  }

  client.push({
    name: name,
    dueDate: dueDate,
    price: price
  })

  console.log(client);
  clearInput()
  showClient()

  return true
}

function showClient() {
  clearHtml()
  let table = document.getElementById('dados_cliente')
  client.forEach(function (value, i, array) {
    table.innerHTML += `<tr>
    <td>${value.name}</td>
    <td>${value.dueDate}</td>
    <td>R$ ${value.price}</td>
    </tr>`;
  })
  return true
}

function showFees() {
  clearHtml()
  let table = document.getElementById('dados_cliente');

  client.forEach(function (value, i, array) {
    table.innerHTML += `<tr>
    <td>${value.name}</td>
    <td>${value.dueDate}</td>
    <td>R$ ${value.price}</td>
    <td>R$ ${fees[i]}</td>
    </tr>`;
  })

  return true
}

function stringDateNow() {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const dateAtual = `${year}-${month}-${day}`;
  //console.log(dateAtual);
  return dateAtual
}

console.log(String(stringDateNow()))
const now = new Date()

function diffDate(date1, date2) {
  //const date1 = new Date("2022-01-05");
  //const date2 = new Date( stringDateNow() );
  const diffTime = Math.abs(date2 - date1);
  //console.log(Math.abs(date2));
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  //console.log(diffTime + " milliseconds");
  //console.log(diffDays + " days");
  return diffDays;
}

function calcfees(value, day) {
  console.log(`preço:${value}`, `dia:${day}`);
  return parseFloat(value * (0.02 + 0.001 * day)).toFixed(2);
}

function calcClient() {
  let dateNow = new Date(stringDateNow());

  fees = client.map(function (value) {
    let feesClient;
    let deuDate = new Date(value.date)
    if (dateNow > deuDate) {
      console.log(`Devendo:${value.name}`);
      feesClient = calcfees(value.price, diffDate(dateNow, deuDate));
      console.log(calcfees(value.price, diffDate(dateNow, deuDate)));

    } else {
      feesClient = 0;
      console.log(`ok:${value.name}`)
    }

    return feesClient
  });
  showFees()
  console.log(fees)
}

function clearHtml() {
  let table = document.getElementById('dados_cliente')
  table.innerHTML = `
  <td>Nome do Cliente</td>
  <td>Data de Vencimento</td>
  <td>Valor da Compra</td>
  <td>Juros</td>`;

  return true
}

function clearInput() {
  document.getElementById('name').value = "";
  document.getElementById('date').value = "";
  document.getElementById('price').value = "";

  return true
}
