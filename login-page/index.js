function nameDisplayCheck() {
	// const form = document.querySelector("form");
	const nameInput = document.getElementByClass(".Username").value;
	// const submitBtn = document.querySelector(".submit-ico");

	// const Welcome = document.querySelector('.welcome');

	// form.addEventListener('submit', e => e.preventDefault());

	// submitBtn.addEventListener('click', () => {
	// 	localStorage.setItem("Username", nameInput.value;
	// });

	// if (localStorage.getItem('Username')) {
	// 	const Username = localStorage.getItem("Username");
	// 	localStorage.setItem("Username", nameInput.value;
	// 	Welcome.textContent = `WELCE ${Username}`;
	// }

	const nameInput = document.getElementByClass(".Username").value;
	localStorage.setItem("Username", nameInput);
	document.getElementById("welcome").innerHTML=localStorage.getItem("Username");
}