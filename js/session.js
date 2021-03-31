
var data = sessionStorage.getItem('setting');
var checkbox = document.querySelector("input[id=check]");

function SetBlackColor(ckeck)
{
	//var header = document.getElementsByClassName('header');
	//var img = document.getElementById('img1');
	var imgs = document.querySelectorAll('[id=img1]');
	if(ckeck){
		document.body.style.backgroundColor = "rgb(35,35,35)";	
		
		//imgs.foreach(element => console.log(element));
		imgs[0].style.color = "red";
		imgs[1].style.color = "red";
	}
	else{
		document.body.style.backgroundColor = "rgb(250,250,250)";
		//header.style.backgroundColor = "rgb(250,250,250)";
		//.style.Color = 'green' ;
		//img.style.Color = "green";
		imgs[0].style.color = "black";
		imgs[1].style.color = "black";		
	}	
}

if(data == null){
	sessionStorage.setItem('setting', 'light');
}

if(data=='light'){
	document.getElementById("check").checked = true;
	SetBlackColor(false);
}
else{
	document.getElementById("check").checked = false;
	SetBlackColor(true);
}



checkbox.addEventListener('change', e => {
  if (e.target.checked) {
		sessionStorage.setItem('setting', 'light');
		document.getElementById("check").checked = true;
		console.log("Checkbox is checked..");
		SetBlackColor(false);
  } 
  else {
		sessionStorage.setItem('setting', 'black');
		document.getElementById("check").checked = false;
		console.log("Checkbox is not checked..");
		SetBlackColor(true);
	}
});

