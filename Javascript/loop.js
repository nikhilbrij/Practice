const tryLoop = [1,2,3,4,5,6];

loopFun = (arr) => {
	arr.forEach(item => {
		console.log(item);

		if(item === 5){
			console.log(item)
		}
	})
}

loopFun(tryLoop)

loopFun1 = (arr) => {
	for (item of arr){
		console.log(item)
	}
}

loopFun1(tryLoop)