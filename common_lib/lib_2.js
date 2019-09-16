function compute() {
    var operand1 = document.getElementById('operand1');
    var operand2 = document.getElementById('operand2');
    var result = parseInt(operand1.value) * parseInt(operand2.value);
    alert('Result of Multiplication is ' + result);
}