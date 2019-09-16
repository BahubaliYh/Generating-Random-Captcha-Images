function compute() {
    var operand1 = document.getElementById('operand1');
    var operand2 = document.getElementById('operand2');
    var result = parseInt(operand1.value) + parseInt(operand2.value);
    alert('Result of Addition is ' + result);

}

function add(operand1, operand2) {
    return operand1 + operand2;
}

module.exports = add;


var message = 'Welcome to Full Stack Development!';
exports.welcomeNote = function () {

    console.log(message);

};