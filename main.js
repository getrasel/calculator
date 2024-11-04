const buttons = [];

let valueid = document.getElementById('inputid');


function buttonClick(showbtn){
    let number = showbtn.innerHTML;
    valueid.value += number;
}

function ac(){
    valueid.value = '';
}

function del(){
    valueid.value = valueid.value.slice(0, -1);
}

function plus(){ valueid.value += '+'; }
function devide(){ valueid.value += '/' }
function into(){ valueid.value += '*' }
function minus(){ valueid.value += '-' }
function dot(){ valueid.value += '.'; }
function percent(){ valueid.value += '%'; }

function equal(){
    valueid.value = eval(valueid.value)
}