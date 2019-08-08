function myValildation(){
	let myValue = document.getElementById('myform').value
	if(isNaN(myValue) || myValue < 1 || myValue > 30)
		console.log('Not a vaild Input')
	else
		console.log('Numebr is OK')
}

// Form Validation

 document.querySelector('.myform').addEventListener('submit' , (event) => {
 	event.preventDefault()
 	console.log(event.target.username.value);
 	console.log(event.target.realname.value);
 	event.target.username.value = ""
 	event.target.realname.value = ""

 })