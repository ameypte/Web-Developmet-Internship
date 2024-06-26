let display = document.getElementById("dis");

function append(input){
    display.innerHTML = display.innerHTML + input;
}

function clearDisplay(){
    display.innerHTML = "";
}

function calculate(){
    display.innerHTML = eval(display.innerHTML);
}

function del(){
    display.innerHTML = display.innerHTML.slice(0,-1);
    // slice , substring, split 
}