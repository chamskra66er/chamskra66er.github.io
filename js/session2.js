
var data = sessionStorage.getItem('setting');
var checkbox = document.querySelector("input[id=check]");


var datenow = new Date(Date.now());
var datepast = new Date(Date.parse("05.01.2021"));
var diffTime = Math.abs(datenow - datepast);
var diffDays = (Math.ceil(diffTime / (1000 * 60 * 60 * 24))/365).toFixed(2);
var dateattr = document.getElementById('customdate');
dateattr.textContent = `[${diffDays}].`;

function SetColorIndex(ckeck)
{
	var imgs = document.querySelectorAll('[id=proj]');
	var about = document.querySelector('[id=about]');
	var cham = document.getElementById('cham');
	var foot = document.querySelector('[class=footer]');
	
	var head = document.querySelectorAll('[id=head1]');
	var links = document.querySelectorAll('[class=ext]');
	
	//color for link cadetblue
	
	if(!ckeck){
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
			links[i].style.color = "grey";
		}	

		about.style.color = "black";
		cham.style.color = "black";
		foot.style.color = "black";		
	}	
}

if(data == null){
	sessionStorage.setItem('setting', 'light');
	SetColorIndex(false);
}

if(data=='light'){
	SetColorIndex(true);
}
else{
	SetColorIndex(false);
}



