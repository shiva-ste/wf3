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
h1.textContent = ('Catch the carrot (move with arrows)'); 

var a = document.createElement('a');
document.body.appendChild(a); 
a.style.display  = 'block';
a.style.position = ('absolute');
a.style.top = ('1rem');
a.style.right = ('1rem');
a.innerHTML = ('<a href="99-TestJeux.html">version carnivore</a>'); 

var div = document.createElement('div'); 
a.appendChild(div); 
div.style.display = ('block');
// div.style.position = ('absolute');
div.style.top = ( h + 'vh');
div.style.left = ( w + 'vw');
div.style.width = ('1rem');
div.style.height = ('1rem');
div.style.backgroundColor = ('black');
div.style.border = ('1px solid Red');
div.style.borderRadius = ('1rem');

var carrot = document.createElement('div');
document.body.appendChild(carrot); 

var tail = document.createElement('span'); 
carrot.appendChild(tail);
tail.style.display = 'block';
tail.style.position = ('relative'); 
tail.textContent = 'W';
tail.style.color = 'green'; 
tail.style.paddingLeft = '0'; 
tail.style.marginTop = '-1rem'; 

var corp = document.createElement('span'); 
carrot.appendChild(corp);
corp.style.display = 'block';
corp.style.position = ('relative'); 
corp.textContent = '--';
corp.style.paddingLeft = '0'; 
corp.style.marginTop = '1rem'; 

var corp2 = document.createElement('span'); 
carrot.appendChild(corp2);
corp2.style.display = 'block';
corp2.style.position = ('relative'); 
corp2.textContent = '--';
corp2.style.paddingLeft = '0'; 
corp2.style.marginTop = '-2rem'; 

carrot.id = "carrot"; 
carrot.style.display = 'block';
carrot.style.position = ('absolute');
carrot.style.top = ( x + 'vh');
carrot.style.left = ( y + 'vw');
carrot.style.width = ('1rem');
carrot.style.height = ('3rem');
carrot.style.border = ('1px solid black');
carrot.style.backgroundColor = ('orange');
carrot.style.borderTopRightRadius = ('1rem');
carrot.style.borderBottomRightRadius = ('5rem');
carrot.style.borderTopLeftRadius = ('1rem');
carrot.style.borderBottomLeftRadius = ('5rem');

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