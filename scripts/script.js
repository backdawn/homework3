function show_hide_password(target){
	var input = document.getElementById('password-input');
	var img = document.getElementById('image');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
		img.src='img/eye-open.png'
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
		img.src='img/eye-close.png'
	}
	return false;
}