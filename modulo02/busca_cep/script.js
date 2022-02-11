$('#btn').click(() => {
    const cep = $('#searchCep').val()
    const inforCep = cep.toString();
    if (inforCep.length == 8) {
        $('h4').html("")
        $.ajax({
            url: `https://cep.awesomeapi.com.br/json/${cep}`,
            success: function (data) {
                $('#table_search').append(
                    $('<th/>').html(`CEP`),
                    $('<th/>').html(`Endereço`),
                    $('<th/>').html(`Bairro`),
                    $('<th/>').html(`Estado`),
                    $('<th/>').html(`DDD`),
                    $('<th/>').html(`Cidade`),
                );

                $('#table_result').append(
                    $('<td/>').html(`${data.cep}`),
                    $('<td/>').html(`${data.address}`),
                    $('<td/>').html(`${data.district}`),
                    $('<td/>').html(`${data.state}`),
                    $('<td/>').html(`${data.ddd}`),
                    $('<td/>').html(`${data.city}`),
                );

                $('section').append(
                    $('<iframe/>').attr({
                        src: `https://www.google.com/maps?api=1&q=${data.lat}%2C${data.lng}&hl=es;z=14&output=embed`,
                        id: 'iframe'
                    }
                    )
                )
            }
        })

    } else {
        $('h4').html("Insira um CEP válido e não utilize traço)")
    }
})