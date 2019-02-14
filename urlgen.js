
//so this is the function, in which the website will create a new URL with the random string generator.
function base32url() {
	// string text is empty because shit wont work if there would be something
  var text = "";
	// string possible are all of the possibe numbers and letters
  var possible = "ABCDFGHIJLMNOPQRSUVWXYZ123456789";
	//getting random var function
  for (var i = 0; i < 7; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
	//this is opening the text which isnt empty anymore
  window.open(text)
}
console.log(makeid());
