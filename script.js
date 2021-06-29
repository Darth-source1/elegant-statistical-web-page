
function started() {
    canvas(60,20);
}

function canvas(x1, x2) {
    
    var elemento = document.getElementById("first_chart");
    lienzo= elemento.getContext("2d");
    lienzo.fillRect(50,70,10,x1);
    
    lienzo.beginPath();
    lienzo.moveTo(45,20);
    lienzo.lineTo(45,135);
    lienzo.closePath()
    lienzo.stroke();
    lienzo.beginPath();
    lienzo.moveTo(45,135);
    lienzo.lineTo(250,135);
    lienzo.closePath()
    lienzo.stroke();
}


window.addEventListener("load",started,false);