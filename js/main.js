//code:http://infoseek_rip.g.ribbon.to/iswebmag.hp.infoseek.co.jp/sample147.html

var birth_year = 2008;
var birth_month = 3;
var birth_day = 15;
var age = 0;
now = new Date();
year = now.getYear();
month = now.getMonth() +1;
day = now.getDate();
if (year < 1900) { year = year + 1900; }
if (month < birth_month) { age = year - birth_year - 1 }
if (month > birth_month) { age = year - birth_year }
if (month == birth_month) {
    if (day < birth_day) { age = year - birth_year - 1 }
    else { age = year - birth_year }
}
document.getElementById("age").innerHTML = age + "歳";