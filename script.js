
function started() {
    canvas();
}

function canvas() {
    
    var elemento = document.getElementById("first_chart");
    cxt= elemento.getContext("2d");

    rect_graf(90);
    
    cxt.beginPath();
    cxt.moveTo(75,40);
    cxt.lineTo(75,160);
    cxt.closePath()
    cxt.stroke();
    cxt.beginPath();
    cxt.moveTo(75,160);
    cxt.lineTo(275,160);
    cxt.closePath()
    cxt.stroke();
    
    //line for names and axe
    lines_with_name()
    
}

function rect_graf(x1, y1 = 150) {
    for (i = 0;i < 5;i++) {
    cxt.fillRect(x1,y1,10,10);
    x1 = x1 + 25;
    }
    
}

function  lines_with_name() {
    x = 145
    y = 145
    
    // x 0 line
    cxt.beginPath();
    cxt.moveTo(65,160);
    cxt.lineTo(75,160);
    cxt.closePath();
    cxt.stroke();
    
    // y 0 line
    cxt.beginPath();
    cxt.moveTo(75,160);
    cxt.lineTo(75,170);
    cxt.closePath();
    cxt.stroke();
    
    //line in axe x
    for (var i = 0; i < 5; i++ ) {
        cxt.beginPath();
        cxt.moveTo(68,x);
        cxt.lineTo(75,y);
        cxt.closePath();
        cxt.stroke();
        x = x - 20;
        y = y - 20;
    }
    
    x = 95
    y = 95
    
    //line in axe y
    for (var i = 0; i < 5; i++ ) {
        cxt.beginPath();
        cxt.moveTo(x,160);
        cxt.lineTo(y,168);
        cxt.closePath();
        cxt.stroke();
        x = x + 25;
        y = y + 25;
    }
    
    cxt.beginPath();
    cxt.moveTo(65,160);
    cxt.lineTo(75,160);
    cxt.closePath();
    cxt.stroke();
    
    
    
    //names in 0
    cxt.beginPath();
    cxt.font = "bold 10px Arial";
    cxt.fillText("eje x",35,162);
    cxt.fillText("eje y", 55, 180);
    
    
}


window.addEventListener("load",started,false);