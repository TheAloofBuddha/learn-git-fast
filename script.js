var ageInput = prompt("Enter your age");
age > 18 ? alert("True"): alert("False");

var official = prompt('What is the “official" name of JavaScript');

if (official == "ECMAScript") {
	alert("Right")
}
else{
	alert("Didn't know? It is ECMAScript")
}

var userNumber = prompt('Enter a number')
if (userNumber > 0){
	alert("1")
	alert(userNumber)
}
else if (userNumber < 0){
	alert("-1")
}
else{
	alert(0)
}

let a = prompt("Write a random number")

switch(a){
	case 1:
		alert(1)
		break;
	case 2:
		alert(2)
		break;
	case 3:
		alert(3)
		break;
	default:
		alert("Your number is greater than 3, this is your number: " + a)
}