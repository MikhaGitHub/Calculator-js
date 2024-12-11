let form = document.getElementById('form-numbers');
let value_1, value_2;
let result = document.getElementById('result');

function updateValues() {
    value_1 = parseFloat(form.form1.value) || 0;
    value_2 = parseFloat(form.form2.value) || 0;
}

window.addition = function() {
    updateValues();
    let sum = value_1 + value_2;
    console.log(value_1 + value_2);
    result.value = sum;
};

window.subtraction = function() {
    updateValues();
    let difference = value_1 - value_2;
    console.log(value_1 - value_2);
    result.value = difference;
};

window.multiplication = function() {
    updateValues();
    console.log(value_1 * value_2);
    let product = value_1 * value_2;
    result.value = product;
};

window.division = function() {
    updateValues();
    console.log(value_1 / value_2);
    let quotient = value_1 / value_2;
    result.value = quotient;
};
