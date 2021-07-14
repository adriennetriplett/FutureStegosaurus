function checkHours() {
	var hour = new Date().getHours();
	if(hour >= 16 || hour <= 2) {
		alert("Future Stegosaurus is currently open!");
	} else {
		alert("Future Stegosaurus is currently closed.");
	}
}