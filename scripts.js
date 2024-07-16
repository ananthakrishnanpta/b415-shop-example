//  Accessing the buttons

let q_up = document.getElementById("add1");
let q_dn = document.getElementById("sub1");

let q = document.getElementById('q');

let t= document.getElementById('total');
let p = document.getElementById('price');

q_up.addEventListener("click",add1);
q_dn.addEventListener("click",sub1);


function add1(){
    q.innerText = parseInt(q.innerText) + 1;
    t.innerText = parseInt(p.innerText) * parseInt(q.innerText);
}


function sub1(){
    if(parseInt(q.innerText) > 1){
    q.innerText = parseInt(q.innerText) - 1;
    t.innerText = parseInt(p.innerText) * parseInt(q.innerText);
    }
}
