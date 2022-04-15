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




const buttonMap = document.querySelector('.nav-burger__icon.map');
const panelMap = document.querySelector('.nav-burger__panel-map');

const buttonTel = document.querySelector('.nav-burger__icon.tel');
const panelTel = document.querySelector('.nav-burger__panel-tel');

const buttonBurger = document.querySelector('.nav-burger__icon.burger-button');
const menuBurger = document.querySelector('.nav-burger__menu');

const allPanel = document.querySelectorAll('.js-panel')
function appearance (activeButton, activeMenu) {
	activeButton.addEventListener('click', (event) => {
		//const allButton = document.querySelectorAll('.nav-burger__icon');
		
		allPanel.forEach(panel => {
			if (event.currentTarget.nextElementSibling !== panel) {
				panel.classList.remove('js-appearance');
			}
		});
		activeMenu.classList.toggle('js-appearance');
	});
};


appearance(buttonMap, panelMap);
appearance(buttonTel, panelTel);
appearance(buttonBurger, menuBurger);