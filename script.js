    var v1 = document.querySelector(".timer");
    
function iniciar(){
    setInterval(function(){
        var v1 = document.querySelector(".timer");
        v1.innerHTML++;
    }, 1000);
}