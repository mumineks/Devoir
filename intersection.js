var array2 = ['a','b']
var array = ['a','b','c','d', 'e', 'f']

function intersection(arr, arr2){
	var result = []
	//jeśli element jest

	for(var i = 0; i < arr2.length; i++){
			if((arr.includes(arr2[i]) === true) && (result.includes(arr2[i]) === false))
			{result.push(arr2[i])}
		}
		return result
	}

console.log(intersetion(array, array2));