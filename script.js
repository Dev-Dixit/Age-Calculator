const secondMain = document.querySelector(".secondmain-div");
secondMain.style.display = "none";

// condition verify for input check for name mail gender
function First() {
	let name = document.querySelector("#name").value;
	let email = document.querySelector("#email").value;
	const firstMain = document.querySelector(".firstmain-div");
	const userName = document.querySelector("#username");
	const valid1 = document.querySelector("#valid1");
	const valid2 = document.querySelector("#valid2");
	const valid3 = document.querySelector("#valid3");
	const gender = document.querySelector("#gender");
	let genVal = gender.value;
	if (name == "") {
		console.log("enter name");
		valid1.style.display = "block";
	} else if (genVal == "Choose") {
		valid2.style.display = "block";
	} else if (email == "") {
		valid3.style.display = "block";
	} else {

		console.log(name);
		userName.innerText = name;
		firstMain.style.display = "none";
		secondMain.style.display = "flex";
	}
};

// Calculate Age function
function calculateAge() {
	const dob = new Date(document.querySelector("#dob").value);


	//data of birth get/
	const ageInMs = Date.now() - dob.getTime();
	const ageDate = new Date(ageInMs);
	const age = Math.abs(ageDate.getUTCFullYear() - 1970);
	const months = ageDate.getUTCMonth();
	const days = ageDate.getUTCDate() - 1;

	let yearVal = document.querySelector("#yearVal");
	let monthVal = document.querySelector("#monthVal");
	let dayVal = document.querySelector("#dayVal");
	let head2 = document.querySelector("#head2");


	// condition verify for input check for dob 
	if (dob == "Invalid Date") {
		console.log("hello")
	} else {
		console.log("years = ", age);
		yearVal.innerText = age;

		console.log("months = ", months);
		monthVal.innerText = months;

		console.log("days = ", days);
		dayVal.innerText = days;
	}

	console.log(dob);

	if (dob == "Invalid Date") {

		head2.style.display = "block";
	} else {
		head2.style.display = "none";
	}
};

function goBack() {
	const firstMain = document.querySelector(".firstmain-div");
	firstMain.style.display = "block";
};