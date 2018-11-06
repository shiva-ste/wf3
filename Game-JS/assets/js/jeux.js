c = p => console.log(p);

var w = 50;
var h = 50;
var x = parseInt( Math.random() * 100 );
c(x);
var y = parseInt( Math.random() * 100 ); 
c(y); 

document.body.style.fontFamily = 'arial'; 

var a = document.createElement('a');
document.body.appendChild(a); 
a.href = ('#'); 

var h1 = document.createElement('h1');
document.body.appendChild(h1); 
h1.style.display  = 'block';
h1.style.position = ('absolute');
h1.style.top = ('3rem');
h1.style.left = ('50vw');
h1.style.transform = ('translateX(-50%)');
h1.textContent = ('Catch the Mouse (move with arrows)'); 

var b = document.createElement('a');
document.body.appendChild(b); 
b.style.display  = 'block';
b.style.position = ('absolute');
b.style.top = ('1rem');
b.style.right = ('1rem');
b.innerHTML = ('<a href="99-TestJeuxV.html">version vegan</a>'); 

var div = document.createElement('div'); 
document.body.appendChild(div); 
div.style.display = ('block');
div.style.position = ('absolute');
div.style.top = ( h + 'vh');
div.style.left = ( w + 'vw');
div.style.width = ('1rem');
div.style.height = ('1rem');
div.style.backgroundColor = ('black');
div.style.border = ('1px solid Red');
div.style.borderRadius = ('1rem');

var mouse = document.createElement('div');
document.body.appendChild(mouse); 

var eye = document.createElement('span'); 
mouse.appendChild(eye); 
eye.textContent = '-°';

var tail = document.createElement('span'); 
mouse.appendChild(tail); 
tail.textContent = '~~~~';
tail.style.paddingLeft = '2rem'; 

mouse.id = "mouse"; 
mouse.style.display = 'block';
mouse.style.position = ('absolute');
mouse.style.top = ( x + 'vh');
mouse.style.left = ( y + 'vw');
mouse.style.width = ('3rem');
mouse.style.height = ('1rem');
mouse.style.border = ('1px solid black');
mouse.style.borderTopRightRadius = ('1rem');
mouse.style.borderBottomRightRadius = ('1rem');
mouse.style.borderTopLeftRadius = ('4rem');
mouse.style.borderBottomLeftRadius = ('1rem');


function moveDown(){
    div.style.top = (h++) + 'vh';
}
function moveUp(){
    div.style.top = (h--) + 'vh';
}
function moveLeft(){
    div.style.left = (w--) + 'vw';
}
function moveRight(){
    div.style.left = (w++) + 'vw';
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
switch (evt.keyCode) {
    case 37:
    moveLeft();
    c(w);
    break;

    case 38:
    moveUp();
    c(h);
    break;

    case 39:
    moveRight();
    c(w);
    break;

    case 40:
    moveDown();
    c(h);
    break;
};
}

if ( x == w ){
    alert('ok x');
}

if ( y == h){
    alert('ok y')
}