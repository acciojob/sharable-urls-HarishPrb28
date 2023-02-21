// your code here
function concatText(){
	name = document.getElementById("name").value
	year = document.getElementById("year").value
	url= document.getElementById("url")
	if(name && year){
		url.innerHTML =`https://localhost:8080/?${name}&${year}`
	}
	else if(name && !year){
		url.innerHTML =`https://localhost:8080/?${name}`
	}
	else if(!name && year){
		url.innerHTML =`https://localhost:8080/?${year}`
	}
}