
const x = (str) => {
	for(let i = 0; i< str.length - 3; i++ ){

	}

	if(str.charAt(str.length-3) == 1 &&  str.charAt(str.length - 2) == 0 && str.charAt(str.length - 1 )== 1)
		console.log("YES")

	else 
		console.log("NO")
	
}

x("1000101")
x("1000100")