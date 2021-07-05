
function started() {
    visual();
	canvas();
}

function visual() {
    let glass = document.getElementById("glass");
    let design = document.getElementById("gls");
    design.addEventListener("mouseover", show, false);
    glass.style.color = "rgba(218,72,234,0)";
}

function show(){
    
    glass.style.color = "rgba(218,72,234,0.9)";
    
}

window.addEventListener("load",started,false);