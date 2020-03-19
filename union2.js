var array2 = ['a','b','c','d']
var array = ['a','b','c','d', 'e', 'f']

function union(arr, arr2){
	var result = arr
	//jeśli element jest

	for(var i = 0; i < arr2.length; i++){
			if(arr.includes(arr2[i]) === false)
			{result.push(arr2[i])}
		}
		return result
	}

console.log(union(array, array2));