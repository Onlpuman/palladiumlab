const defaultBackgroundUrl = 'image/main/main.png';
const main = document.querySelector('.main');
const mainTitle = document.querySelector('.main__title');
const services = document.querySelector('.services');
const tabs = document.querySelectorAll('.services__link');
const mainIcon = document.querySelector('.main__icon')

const hide = function () {
	mainTitle.classList.remove('fixes', 'types', 'design', 'renovation');
	services.style.backgroundImage = '';
	services.classList.remove('open');
	main.classList.remove('open');
	mainIcon.style.display = 'initial';
}


for (let tab of tabs) {

	const link = tab.querySelector('.services__link-expanded');

	tab.addEventListener('mouseenter', function (event) {
		const name = event.target.dataset.name;
		services.style.backgroundImage = `url(image/main/background/${name}.png)`;
		mainTitle.classList.add(name);
		services.classList.add('open');
		main.classList.add('open');
		mainIcon.style.display = 'none';
	});

	tab.addEventListener('mouseleave', hide);
	//link.addEventListener('click', hide);
};




const mapButton = document.querySelector('.nav-burger__icon.map');
const panelMap = document.querySelector('.nav-burger__panel-map');

const telButton = document.querySelector('.nav-burger__icon.tel');
const panelTel = document.querySelector('.nav-burger__panel-tel');

const burgerButton = document.querySelector('.nav-burger__icon.burger-button');
const burgerMenu = document.querySelector('.nav-burger__menu');

const appearance = (activeButton, activePanel) => {
	activeButton.addEventListener('click', () => {
		const allButton = document.querySelectorAll('.nav-burger__icon');
		

		allButton.forEach(button => {
			activePanel.classList.remove('js-appearance');
			console.log('1');
		});

		activePanel.classList.toggle('js-appearance');
		//console.log('2');

		
	});
};

appearance(mapButton, panelMap);
appearance(telButton, panelTel);
appearance(burgerButton, burgerMenu);


/* const crosses = document.querySelectorAll('.nav-burger__icon-cross');
const pics = document.querySelectorAll('.nav-burger__icon-pic');

for (let pic of pics) {
	//const crossLink = cross.querySelector('.nav-burger__icon-cross');
	
	pic.addEventListener('click', function(event) {
		const cross = pic.querySelector('.nav-burger__icon-cross');
		cross.style.display = 'block';
		pic.style.display = 'none';
		
	});
}; */