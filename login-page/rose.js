// function nameDisplayCheck(e) {
// 	// form.addEventListener('submit', e => e.preventDefault());

// 	// const form = document.querySelector("form");
// 	// const nameInput = document.getElementByClass(".Username").value;
// 	// const submitBtn = document.querySelector(".submit-ico");

// 	// const Welcome = document.querySelector('.welcome');

// 	// form.addEventListener('submit', e => e.preventDefault());

// 	// submitBtn.addEventListener('click', () => {
// 	// 	localStorage.setItem("Username", nameInput.value);
// 	// });

// 	// if (localStorage.getItem('Username')) {
// 	// 	const Username = localStorage.getItem("Username");
// 	// 	localStorage.setItem("Username", nameInput.value);
// 	// 	Welcome.textContent = `WELCE ${Username}`;
// 	// }

// 	// const nameInput = document.getElementByClass(".Username").value;
// 	// console.log(nameInput);
// 	// localStorage.setItem("Username", nameInput);
// 	// document.getElementById("welcome").innerHTML=localStorage.getItem("Username");
// }

// // function updateHTML(name) {
// // 	const nameGot = localStorage.getItem('name')
// // 	document.getElementById("welcome").innerHTML = "Welcome " + nameGot;
// // }

// function nameDisplayCheck(e) {
// 	document.getElementById("myForm").addEventListener("submit", e => e.preventDefault());
//  	const nameInput = document.getElementById("Username");
//  	localStorage.setItem("name", nameInput);
//  	// const nameGot = localStorage.getItem(name.value);
// 	// document.getElementById("welcome").innerHTML = "Welcome " + nameGot;
//  	document.getElementById("welcome").innerHTML=localStorage.getItem("nameGot");
//  	console.log("JOY");
// }

// window.onload = function() {
// 	var inputElement = document.getElementById('Username');
// 	var inputValue = inputElement.value;
// 	var displayElement = document.getElementById('welcome');
// 	displayElement.textContent = inputValue;
// }

function nameDisplayCheck() {
	const nameInput = document.querySelector(".Username").value;
	console.log(nameInput);
	localStorage.setItem("Username", nameInput);
	document.getElementById("welcome").textContent = "WELCO" + localStorage.getItem("Username");
}
