
/**
 * dört islemi basit olarak yazildi ve export edildi, index.js bölümünden require ile kullanilabilmesi icin..
 */ 

function addition(a, b) {
    return a + b;
}
function subtraction(a, b) {
    return a - b;
}
function multiple(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
module.exports = {
    add: addition,
    sub: subtraction,
    mul: multiple,
    div: divide
};
