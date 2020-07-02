// Calculator

function math(num) {
    document.calculator.result.value += num;
}
function cal() {
    var result = document.calculator.result.value;
    document.calculator.result.value = eval(result);
}
function clear_entry() {
    var num = document.calculator.result.value;
    var num_len = num.length;
    document.calculator.result.value = num.slice(0, num_len - 1);
}

// Result Calculator

function check_result() {

    var mark = document.result_calculator.mark.value;

    if (mark < 33) {
        document.result_calculator.result.value = "F";
    } else if (mark >= 33 && mark <= 39) {
        document.result_calculator.result.value = "D";
    } else if (mark >= 40 && mark <= 49) {
        document.result_calculator.result.value = "C";
    } else if (mark >= 50 && mark <= 59) {
        document.result_calculator.result.value = "B";
    } else if (mark >= 60 && mark <= 69) {
        document.result_calculator.result.value = "A-";
    } else if (mark >= 70 && mark <= 79) {
        document.result_calculator.result.value = "A";
    } else if (mark >= 80 && mark <= 100) {
        document.result_calculator.result.value = "A+";
    } else {
        document.result_calculator.result.value = "Enter a number between 0 to 100";
    }

}
