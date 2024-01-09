let a = parseInt(prompt("Введите число a: "));
let b = parseInt(prompt("Введите число b: "));
var msg = `Сумма чисел a и b равна ${sum(a,b)}`;
document.writeln(msg);
document.getElementById("sum").innerHTML = "msg";
