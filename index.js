document.getElementById("btn").addEventListener("click", function(){
    let farenheit = document.getElementById("temperature").value;
    farenheit = parseInt(farenheit);
    document.getElementById("result").textContent = ((farenheit - 32)*(5/9)).toFixed(2);
})