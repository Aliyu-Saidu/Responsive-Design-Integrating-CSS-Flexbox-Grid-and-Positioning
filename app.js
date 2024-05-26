
document.querySelector('.icon-menu-open').addEventListener('click', showLink);

document.querySelector('.icon-menu-close').addEventListener('click', hideLink);

function showLink() {
	console.log('You clicked me');
	document.querySelector('.nav-bar').classList.add('show_links');
}

function hideLink() {
	console.log('You clicked me');
	document.querySelector('.nav-bar').classList.remove('show_links');
}