
let divEle=document.createElement('div');
let pEle1=document.createElement('p');
pEle1.innerHTML='Pelicans';
divEle.appendChild(pEle1);
divEle.setAttribute('class','main');
divEle.classList.add('content');
divEle.style.fontFamily="Georgia, serif";
divEle.style.fontSize="20px;";
pEle1.style.fontWeight=650;
console.log(divEle);
let bodyEle=document.body
console.log(bodyEle);
bodyEle.appendChild(divEle);
let pEle=document.createElement('p');
pEle.setAttribute('class','home');
divEle.appendChild(pEle);
pEle.innerHTML='Pelicans are a genus of large water birds that make up the family Pelecanidae. They are characterized by a long beak and a large throat';

let buttonEle=document.createElement('button');
buttonEle.innerHTML='Reset BG';
buttonEle.setAttribute('onClick','randombg()');
divEle.appendChild(buttonEle);
buttonEle.style.padding="10px";
buttonEle.style.border="2px solid grey";
buttonEle.style.borderRadius="10px";
buttonEle.style.fontWeight=650;

function randombg(){
	let red=Math.random()*256;
	    red=Math.round(red);
	let green=Math.random()*256;
	    green=Math.round(green);
	let blue=Math.random()*256;
	    blue=Math.round(blue);
		divEle.style.backgroundColor="rgb("+red+","+green+","+blue+")";
}
setInterval(randombg,2000);

