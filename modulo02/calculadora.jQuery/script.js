$(document).ready(function () {
    var numberOne;
    var numberTwo;
    var operator;
    var $result = $(".total");


    function reset() {
        numberOne = null;
        numberTwo = null;
        operator = null;
        $result.val("0");
    }

    reset();

    $(".number a").click(function () {
        let clickDigit = $(this).text();
        let currentVal = $result.val();
        let newVal;

        if (currentVal === "0") {
            newVal = clickDigit;
        }
        else {
            newVal = currentVal + clickDigit;
        }
        $result.val(newVal);


    });

    $(".operator a").click(function () {
        operator = $(this).text();
        numberOne = parseFloat($result.val());
        $result.val("0");
    });

    $("#memory").click(function () {
        let total;

        numberTwo = parseFloat($result.val());

        if (operator === "+") {
            total = numberOne + numberTwo;
        }
        else if (operator === "-") {
            total = numberOne - numberTwo;
        }
        else if (operator === "*") {
            total = numberOne * numberTwo;
        }
        else if (operator === "/") {
            total = numberOne / numberTwo;
        }
        $result.val(total);
    });

    $("#result").click(function () {
        reset();
    });

});