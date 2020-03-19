var array = ['a','b','c','d']
var array2 = ['a','b','c','d', 'e', 'f']

function union(arr, arr2){
	var result = arr;
	for(var i = 0; i <= arr2.length; i++){
		var y =/[arr2[i]]/
		if(y.test(arr) != true){
			result.push(arr2[i])
		}
	}
	return result
}