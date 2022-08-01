const header = document.getElementById('header-container');
console.log(header)

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 100) {
		header.style.backgroundColor = '#27272a';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});