const defaultBackgroundUrl = 'image/main/main.png';
const main = document.querySelector('.main');
const mainTitle = document.querySelector('.main__title');
const services = document.querySelector('.services');
const tabs = document.querySelectorAll('.services__link');

for (let tab of tabs) {
	tab.addEventListener('mouseenter', function (event) {
		const name = event.target.dataset.name;
		services.style.backgroundImage = `url(image/main/background/${name}.png)`;
		mainTitle.classList.add(name);
		services.classList.add('open');
		main.classList.add('open');
	});

	tab.addEventListener('mouseleave', function () {
		mainTitle.classList.remove('fixes', 'types', 'design', 'renovation');
		services.style.backgroundImage = '';
		services.classList.remove('open');
		main.classList.remove('open');
	});
}