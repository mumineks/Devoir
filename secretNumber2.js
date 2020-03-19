var random = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

console.log(random)
var pick = parseInt(prompt("Wybierz numer od 1 do 100"));
while(true){
while(pick !== random){
	if(pick < random){
	alert("Szukana liczba jest większa")
	pick = parseInt(prompt("Wybierz numer od 1 do 100"));
}
   else{
    alert("Szukana liczba jest mniejsza")
    pick = parseInt(prompt("Wybierz numer od 1 do 100")); }


 if(pick === random){
	alert("Gratulacje")
	var replay = prompt("Czy chcesz zagrać jeszcze raz? Y/N").toUpperCase();
	if(replay == "Y"){
	continue;
}
else if(replay == "N"){
	break
}
else{
	replay = prompt("Czy chcesz zagrać jeszcze raz? Y/N").toUpperCase();
}
	}
}

}
