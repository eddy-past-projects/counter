const minusCount = document.querySelector('.lower');
const addCount = document.querySelector('.higher');
let counter = document.querySelector('.counter');
const container = document.querySelector('.container');

function count(e) {
	console.log(counter.innerText);
	if (e.target === minusCount) {
		counter.innerText--;
		counter.classList.add('red');
		counter.classList.remove('green');
	} else if (e.target === addCount) {
		counter.innerText++;
		counter.classList.add('green');
		counter.classList.remove('red');
	}
}

container.addEventListener('click', count);
