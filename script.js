
const desk = document.querySelector(".desk");
let isDrawing = false;

draw(desk, 250, -5);
let triangle = document.querySelector(".triangle-bottom");
let old_point = document.querySelector(".point");
let ptag = document.querySelector("p");

ptag.textContent = "50";

desk.addEventListener("mousedown", drawPoint);
desk.addEventListener("mouseup", drawPoint);
desk.addEventListener("mousemove", drawPoint);

function drawPoint(e) {
	console.log(e.type);
    	console.log(desk, e.offsetX, e.offsetY);
	switch (e.type) {
	case "mousedown":
		isDrawing = true;
            
            if (e.offsetX >= 10 && e.offsetX <= 490){
                old_point.setAttribute("style", "width: " + e.offsetX + "px;");
                triangle.setAttribute("style", "left:" + (e.offsetX-10) + "px;");
                ptag.textContent = Math.round((e.offsetX+1)/5);
                if (e.offsetX > 475) {
                    ptag.setAttribute("style", "left: 472px;");
                }
                else {
                    ptag.setAttribute("style", "left:" + (e.offsetX-10) + "px;");
                }
           	break;
            }
            if (e.offsetX < 10) {
                old_point.setAttribute("style", "width: " + e.offsetX + "px;");
                triangle.setAttribute("style", "left:" + (e.offsetX-10) + "px;");
                ptag.textContent = Math.round((e.offsetX)/5);
                ptag.setAttribute("style", "left: 0px;");
                break;
            }
            if (e.offsetX > 490) {
                old_point.setAttribute("style", "width: " + (e.offsetX+1) + "px;");
                triangle.setAttribute("style", "left:" + (e.offsetX-10) + "px;");
                ptag.textContent = Math.round((e.offsetX)/5);
                ptag.setAttribute("style", "left: 472px;");
                break;
            }
		
        case "mouseup":
		isDrawing = false
		break;
		
        case "mousemove":
		if (isDrawing && e.offsetX >= 10 && e.offsetX <= 490) {
                old_point.setAttribute("style", "width: " + e.offsetX + "px;");
                triangle.setAttribute("style", "left:" + (e.offsetX-10) + "px;");
                ptag.textContent = Math.round((e.offsetX+1)/5);
                if (e.offsetX > 475) {
                    ptag.setAttribute("style", "left: 472px;");
                }
                else {
                    ptag.setAttribute("style", "left:" + (e.offsetX-10) + "px;");
                }
			}
            if (isDrawing && e.offsetX < 10) {
                old_point.setAttribute("style", "width: " + e.offsetX + "px;");
                triangle.setAttribute("style", "left:" + (e.offsetX-10) + "px;");
                ptag.textContent = Math.round((e.offsetX)/5);
                ptag.setAttribute("style", "left: 0px;");
			}
            if (isDrawing && e.offsetX > 490) {
                old_point.setAttribute("style", "width: " + (e.offsetX+1) + "px;");
                triangle.setAttribute("style", "left:" + (e.offsetX-10) + "px;");
                ptag.textContent = Math.round((e.offsetX)/5);
                ptag.setAttribute("style", "left: 472px;");
               
            }

	break;
	}
}


function draw(el, x, y) {
	const point = document.createElement("div");
    	point.className = "point";
    	point.style.width = x + "px";
    	el.append(point);
    
}

