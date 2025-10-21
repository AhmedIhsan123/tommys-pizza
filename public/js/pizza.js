const button = document.getElementById("submit-btn");
const form = document.getElementById("pizza-form");
const fnameErr = document.getElementById("err-fname");
const lnameErr = document.getElementById("err-lname");
let fname = "";
let lname = "";

form.onsubmit = () => {
	let isValid = true;
	fname = document.getElementById("fname").value.trim();
	lname = document.getElementById("lname").value.trim();

	if (!fname) {
		fnameErr.style.display = "block";
		isValid = false;
	} else {
		fnameErr.style.display = "none";
	}

	if (!lname) {
		lnameErr.style.display = "block";
		isValid = false;
	} else {
		lnameErr.style.display = "none";
	}

	return isValid;
};

function clearErrors() {
	document.querySelectorAll(".error").forEach((el) => {
		el.style.display = "none";
	});
}
