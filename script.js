
function started() {
    visual();
	canvas();
}

function visual() {
    let glass = document.getElementById("glass");
    let design = document.getElementById("gls");
    design.addEventListener("hover", show, false);
}

function show(){
    
}

window.addEventListener("load",started,false);