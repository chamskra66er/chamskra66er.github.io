
var data = sessionStorage.getItem('setting');
var checkbox = document.querySelector("input[id=check]");

function SetColorIndex(ckeck)
{
	var imgs = document.querySelectorAll('[id=img1]');
	var about = document.querySelector('[id=about]');
	var cham = document.getElementById('cham');
	var foot = document.querySelector('[class=footer]');
	
	var hh = document.getElementById("git");
	var icon = document.getElementById("ic");
	
	if(!ckeck){
		document.body.style.backgroundColor = "rgb(35,35,35)";	
		
		for(var i=0; i<imgs.length;i++)
		{
			imgs[i].style.color = "azure";
		}
		
		about.style.color = "azure";
		cham.style.color = "azure";
		foot.style.color = "azure";
		
		hh.src = "./image/git1.png";
		icon.src = "./image/moon.png";

		icon.style = "margin:-2px 0 0 1px";
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

		hh.src = "./image/git.png";
		
		icon.src = "./image/son.png";

		icon.style = "margin:-2px 0 0 22px";
	}	
}

if(data == null){
	sessionStorage.setItem('setting', 'black');
	document.getElementById("check").checked = false;
	SetColorIndex(false);
}
if(data=='light'){
	document.getElementById("check").checked = true;
	SetColorIndex(true);
}
else{
	document.getElementById("check").checked = false;
	SetColorIndex(false);
}



checkbox.addEventListener('change', e => {
  if (e.target.checked) {
		sessionStorage.setItem('setting', 'light');
		document.getElementById("check").checked = true;
		SetColorIndex(true);
  } 
  else {
		sessionStorage.setItem('setting', 'black');
		document.getElementById("check").checked = false;
		SetColorIndex(false);
	}
});

