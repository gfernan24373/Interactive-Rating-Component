//Selecting elements from the DOM
let circulos = document.querySelectorAll('.circulo'); //QuerySelectorAll: returing a Nodelist (array-like objects)
let btn = document.querySelector('.btn');
let container1 = document.querySelector('.container-start');
let container2 = document.querySelector('.container-thanks');
let number = document.querySelector('#number'); //Selecting this elements to catch the innerText of the "circulos" elements

/*Iterating "circulos" and setting backbround and color again(although in the css this color and backgrounds are already settings, for some reason,
in the DOM, this values are empty when you console.log(i.style.background))*/
for(let i of circulos) {
	i.onclick = function() {
		for (let circulo of circulos) {
			circulo.style.background = 'var(--DarkBlue)';
			circulo.style.color = 'var(--MediumGrey)';				
		}
		i.style.background = 'var(--primary)';
		i.style.color = 'var(--White)';
		number.innerText = `${i.innerText}`;
	}
	document.addEventListener('mousemove', function(e){
		if(e.target == i && i.style.background == 'var(--DarkBlue)') {
			i.style.background = 'var(--LightGrey)';
			i.style.color = 'var(--White)'; 
		}
		if(e.target != i && i.style.background != 'var(--primary)') {
			i.style.background = 'var(--DarkBlue)';
			i.style.color = 'var(--MediumGrey)';
		}
	});
}
btn.onclick = function() {
	if(number.innerText == ''){
		alert('Seleccione una Puntuación:');
	}
	else {
		container1.style.display = 'none';
		container2.style.display = 'flex';
	}
}



