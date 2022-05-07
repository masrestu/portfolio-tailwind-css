// Navbar Fixed
window.onscroll = function () {
	const header = document.querySelector('header');
	const toTop = document.querySelector('#to-top');
	const fixedNav = header.offsetTop;

	if (window.pageYOffset > fixedNav) {
		header.classList.add('navbar-fixed');

		toTop.classList.remove('hidden');
		toTop.classList.add('flex');
	} else {
		header.classList.remove('navbar-fixed');

		toTop.classList.remove('flex');
		toTop.classList.add('hidden');
	}
};

// Hamburger
const navMenu = document.querySelector('#nav-menu');
const hamburger = document.querySelector('#hamburger');
hamburger.addEventListener('click', function () {
	hamburger.classList.toggle('hamburger-active');
	navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
	if (e.target != hamburger && e.target != navMenu) {
		hamburger.classList.remove('hamburger-active');
		navMenu.classList.toggle('hidden');
	}
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
	if (darkToggle.checked) {
		html.classList.add('dark');
		localStorage.theme = 'dark';
	} else {
		html.classList.remove('dark');
		localStorage.theme = 'light';
	}
});

// Pindahkan posisi dark-toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
	darkToggle.checked = true;
} else {
	darkToggle.checked = false;
}
