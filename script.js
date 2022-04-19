const allButtons = document.querySelectorAll('.nav-burger__icon');
const jsButtons = document.querySelectorAll('.js-button');

const hidePanel = (event) => {
	allButtons.forEach((button) => {
		if (event.currentTarget !== button) {
			button.classList.remove('js-open');
			button.nextElementSibling.classList.remove('js-appearance');
		};
	});
}

function appearance (activeButton, activeMenu) {
	activeButton.addEventListener('click', (event) => {

		hidePanel(event);

		activeButton.classList.toggle('js-open');
		activeMenu.classList.toggle('js-appearance');
	});
};

jsButtons.forEach((button) => {
	appearance(button, button.nextElementSibling);
});

const defaultBackgroundUrl = 'image/main/main.png';
const main = document.querySelector('.main');
const mainTitle = document.querySelector('.main__title');
const services = document.querySelector('.services');
const tabs = document.querySelectorAll('.services__link');
const mainIcon = document.querySelector('.main__icon');
const allPanel = document.querySelectorAll('.js-panel');


const hideServices = function () {
	mainTitle.classList.remove('fixes', 'types', 'design', 'renovation');
	services.style.backgroundImage = '';
	services.classList.remove('open');
	main.classList.remove('open');
	mainIcon.style.display = 'initial';

	allPanel.forEach((panel) => {
		panel.style.visibility = 'visible';
	});
};

for (let tab of tabs) {

	const link = tab.querySelector('.services__link-expanded');

	tab.addEventListener('mouseenter', function (event) {
		const name = event.target.dataset.name;
		services.style.backgroundImage = `url(image/main/background/${name}.png)`;
		mainTitle.classList.add(name);
		services.classList.add('open');
		main.classList.add('open');
		mainIcon.style.display = 'none';

		allPanel.forEach((panel) => {
			panel.style.visibility = 'hidden';
		});

		hidePanel(event);
	});

	tab.addEventListener('mouseleave', hideServices);
};