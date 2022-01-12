const client = [{
  name: "Adriana",
  price: 500,
  dueDate: "2022-01-11"
},
{
  name: "Adriana",
  price: 250,
  dueDate: "2019-07-02"
},
{
  name: "Adam",
  price: 400,
  dueDate: "2021-05-02"
},
{
  name: "Brenda",
  price: 400,
  dueDate: "2021-06-02"
},
{
  name: "Adam",
  price: 1400,
  dueDate: "2021-03-02"
},
{
  name: "Brenda",
  price: 4100,
  dueDate: "2021-11-18"
},
{
  name: "Adrina",
  price: 300,
  dueDate: "2021-03-02"
},
{
  name: "Adam",
  price: 100,
  dueDate: "2021-03-02"
}
]

// const arrClientsGrouping = client.reduce((clientsGrouping, currentClient) => {
//   const nameOfClient = currentClient.name

//   if (clientsGrouping[nameOfClient] == null) clientsGrouping[nameOfClient] = []

//   clientsGrouping[nameOfClient].push(currentClient)

//   return clientsGrouping
// }, {})

// const arrDueDateGrouping = client.reduce((dueDateGrouping, currentDueDate) => {
//   const dueDateClient = currentDueDate.dueDate

//   if (dueDateGrouping[dueDateClient] == null) dueDateGrouping[dueDateClient] = []

//   dueDateGrouping[dueDateClient].push(currentDueDate)

//   return dueDateGrouping
// }, {})

// console.log(arrDueDateGrouping)

// function agrDate() {
//   document.getElementById("resultClients").innerHTML = "";
//   for (let propriedade in arrDueDateGrouping) {
//     let somaTitulos = 0;
//     let dateNow;
//     //console.log(propriedade);

//     arrDueDateGrouping[propriedade].forEach(function (obj, index) {

//       // console.log(`Dt. Vencto.: ${obj.dueDate}`);
//       // document.getElementById("resultClients").innerHTML= `<h1> ${obj.dueDate} </h1>`
//       //console.log(`Valor: ${obj.price}`);
//       somaTitulos += obj.price;
//       if (obj.dueDate != dateNow) {
//         document.getElementById("resultClients").innerHTML += `<h2>Data de vencimento: ${obj.dueDate} </h2>`;
//         dateNow = obj.dueDate;
//       }


//       document.getElementById("resultClients").innerHTML += `<h2>Nome: ${obj.name} </h2>`
//       document.getElementById("resultClients").innerHTML += `<h2>Preço:  ${obj.price} </h2>`


//     });
//     document.getElementById("resultClients").innerHTML += `<h2>Total:  ${somaTitulos} </h2>`
//     document.getElementById("resultClients").innerHTML += `<h2>----------------- </h2>`
//   }
//   return true;
// }

// function agrCliente() {
//   document.getElementById("resultClients").innerHTML = "";
//   for (let propriedade in arrClientsGrouping) {
//     let somaTitulos = 0;
//     let nameNow;
//     //console.log(propriedade);

//     arrClientsGrouping[propriedade].forEach(function (obj, index) {

//       // console.log(`Dt. Vencto.: ${obj.dueDate}`);
//       // document.getElementById("resultClients").innerHTML= `<h1> ${obj.dueDate} </h1>`
//       //console.log(`Valor: ${obj.price}`);
//       somaTitulos += obj.price;
//       if (obj.name != nameNow) {
//         document.getElementById("resultClients").innerHTML += `<h2>Nome: ${obj.name} </h2>`
//         nameNow = obj.name;
//       }


//       document.getElementById("resultClients").innerHTML += `<h2>Data de vencimento: ${obj.dueDate} </h2>`
//       document.getElementById("resultClients").innerHTML += `<h2>Preço:  ${obj.price} </h2>`


//     });
//     document.getElementById("resultClients").innerHTML += `<h2>Total:  ${somaTitulos} </h2>`
//     document.getElementById("resultClients").innerHTML += `<h2>----------------- </h2>`
//   }
//   return true;
// }

// let fees

// function addClient() {
//   let name = document.getElementById('name').value;
//   let dueDate = document.getElementById('date').value;
//   let price = parseFloat((document.getElementById('price').value)).toFixed(2);

//   if (name == "" && date == "" && price == "") {
//     return
//   }

//   client.push({
//     name: name,
//     dueDate: dueDate,
//     price: price
//   })

//   console.log(client);
//   clearInput()
//   showClient()

//   return true
// }

// function showClient() {
//   clearHtml()
//   let table = document.getElementById('dados_cliente')
//   client.forEach(function (value, i, array) {
//     table.innerHTML += `<tr>
//     <td>${value.name}</td>
//     <td>${value.dueDate}</td>
//     <td>R$ ${value.price}</td>
//     </tr>`;
//   })
//   return true
// }

