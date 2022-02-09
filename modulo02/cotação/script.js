$(document).ready(function () {
    $("table, td, th, tr").css("border", "1px solid red");
    $("table").css("margin", "auto");
    $("th").css("width", "170px");
    $.ajax({ url: "https://economia.awesomeapi.com.br/json/all" })
        .done((data) => {
            Object.entries(data).forEach((moeda) => {
                $("#moedas").append(`<option>${moeda[0]}</option>`);
            })
        })

    $("#button").on("click", function () {
        let count = 0;
        let dateEnd = $("#date-on").val()
        const dateIn = $("#date-in").val()
        const moeda = $("#moedas").val();
        let dadosHtml = $("#retorno")
        dadosHtml.html("");
        dateEnd = (dateEnd === "") ? strDateUS() : dateEnd;
        const diff = diffDate(dateIn, dateEnd);
        const date = (new Date(dateIn)).getTime()

        do {
            let aux = new Date(Number(date) + (count + 1) * 3600 * 24 * 1000)
            if (aux.getDay() === 0 || aux.getDay() === 6) {
                count++
                continue
            }
            aux = strDate(aux);

            $.ajax({ url: `https://economia.awesomeapi.com.br/${moeda}/?start_date=${aux}&end_date=${aux}` })
                .done((data) => {
                    if (data.length !== 0) {
                        data = data[0]
                        dadosHtml.append(`<tr><td>${moeda}</td><td>${data.create_date}</td><td>${data.low}</td><td>${data.high}</td><td>${data.bid}</td></tr>`);
                    }

                })
            count++
        } while (count < diff + 1)
    })
})

function strDate(_date) {
    const dateMonth = (_date.getMonth() + 1 < 10) ? 0 + String(_date.getMonth() + 1) : String(_date.getMonth() + 1);
    const dateDay = (_date.getDate() < 10) ? 0 + String(_date.getDate()) : String(_date.getDate());
    return String(_date.getFullYear()) + dateMonth + dateDay;
}

function strDateUS(_date = new Date()) {
    const dateMonth = (_date.getMonth() + 1 < 10) ? 0 + String(_date.getMonth() + 1) : String(_date.getMonth());
    const dateDay = (_date.getDate() < 10) ? 0 + String(_date.getDate()) : String(_date.getDate());
    return `${String(_date.getFullYear())}-${dateMonth}-${dateDay}`;
}


function diffDate(_date1, _date2) {
    if (_date1 === "" || _date2 === "") {
        return 0
    }
    const date1 = new Date(_date1);
    const date2 = new Date(_date2);
    const diffTime = (date2 - date1);
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays;
}