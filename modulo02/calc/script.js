class Calculadora {
    constructor(_operand1, _operand2, _operation) {
        this.operand1 = _operand1;
        this.operand2 = _operand2;
        this.operation = _operation;

    }
    setOperand1(_operand1) {
        this.operand1 = _operand1;
    }
    setOperand2(_operand2) {
        this.operand2 = _operand2;
    }
    setOperation(_operation) {
        this.operation = _operation;
    }
    getResult() {
        if (this.operation === "+") {
            return this.operand1 + this.operand2;
        }
        else if (this.operation === "-") {
            return this.operand1 - this.operand2;
        }
        else if (this.operation === "*") {
            return this.operand1 * this.operand2;
        }
        else if (this.operation === "/" && this.operand2 !== 0) {
            return this.operand1 / this.operand2;
        } else {
            return "Erro"
        }
    }
    clearCalculator() {
        this.setOperand1("")
        this.setOperand2("")
        this.setOperation("")
    }

}
$(document).ready(function () {
    var numberOne;
    var numberTwo;
    var operator;
    var $result = $(".total");
    let calc = new Calculadora(0, 0, "+")

    function reset() {
        numberOne = null;
        numberTwo = null;
        operator = null;
        $result.val("0");
    }

    reset();

    $(".number a").click(function () {
        if ($(".total").val() === "Erro") {
            reset()
        }

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
        calc.setOperation($(this).text());
        calc.setOperand1(parseFloat($result.val()));
        $result.val("0");
        console.log(numberOne)
    });

    $("#equal").click(function () {


        calc.setOperand2(parseFloat($result.val()));
        let total = calc.getResult()
        $result.val(total);
    });

    $("#result").click(function () {
        reset();
    });

});