// function showFees() {
//   clearHtml()
//   let table = document.getElementById('dados_cliente');

//   client.forEach(function (value, i, array) {
//     table.innerHTML += `<tr>
//     <td>${value.name}</td>
//     <td>${value.dueDate}</td>
//     <td>R$ ${value.price}</td>
//     <td>R$ ${fees[i]}</td>
//     </tr>`;
//   })

//   return true
// }

// function stringDateNow() {
//   const date = new Date();
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();
//   const dateAtual = `${year}-${month}-${day}`;
//   //console.log(dateAtual);
//   return dateAtual
// }

// console.log(String(stringDateNow()))
// const now = new Date()

function diffDate(_date1, _date2) {
  if (_date1 === "" || _date2 === "") {
    return 0
  }
  //console.log(_date1, _date2)
  const date1 = new Date(_date1);
  const date2 = new Date(_date2);
  const diffTime = (date2 - date1);
  //console.log(Math.abs(date2));
  //const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  //console.log(diffTime + " milliseconds");
  //console.log(diffDays + " days");
  return diffDays;
}
//console.log(diffDate("2022-01-05","2022-01-10"));

// function calcfees(value, day) {
//   console.log(`preço:${value}`, `dia:${day}`);
//   return parseFloat(value * (0.02 + 0.001 * day)).toFixed(2);
// }

// function calcClient() {
//   let dateNow = new Date(stringDateNow());

//   fees = client.map(function (value) {
//     let feesClient;
//     let deuDate = new Date(value.date)
//     if (dateNow > deuDate) {
//       console.log(`Devendo:${value.name}`);
//       feesClient = calcfees(value.price, diffDate(dateNow, deuDate));
//       console.log(calcfees(value.price, diffDate(dateNow, deuDate)));

//     } else {
//       feesClient = 0;
//       console.log(`ok:${value.name}`)
//     }

//     return feesClient
//   });
//   showFees()
//   console.log(fees)
// }

// function clearHtml() {
//   let table = document.getElementById('dados_cliente')
//   table.innerHTML = `
//   <td>Nome do Cliente</td>
//   <td>Data de Vencimento</td>
//   <td>Valor da Compra</td>
//   <td>Juros</td>`;

//   return true
// }

// function clearInput() {
//   document.getElementById('name').value = "";
//   document.getElementById('date').value = "";
//   document.getElementById('price').value = "";

//   return true
// }

function testRangedate(_initialDate, _finalDate, _date) {
  const date1 = diffDate(_initialDate, _date);
  const date2 = diffDate(_date, _finalDate);

  const test = (date1 >= 0 && date2 >= 0) ? true : false;

  return test
}

function diffValue(_value1, _value2) {
  if (_value1 === "" || _value2 === "") {
    return 0
  }
  return _value2 - _value1
}

function testRangePrice(_initialPrice, _finalPrice, _price) {
  const price1 = diffValue(_initialPrice, _price);
  const price2 = diffValue(_price, _finalPrice);

  const test = (price1 >= 0 && price2 >= 0) ? true : false;
  return test
}

function numberMonth(_stringMonth) {
  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  let numberMonth;
  months.forEach(function (value, i) {
    if (value.toLowerCase() === _stringMonth.toLowerCase()) {
      numberMonth = i
      return
    }

  })
  return numberMonth
}
function testMonth(_dateMonth, _date) {
  if (_dateMonth === "") {
    return true
  }
  const date = new Date(_date)
  const number = numberMonth(_dateMonth)

  const test = (number === date.getMonth()) ? true : false

  return test
}

function fillTable(_obj) {
  const table = document.getElementById('dataFilter')
  table.innerHTML = ""
  _obj.forEach(value => {
    table.innerHTML += `
          <tr>
          <th>${value.name}</th>
          <th>${value.dueDate}</th>
          <th>${value.price}</th>
          </tr>
      `;
  });
  return true
}

function fullFilter() {
  const initialPrice = document.getElementById('minPrice').value;
  const finalPrice = document.getElementById('maxPrice').value;
  const initialDate = document.getElementById('initialDate').value;
  const finalDate = document.getElementById('finalDate').value;
  const monthDate = document.getElementById('select').value;
  const tabble = document.getElementById('dataFilter');

  const filter = client.filter(function (value) {
    return testMonth(monthDate, value.dueDate) &&
      testRangedate(initialDate, finalDate, value.dueDate) &&
      testRangePrice(initialPrice, finalPrice, value.price);
  })
  
  return fillTable(filter);
}

