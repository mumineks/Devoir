var y = /\s./;


function upper(str){
	var result ='';
for(var i = 0; i < str.length; i++){
	if(i===0){
	result+= str[i].toUpperCase();}
	else if(y.test(str[i-1] + str[i])){
	result += str[i].toUpperCase();
	}else{
		result += str[i];
	}
}
return result
}




