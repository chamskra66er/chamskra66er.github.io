var obj = {
   table: []
};

var imgs = document.querySelectorAll('[id=pageLoad]');

if(isNaN(numLoads) || numLoads <= 0) 
{ 
	setCookie('pageLoads', 1); 
}
else 
{ 
	setCookie('pageLoads', numLoads + 1);
	document.getElementById("pageLoad").value = numLoads + 1;
}

console.log(getCookie('pageLoads'));


obj.table.push({id: 1, square:2});
var dataJson = JSON.stringify(obj);
var fs = require('fs');
fs.writeFile('data/sampledata.json', json, 'utf8', callback);

function setCookie (cookieName, cookieValue, nDays) {
        var today  = new Date(),
            expire = new Date();

        if (nDays === null || nDays === 0) { 
            nDays = 1;
        }

        expire.setTime(today.getTime() + 3600000 * 24 * nDays);

        document.cookie = cookieName + "=" + escape(cookieValue) + ";expires=" + expire.toGMTString();
    };

function getCookie (cookieName) {
        var theCookie = " " + document.cookie,
            ind = theCookie.indexOf(" " + cookieName + "=");

        if (ind === -1) { ind = theCookie.indexOf(";" + cookieName + "="); }
        if (ind === -1 || cookieName === "") { return ""; }

        var ind1 = theCookie.indexOf(";", ind + 1);

        if (ind1 === -1) { ind1 = theCookie.length; }

        return unescape(theCookie.substring(ind + cookieName.length + 2, ind1));
    };