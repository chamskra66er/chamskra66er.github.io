
var data = sessionStorage.getItem('setting');
var checkbox = document.querySelector("input[id=check]");

function SetColorIndex(ckeck)
{
	var about = document.querySelector('[id=about]');
	var cham = document.getElementById('cham');
	var foot = document.querySelector('[class=footer]');
	
	var head = document.querySelectorAll('[id=head1]');
	
	if(ckeck){
		document.body.style.backgroundColor = "rgb(35,35,35)";	
		
		for(var i=0; i<head.length;i++)
		{
			head[i].style.color = "azure";
		}	
		
		about.style.color = "azure";
		cham.style.color = "azure";
		foot.style.color = "azure";
	}
	else{
		document.body.style.backgroundColor = "rgb(250,250,250)";

		for(var i=0; i<head.length;i++)
		{
			head[i].style.color = "black";
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



