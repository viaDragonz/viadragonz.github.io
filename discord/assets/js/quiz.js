function findButton(){
	const button = document.getElementById("button");
	button.addEventListener("click", doDisplay, false);
}

function checkForm() {
    var one = document.getElementById("spam").value;
    var two = document.getElementById("ddos").value;
    var three = document.getElementById("say").value;
    var four = document.getElementById("agree").value;
    console.log("one " + one);
    console.log("2 " + two);
    console.log("3 " + three);
    console.log("4 " + four);
    if (one === "#spam" && two === "s3" && three === "staff" && four === "Agree") {
        return true;
    } else {
        return false;
    };
}

function doDisplay() {
    let form = checkForm();
    if (form !== true) {
        alert("You did not answer the quiz correctly!");
    } else {
        let commandBox = document.getElementById("commandbox");
        let icon = document.getElementById("icons");
        commandBox.innerHTML = '<h1>Congratulations for passing the rules test!<h1> <br> <h2>To obtain the Confirmed role, type "/asqw234f" in #confirm<h2><br><h3>If the command does not work, DM a @moderator with the command. <br> <h1>Welcome to the server!</h1>'
        icon.innerHTML = '<img src="checkmark.png" style="height:50px; width:50px;" />'
    };
}




window.addEventListener("load", findButton, false);