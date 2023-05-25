let celsius = document.getElementById('cel');
let fahrenheit = document.getElementById('fah');
fahrenheit.oninput = function () {
    let c = ((parseFloat(
        fahrenheit.value) - 32) * 5) / 9;
    celsius.value = parseFloat(c.toFixed(2));
}
// allclear = document.getElementById('cel');
//let empty = document.getElementById('fah');

let clear=()=>{
    celsius.innerHTML= "";
    fahrenheit.innerHTML= "";
    
}