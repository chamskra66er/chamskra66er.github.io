
var data = sessionStorage.getItem('setting');
var checkbox = document.querySelector("input[id=check]");

function SetColorIndex(ckeck)
{
	var imgs = document.querySelectorAll('[id=img1]');
	var about = document.querySelector('[id=about]');
	var cham = document.getElementById('cham');
	var foot = document.querySelector('[class=footer]');
	
	if(ckeck){
		document.body.style.backgroundColor = "rgb(35,35,35)";	
		
		for(var i=0; i<imgs.length;i++)
		{
			imgs[i].style.color = "azure";
		}
		
		about.style.color = "azure";
		cham.style.color = "azure";
		foot.style.color = "azure";
	}
	else{
		document.body.style.backgroundColor = "rgb(250,250,250)";

		for(var i=0; i<imgs.length;i++)
		{
			imgs[i].style.color = "black";
		}	

		about.style.color = "black";
		cham.style.color = "black";
		foot.style.color = "black";		
	}	
}

if(data == null){
	sessionStorage.setItem('setting', 'light');
}

if(data=='light'){
	document.getElementById("check").checked = true;
	SetColorIndex(false);
}
else{
	document.getElementById("check").checked = false;
	SetColorIndex(true);
}



checkbox.addEventListener('change', e => {
  if (e.target.checked) {
		sessionStorage.setItem('setting', 'light');
		document.getElementById("check").checked = true;
		console.log("Checkbox is checked..");
		SetColorIndex(false);
  } 
  else {
		sessionStorage.setItem('setting', 'black');
		document.getElementById("check").checked = false;
		console.log("Checkbox is not checked..");
		SetColorIndex(true);
	}
});

