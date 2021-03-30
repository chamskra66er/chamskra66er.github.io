// Сохранение данных в sessionStorage
//sessionStorage.setItem('setting', 'light');

// Получение данных из sessionStorage
var data = sessionStorage.getItem('setting');
var checkbox = document.querySelector("input[id=check]");

if(data == null){
	sessionStorage.setItem('setting', 'light');
}

if(data=='light'){
	document.getElementById("check").checked = true;
}
else{
	document.getElementById("check").checked = false;
}



checkbox.addEventListener('change', e => {
  if (e.target.checked) {
		sessionStorage.setItem('setting', 'light');
		document.getElementById("check").checked = true;
		console.log("Checkbox is checked..");
  } 
  else {
		sessionStorage.setItem('setting', 'black');
		document.getElementById("check").checked = false;
		console.log("Checkbox is not checked..");
	}
});
