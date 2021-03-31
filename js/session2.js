
var data = sessionStorage.getItem('setting');
var checkbox = document.querySelector("input[id=check]");

function SetColorIndex(ckeck)
{
	var imgs = document.querySelectorAll('[id=proj]');
	var about = document.querySelector('[id=about]');
	var cham = document.getElementById('cham');
	var foot = document.querySelector('[class=footer]');
	
	var head = document.querySelectorAll('[id=head1]');
	var links = document.querySelectorAll('[class=ext]');
	
	//color for link cadetblue
	
	if(ckeck){
		document.body.style.backgroundColor = "rgb(35,35,35)";	
		
		for(var i=0; i<imgs.length;i++)
		{
			imgs[i].style.color = "azure";
			head[i].style.color = "grey";
			links[i].style.color = "cadetblue";
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
			head[i].style.color = "black";
			links[i].style.color = "black";
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
	SetColorIndex(false);
}
else{
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

