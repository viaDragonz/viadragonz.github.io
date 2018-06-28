function findButton(){
	const button = document.getElementById("button");
	button.addEventListener("click", validateForm, false);
	button.addEventListener("click", save, false);
}

function validateForm(x) {
    if (x == "") {
        alert("All values must be filled out");
        return false;
    } else {
		return true;
	}
}

function save() {
	let values = [];
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let phone = document.getElementById("phone").value;
	let dob = document.getElementById("DOB").value;
	let dobstr = String(dob);
	let gender = document.getElementById("gender").value;
	values.push(name);
	values.push(email);
	values.push(phone);
	values.push(dobstr);
	values.push(gender);
	ArrayLength = values.length
	let i
	for (i = 0; i < ArrayLength; i++) {
		validateForm(values[i])
	}
		if (validateForm() !== true) {
			return
		} else {
			display(values);
		};
//	values.forEach(function(item) {
//		display(item);
//		});
}

function display(x) {
	let displaybox = document.getElementById("bottombox");
	displaybox.innerHTML = "Application: <br><br> Name: " + x[0] + "<br> Email: " + x[1] + "<br> Phone #: " + x[2] + "<br> DOB: " + x[3] + "<br> Gender: " + x[4] + "<br>"
}


window.addEventListener("load", findButton, false);