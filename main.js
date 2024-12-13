function addition() {
    const number_1 = document.getElementById("form1");
    const number_2 = document.getElementById("form2");
    value_1 = parseInt(number_1.value);
    value_2 = parseInt(number_2.value);


    result_form_id = document.getElementById("result");
    result_form_id.innerHTML = value_1 + value_2;
};


function subtraction() {
    const number_1 = document.getElementById("form1");
    const number_2 = document.getElementById("form2");
    value_1 = parseInt(number_1.value);
    value_2 = parseInt(number_2.value);


    result_form_id = document.getElementById("result");
    result_form_id.innerHTML = value_1 - value_2;
};

function multiplication() {
    const number_1 = document.getElementById("form1");
    const number_2 = document.getElementById("form2");
    value_1 = parseInt(number_1.value);
    value_2 = parseInt(number_2.value);


    result_form_id = document.getElementById("result");
    result_form_id.innerHTML = value_1 * value_2;
};

function division() {
    const number_1 = document.getElementById("form1");
    const number_2 = document.getElementById("form2");
    value_1 = parseInt(number_1.value);
    value_2 = parseInt(number_2.value);


    result_form_id = document.getElementById("result");
    result_form_id.innerHTML = value_1 / value_2;
};